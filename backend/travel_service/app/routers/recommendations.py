from fastapi import APIRouter
from fastapi.responses import JSONResponse
from google import genai

import os
import json

from app.models import TravelConfig
from app.config import settings


router = APIRouter()


genai_client = genai.Client(api_key=settings.GENAI_API_KEY)


def clean_genai_json_response(text: str) -> str:
    """Clean the response text from the AI model to ensure valid JSON."""
    if text.startswith("```json"):
        text = text[7:]
    if text.startswith("```"):
        text = text[3:]
    if text.endswith("```"):
        text = text[:-3]
    return text.strip()


@router.post("/destinations/")
def destinations(config: TravelConfig):
    prompt = f"""
        Recommend travel destinations based on the following configuration. The configuration includes:
        - Residency: The user's country of residence
        - Cost: The maximum budget for the trip in USD
        - Duration: The time window for the trip in days
        - Destination Type: The type of destination preferred (e.g., beach, city, mountain)
        - Temperature: The preferred temperature in Celsius
        
        Please provide a list of 5 destinations with brief descriptions.
        Format the response as only a JSON array of objects, each containing 'name' and 'description' fields like this:
        [
            {{"name": "Destination 1", "description": "Description of destination 1"}},
            {{"name": "Destination 2", "description": "Description of destination 2"}},
            {{"name": "Destination 3", "description": "Description of destination 3"}},
        ]
        Here is the configuration:
        {config.model_dump_json(indent=2)}
        """
    response = genai_client.models.generate_content(
        model="gemini-2.5-flash", contents=prompt
    )

    if response and response.text:
        content = clean_genai_json_response(response.text)
        try:
            destinations = json.loads(content)
            return JSONResponse(status_code=200, content=destinations)
        except Exception:
            return JSONResponse(
                status_code=500,
                content={
                    "error": "Failed to parse AI response as JSON.",
                    "raw": response.text,
                },
            )
    else:
        return JSONResponse(
            status_code=500,
            content={"error": "No response from AI model."},
        )


@router.post("/trip/")
def trip(config: TravelConfig, destination: str):
    prompt = f"""
        Plan a complete trip based on the following configuration. The configuration includes:
        - Residency: The user's country of residence
        - Cost: The maximum budget for the trip in USD
        - Duration: The time window for the trip in days
        - Destination Type: The type of destination preferred (e.g., beach, city, mountain)
        - Temperature: The preferred temperature in Celsius, not necessarily actual temperature
        
        Please provide:
        - An overall itinerary (day-by-day breakdown)
        - Total trip duration in days
        - Key things to see and do each day
        - Any travel tips or notes
        Format the response as a JSON object with these fields:
        {{
            "duration_days": <int>,
            "itinerary": [
                {{"day": 1, "activities": ["..."], "notes": "..."}},
                ...
            ],
            "tips": ["..."]
        }}
        
        Here is the destintation and configuration:
        Destination: {destination}
        Configurations: {config.model_dump_json(indent=2)}
    """
    response = genai_client.models.generate_content(
        model="gemini-2.5-flash", contents=prompt
    )

    if response and response.text:
        content = clean_genai_json_response(response.text)
        try:
            trip_plan = json.loads(content)
            return JSONResponse(status_code=200, content=trip_plan)
        except Exception:
            return JSONResponse(
                status_code=500,
                content={
                    "error": "Failed to parse AI response as JSON.",
                    "raw": response.text,
                },
            )
    else:
        return JSONResponse(
            status_code=500,
            content={"error": "No response from AI model."},
        )
