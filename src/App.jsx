import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./components/routes/PublicRoutes";
// import Home from "./components/navbars/pages/Home";
import AuthenticatedRoutes from "./components/routes/AuthenticatedRoutes";
import NotFound from "./components/navbars/pages/NotFound";
import HomePage from "./components/navbars/pages/HomePage/HomePage";
import Technology from "./components/navbars/pages/TechnologyPages/Technology";
import Investor from "./components/navbars/pages/Investor/Investor";
import About from "./components/navbars/pages/AboutUs/About";
import ContactUs from "./components/navbars/pages/ContactForm/ContactUs";
import Career from "./components/navbars/pages/Careers/career";
import News from "./components/navbars/pages/News/News";
import Resources from "./components/navbars/pages/Resources/Resources";
import ArticleDetail from "./components/navbars/pages/News/ArticleDetail";

// Admin Panel Components
import AdminPanel from "./components/admin/AdminPanel"; // Admin panel main component
import AdminBanner from "./components/admin/AdminBanner"; // Banner component
import AdminNews from "./components/admin/AdminNews"; // News management component
import ManageContact from "./components/admin/ManageContact"; // Import the new component
import ContactDetail from "./components/admin/ContactDetail";
import ManageCareers from "./components/admin/ManageCareers";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          {/* Public Routes */}
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/investor" element={<Investor />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/news" element={<News />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/article/:id?" element={<ArticleDetail />} />
          </Route>

          {/* Authenticated Routes */}
          <Route element={<AuthenticatedRoutes />}>
            <Route path="/dashboard" element={<div>Dashboard</div>} />
            <Route path="/profile" element={<div>Profile</div>} />
            <Route path="/settings" element={<div>Settings</div>} />
          </Route>

          {/* Admin Routes */}
          {/* <Route element={<AuthenticatedRoutes />}>
            <Route path="/admin" element={<AdminPanel />}>
              <Route path="banner" element={<AdminBanner />} />
              <Route path="news" element={<AdminNews />} />
            </Route>
          </Route> */}
          {/* Admin Routes (No Auth Check) */}
          <Route path="/admin" element={<AdminPanel />}>
            <Route path="banner" element={<AdminBanner />} />
            <Route path="news" element={<AdminNews />} />
            <Route path="contact" element={<ManageContact />} />
            <Route path="contact/:id" element={<ContactDetail />} />
            <Route path="/admin/careers" element={<ManageCareers />} />
          </Route>
          {/* Fallback for undefined routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
