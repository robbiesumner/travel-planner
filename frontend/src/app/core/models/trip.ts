export interface ItineraryDay {
  day: number;
  activities: string[];
  notes: string;
}

export type Itinerary = ItineraryDay[];

export interface Trip {
  destination: string;
  durationDays: number;
  itinerary: Itinerary;
  tips: string[];
  id: string;
}
