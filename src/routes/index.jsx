// src/Routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homepage/homePage";
import FindJob from "../pages/findJob/findjob";


const AppRoutes=()=> {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/find-job" element={<FindJob />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
