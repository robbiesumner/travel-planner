from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import recommendations, trips

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    recommendations.router, prefix="/recommendations", tags=["recommendations"]
)
app.include_router(trips.router, prefix="/trips", tags=["trips"])
