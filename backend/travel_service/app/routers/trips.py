from fastapi import APIRouter, HTTPException, Depends
from app.models import Trip
from app.db_conn import get_all_trips, get_trip_by_id, create_trip
from bson.errors import InvalidId

from app.auth import call_auth_internally, oauth2_scheme

router = APIRouter()


@router.get("/", response_model=list[Trip])
def get_trips(token: str = Depends(oauth2_scheme)):
    username = call_auth_internally(token)

    trips = get_all_trips(username)
    for trip in trips:
        trip["_id"] = str(trip["_id"])
    return trips


@router.get("/{trip_id}", response_model=Trip)
def get_trip_by_id_endpoint(trip_id: str, token: str = Depends(oauth2_scheme)):
    username = call_auth_internally(token)
    try:
        trip = get_trip_by_id(trip_id)
    except (InvalidId, TypeError):
        raise HTTPException(status_code=404, detail="Invalid trip id")
    if not trip:
        raise HTTPException(status_code=404, detail="Trip not found")
    if trip["username"] != username:
        raise HTTPException(status_code=403, detail="Not owner of trip")
    trip["_id"] = str(trip["_id"])
    return trip


@router.post("/")
def create_trip_endpoint(trip_data: Trip, token: str = Depends(oauth2_scheme)):
    username = call_auth_internally(token)

    trip_dict = trip_data.model_dump()
    trip_dict["username"] = username

    trip_id = create_trip(trip_dict)
    return {"_id": trip_id}
