import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Bookings from './pages/Bookings';
import Destinations from './pages/Destinations';
import Phrases from './pages/Phrases';
import CurrencyConverter from './pages/CurrencyConverter';
import DayTrip from './pages/DayTrip';

function App() {
  return (
    <div className="min-h-screen bg-brand-background font-sans antialiased">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/daytrip" element={<DayTrip />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/phrases" element={<Phrases />} />
          <Route path="/currency" element={<CurrencyConverter />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;