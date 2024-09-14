import axios from "axios";
import { CountryInfo, HistoricalData } from "./types";

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
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
}

// Fetch historical data for cases
export const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const { data } = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return data;
};

// Fetch country-specific COVID-19 data
export const fetchCountryData = async (): Promise<CountryData[]> => {
  const { data } = await axios.get("https://disease.sh/v3/covid-19/countries");
  return data;
};
