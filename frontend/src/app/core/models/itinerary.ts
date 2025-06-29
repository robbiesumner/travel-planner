export interface ItineraryDay {
  day: number;
  activities: string[];
  tips: string[];
}

export type Itinerary = ItineraryDay[];
