import ChartDashboard from "../components/ChartDashboard";
import Sidebar from "../components/Sidebar";
import MapDashboard from "../components/MapDashboard";

const Dashboard = () => {
  return (
    <div className="grid md:grid-cols-12">
      <Sidebar className="md:col-span-2 md:h-[100vh] md:fixed md:max-w-[300px]" />
      <div className="md:col-span-10 md:ml-[300px] md:w-full">
        <ChartDashboard />
        <MapDashboard />
      </div>
    </div>
  );
};

export default Dashboard;
