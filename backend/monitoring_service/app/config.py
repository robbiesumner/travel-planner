from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    MONGODB_URI: str = "mongodb://localhost:27017/"
    MONGODB_DB: str = "monitoring_service"


settings = Settings()
