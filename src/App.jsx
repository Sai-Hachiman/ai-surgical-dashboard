import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import Reports from "./pages/Reports";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import Monitoring from "./pages/Monitoring";
import Analytics from "./pages/Analytics";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/patients" element={<Patients />} />

        <Route path="/doctors" element={<Doctors />} />

        <Route path="/analytics" element={<Analytics />} />

        <Route path="/alerts" element={<Alerts />} />

        <Route path="/settings" element={<Settings />} />

        <Route path="/monitoring" element={<Monitoring />} />

        <Route path="/reports" element={<Reports />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;