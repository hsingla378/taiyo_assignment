// Contact object type
export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  active: boolean;
};

// Contact state type
export interface ContactState {
  contacts: Contact[];
}

// Contact form state type
export interface FormData {
  firstName: string;
  lastName: string;
  active: boolean;
}

// Type for the historical data API response
export interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

// Define the TypeScript type for country-specific COVID-19 data
export interface CountryInfo {
  _id: number;
  iso2: string;
  iso3: string;
  lat: number;
  long: number;
  flag: string;
}

// Country Data for Map
export interface CountryData {
  updated: number;
  country: string;
  countryInfo: CountryInfo;
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: string;
}
