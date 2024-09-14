import React from "react";
import { useQuery } from "react-query";
import { Line } from "react-chartjs-2";
import { fetchHistoricalData } from "../utils/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { HistoricalData } from "../utils/types";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartDashboard: React.FC = () => {
  const { data, isLoading, error } = useQuery<HistoricalData>(
    "historicalData",
    fetchHistoricalData
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>Error loading data</div>;
  }

  const labels = Object.keys(data.cases);
  const cases = Object.values(data.cases);
  const deaths = Object.values(data.deaths);
  const recovered = Object.values(data.recovered);

  const chartData = {
    labels,
    datasets: [
      {
        label: "Cases",
        data: cases,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Deaths",
        data: deaths,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
      {
        label: "Recovered",
        data: recovered,
        borderColor: "rgba(153, 102, 255, 1)",
        fill: false,
      },
    ],
  };

  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="text-xl font-bold mb-4">COVID-19 Cases Fluctuation</h2>
      <Line data={chartData} />
    </div>
  );
};

export default ChartDashboard;
