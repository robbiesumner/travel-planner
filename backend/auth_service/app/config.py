from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    SECRET_KEY: str = "my-super-secret-key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 300
    # Postgres
    DB_USER: str = "postgres"
    DB_PASSWORD: str = "password"
    DB_NAME: str = "travel_planner"
    DB_HOST: str = "localhost"
    DB_PORT: int = 5432

settings = Settings()
