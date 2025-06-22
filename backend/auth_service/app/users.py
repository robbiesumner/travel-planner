from .models import UserInDB
from typing import Optional


# Simulierte Datenbank (ersetzen wir später durch echte DB)
fake_users_db = {
    "test@example.com": {
        "username": "test@example.com",
        "full_name": "Max Mustermann",
        "hashed_password": "$2b$12$...deinHash...",
    }
}

def get_user_by_username(username: str):
    user_dict = fake_users_db.get(username)
    if not user_dict:
        return None
    return UserInDB(**user_dict)  


def save_user(user: UserInDB):
    fake_users_db[user.username] = user.dict()
