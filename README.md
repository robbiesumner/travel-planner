# travel-planner

## 1. Environment Setup

For some services, you need to set up environment variables. Copy the `.env.example` file to `.env` and fill in the required values.

## 2. Running the Application
To run the application, use Docker Compose. Make sure you have Docker installed and running, then execute the following command in the root directory of the project:

```bash
docker-compose up -d
```

## Microservices

### Microservice: Travel Service

This microservice provides travel planning functionalities using FastAPI. It uses Google GenAI for generating travel plans and destination recommendations. It is important to set the `GENAI_API_KEY` in your `.env` file to use this service.
When running the service, it will be available at http://localhost:8000.