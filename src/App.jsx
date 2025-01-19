import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoutes from "./components/routes/PublicRoutes";
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
import ManageContact from "./components/admin/ManageContact"; // Contact management
import ContactDetail from "./components/admin/ContactDetail";
import ManageCareers from "./components/admin/ManageCareers";
import JobDetails from "./components/admin/JobDetails";
import AdminLogin from "./components/admin/AdminLogin";
import AdminSignup from "./components/admin/Signup";
import ManageFAQ from "./components/admin/resources/ManageFAQ";
import ManageReports from "./components/admin/resources/ManageReports";
import ManageGlossary from "./components/admin/resources/ManageGlossary";

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
                        <Route path="/job/:id" element={<JobDetails />} />
                        <Route path="/news" element={<News />} />
                        <Route path="/resources" element={<Resources />} />
                        <Route path="/article/:id?" element={<ArticleDetail />} />
                    </Route>

                    {/* Admin Login */}
                    <Route path="/signup" element={<AdminSignup />} />
                    <Route path="/login" element={<AdminLogin />} />

                    {/* Admin Protected Routes */}
                    <Route path="/admin" element={<AdminPanel />}>
                        <Route path="banner" element={<AdminBanner />} />
                        <Route path="news" element={<AdminNews />} />
                        <Route path="contact" element={<ManageContact />} />
                        <Route path="contact/:id" element={<ContactDetail />} />
                        <Route path="careers" element={<ManageCareers />} />

                        {/* Nested Admin Routes for Resources */}
                        <Route path="resources/faq" element={<ManageFAQ />} />
                        <Route path="resources/reports" element={<ManageReports />} />
                        <Route path="resources/glossary" element={<ManageGlossary />} />
                    </Route>

                    {/* Fallback for undefined routes */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
