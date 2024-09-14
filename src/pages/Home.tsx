import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="grid md:grid-cols-2 text-5xl gap-4">
        <Link
          to="/contacts"
          className="bg-blue-600 text-white p-2 rounded-lg text-center"
        >
          Contacts
        </Link>
        <Link
          to="/dashboard"
          className="bg-blue-600 text-white p-2 rounded-lg text-center"
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Home;
