import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DonationCenter from './components/DonationCenter';
import Schedule from './components/Schedule';
import EligibilityCheck from './components/EligibilityCheck';
import ConfirmAppointment from './components/ConfirmAppointment';
import AppointmentDetails from './components/AppointmentDetails';
import DeleteProfile from './components/DeleteProfile'; // Import the DeleteProfile component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DonationCenter />} />
        <Route path="/donation-center" element={<DonationCenter />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/eligibility" element={<EligibilityCheck />} />
        <Route path="/confirm-appointment" element={<ConfirmAppointment />} />
        <Route path="/appointment-details" element={<AppointmentDetails />} />
        <Route path="/delete-profile" element={<DeleteProfile />} /> {/* Add this new route */}
      </Routes>
    </Router>
  );
}

export default App;

