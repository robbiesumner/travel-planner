from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    SECRET_KEY: str = "my-super-secret-key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

settings = Settings()
