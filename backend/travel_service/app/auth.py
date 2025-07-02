from fastapi import HTTPException
from fastapi.security import OAuth2PasswordBearer
import requests

from app.config import settings

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl=f"{settings.AUTH_SERVICE_EXTERNAL_URL}auth/token"
)

"""
Call the auth service and return the username if token is valid.
"""


def call_auth_internally(token: str) -> str:
    response = requests.get(
        f"{settings.AUTH_SERVICE_INTERNAL_URL}/auth/verify?token={token}"
    )
    json = response.json()
    if json["valid"] != True:
        raise HTTPException(status_code=401, detail="Invalid token")

    return json["username"]
