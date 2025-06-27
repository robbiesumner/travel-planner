from fastapi import APIRouter, HTTPException
from app.models import Trip
from app.db_conn import get_all_trips, get_trip_by_id, create_trip
from bson.errors import InvalidId

router = APIRouter()


@router.get("/", response_model=list[Trip])
def get_trips():
    trips = get_all_trips()
    for trip in trips:
        trip["_id"] = str(trip["_id"])
    return trips


@router.get("/{trip_id}", response_model=Trip)
def get_trip_by_id_endpoint(trip_id: str):
    try:
        trip = get_trip_by_id(trip_id)
    except (InvalidId, TypeError):
        raise HTTPException(status_code=404, detail="Invalid trip id")
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    trip["_id"] = str(trip["_id"])
    return trip


@router.post("/")
def create_trip_endpoint(trip_data: Trip):
    trip_dict = trip_data.model_dump()
    trip_id = create_trip(trip_dict)
    return {"_id": trip_id}
