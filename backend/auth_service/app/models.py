from pydantic import BaseModel, EmailStr


# Registrierung
class UserCreate(BaseModel):
    username: EmailStr
    full_name: str
    password: str


# Rückgabe
class User(BaseModel):
    username: EmailStr
    full_name: str


# Datenbank (intern)
class UserInDB(User):
    hashed_password: str


# Token
class Token(BaseModel):
    access_token: str
    token_type: str
