// src/Routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/homePage";
import FindJob from "../pages/findJob/findjob";
import FAQ from "../pages/faqs/faqs";


const AppRoutes=()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-job" element={<FindJob />} />
        <Route path="/faq" element={<FAQ />} />


      </Routes>
    </Router>
  );
}

export default AppRoutes;
