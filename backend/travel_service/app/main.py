from fastapi import FastAPI

from .routers import recommendations, trips

app = FastAPI()


app.include_router(
    recommendations.router, prefix="/recommendations", tags=["recommendations"]
)
app.include_router(trips.router, prefix="/trips", tags=["trips"])
