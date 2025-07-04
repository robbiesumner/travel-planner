from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    SECRET_KEY: str = "my-super-secret-key"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 300
    # Postgres
    POSTGRES_USER: str = "postgres"
    POSTGRES_PASSWORD: str = "password"
    POSTGRES_DB: str = "travel_planner"
    POSTGRES_HOST: str = "localhost"
    POSTGRES_PORT: int = 5432


settings = Settings()
