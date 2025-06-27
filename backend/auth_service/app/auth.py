from fastapi import APIRouter, HTTPException, Depends
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from .models import UserCreate, User, Token, UserInDB
from .users import get_user_by_username, save_user
from .security import (
    hash_password,
    verify_password,
    create_access_token,
    decode_access_token,
)


router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="auth/token")


# Registrierung
@router.post("/register", response_model=User)
def register(user: UserCreate):
    if get_user_by_username(user.username):
        raise HTTPException(status_code=400, detail="Benutzer existiert bereits.")

    hashed = hash_password(user.password)
    user_in_db = UserInDB(
        username=user.username, full_name=user.full_name, hashed_password=hashed
    )
    save_user(user_in_db)

    return User(username=user.username, full_name=user.full_name)


# Login
@router.post("/token")
def login(form: OAuth2PasswordRequestForm = Depends()):
    user = get_user_by_username(form.username)
    if not user or not verify_password(form.password, user.hashed_password):
        raise HTTPException(status_code=400, detail="Invalid credentials")

    access_token = create_access_token(data={"sub": user.username})
    return {"access_token": access_token, "token_type": "bearer"}


# User-Profil (für eingeloggten User)
@router.get("/me", response_model=User)
def get_me(token: str = Depends(oauth2_scheme)):
    try:
        payload = decode_access_token(token)
        username = payload.get("sub")
        user = get_user_by_username(username)
        if not user:
            raise HTTPException(status_code=401, detail="Benutzer nicht gefunden.")
        return user
    except Exception:
        raise HTTPException(status_code=401, detail="Token ungültig.")


# Für andere Microservices: Token-Verifizierung
@router.post("/verify")
def verify_token(token: str):
    try:
        payload = decode_access_token(token)
        return {"valid": True, "username": payload.get("sub")}
    except Exception:
        return {"valid": False}


@router.post("/register")
def register_user(user: UserCreate):
    if user.username in fake_users_db:
        raise HTTPException(status_code=400, detail="Username already exists")

    hashed_password = get_password_hash(user.password)
    user_in_db = UserInDB(username=user.username, hashed_password=hashed_password)
    fake_users_db[user.username] = user_in_db

    return {"message": "User registered", "user": {"username": user.username}}
