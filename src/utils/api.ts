import axios from "axios";

// Type for the historical data API response
interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

// Fetch historical data for cases
export const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const { data } = await axios.get(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return data;
};
