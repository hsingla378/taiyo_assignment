import React from "react";
import ChartDashboard from "../components/ChartDashboard";
import MapDashboard from "../components/MapDashboard";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 md:p-10">
      <ChartDashboard />
      <MapDashboard />
    </div>
  );
};

export default Dashboard;
