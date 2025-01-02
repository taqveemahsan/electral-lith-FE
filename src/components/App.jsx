import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./routes/PublicRoutes";
import Home from "./navbars/pages/Home";
import About from "./navbars/pages/About";
import Contact from "./navbars/pages/Contact";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import NotFound from "./navbars/pages/NotFound";
import HomePage from "./navbars/pages/HomePage/HomePage";

// Ya use nhi hoo rhi....................
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>

          {/* Authenticated Routes */}
          <Route element={<AuthenticatedRoutes />}>
            <Route path="/dashboard" element={<div>Dashboard</div>} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
          </Route>

          {/* Fallback for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
