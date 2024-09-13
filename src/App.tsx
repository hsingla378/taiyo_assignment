import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/Contacts";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
