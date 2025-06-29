from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    # MongoDB connection string
    MONGODB_URI: str = "mongodb://localhost:27017"
    DB_NAME: str = "trips"

    # GenAI
    GENAI_API_KEY: str = "your_genai_api_key_here"

    # Authentication
    AUTH_SERVICE_INTERNAL_URL: str = "http://auth_service:80/"
    AUTH_SERVICE_EXTERNAL_URL: str = "http://localhost:8000/"


settings = Settings()
