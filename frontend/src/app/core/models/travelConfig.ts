export interface DestinationPreferences {
  residency: string;
  cost: number;
  duration_days: number;
  destination_type: string;
  temperature: number;
}

export interface TravelConfig extends DestinationPreferences {
  destination: string;
}
