from pymongo import MongoClient
from bson.objectid import ObjectId

from app.config import settings

client = MongoClient(settings.MONGODB_URI)
db = client[settings.MONGODB_DB]


def get_all_trips(username: str):
    return list(db.trips.find({"username": username}))


def get_trip_by_id(trip_id: str):
    return db.trips.find_one({"_id": ObjectId(trip_id)})


def create_trip(trip_data: dict):
    result = db.trips.insert_one(trip_data)
    return str(result.inserted_id)


def log_request(data: dict):
    """Log a search request to the search_logs collection."""
    db.search_logs.insert_one(data)
