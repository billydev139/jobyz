// src/Routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/homePage";
import FindJob from "../pages/findJob/findjob";
import FAQ from "../pages/faqs/faqs";
import TermsofServices from "../pages/termsofServices/termsofServices";
import PrivacyPolicy from "../pages/privacyPolicy/privacyPolicy";
import Signup from "../pages/signup/signup";
import ContactUs from "../pages/contactUs/contactUs";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-job" element={<FindJob />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-of-services" element={<TermsofServices />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/contact-us" element={<ContactUs />} />


      </Routes>
    </Router>
  );
};

export default AppRoutes;
