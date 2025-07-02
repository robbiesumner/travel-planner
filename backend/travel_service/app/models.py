from typing import Optional
from pydantic import BaseModel, Field


class DestinationPreference(BaseModel):
    residency: str = Field(examples=["Germany", "USA", "India"])
    cost: int = Field(
        examples=[1000, 2000, 5000], description="Maximum budget for the trip in USD"
    )
    duration_days: int = Field(examples=[3, 4, 10], description="Time window in days")
    destination_type: Optional[str] = Field(examples=["beach", "city", "mountain"])
    temperature: Optional[int] = Field(
        examples=[-10, 0, 20, 30], description="Preferred temperature in Celsius"
    )


class TravelConfig(DestinationPreference):
    destination: str = Field(
        examples=["Paris", "New York", "Tokyo"], description="Trip destination"
    )


class Itinerary(BaseModel):
    day: int = Field(examples=[1, 2, 3], description="Day of the trip")
    activities: list[str] = Field(description="List of activities planned for the day")
    notes: str = Field(description="Tips or notes for the day")


class TripCreate(BaseModel):
    destination: str = Field(
        examples=["Paris", "New York", "Tokyo"], description="Trip destination"
    )
    duration_days: int = Field(examples=[3, 4, 10], description="Time window in days")
    itinerary: list[Itinerary]
    tips: list[str] = Field(description="List of travel tips or notes for the trip")


class TripResponse(TripCreate):
    id: str = Field(description="Unique identifier for the trip")
