import ChartDashboard from "../components/ChartDashboard";
import Header from "../components/Header";
import MapDashboard from "../components/MapDashboard";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <ChartDashboard />
      <MapDashboard />
    </div>
  );
};

export default Dashboard;
