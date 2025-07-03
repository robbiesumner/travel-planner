from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from pymongo import MongoClient
import os

from app.config import settings

app = FastAPI()

templates = Jinja2Templates(directory="app/templates")

MONGODB_URI = settings.MONGODB_URI
MONGODB_DB = settings.MONGODB_DB
client = MongoClient(MONGODB_URI)
db = client[MONGODB_DB]


@app.get("/", response_class=HTMLResponse)
def dashboard(request: Request):
    destination_config = [
        {"$group": {"_id": "$destination", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
    ]
    destination_results = list(db.search_logs.aggregate(destination_config))

    trip_type_config = [
        {"$group": {"_id": "$destination_type", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}},
    ]
    trip_type_results = list(db.search_logs.aggregate(trip_type_config))

    return templates.TemplateResponse(
        "dashboard.html",
        {
            "request": request,
            "destinations": destination_results,
            "trip_types": trip_type_results,
            "total_searches": len(destination_results),
        },
    )
