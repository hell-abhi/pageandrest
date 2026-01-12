import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import EventList from './pages/EventList';
import EventDetail from './pages/EventDetail';
import BookingForm from './pages/BookingForm';
import UserBookings from './pages/UserBookings';
import AdminPanel from './pages/AdminPanel';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/events/:id/book" element={<BookingForm />} />
          
          {/* User Routes */}
          <Route path="/bookings" element={<UserBookings />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminPanel />} />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
