import os
from pymongo import MongoClient
from bson.objectid import ObjectId

MONGODB_URI = os.getenv("MONGODB_URI")
DB_NAME = os.getenv("MONGODB_DB")

client = MongoClient(MONGODB_URI)
db = client[DB_NAME]

# Helper functions for trips


def get_all_trips():
    return list(db.trips.find())


def get_trip_by_id(trip_id: str):
    return db.trips.find_one({"_id": ObjectId(trip_id)})


def create_trip(trip_data: dict):
    result = db.trips.insert_one(trip_data)
    return str(result.inserted_id)
