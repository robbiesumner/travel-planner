export interface ItineraryDay {
  day: number;
  activities: string[];
  notes: string;
}

export type Itinerary = ItineraryDay[];
