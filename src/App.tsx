import React, { useEffect } from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import { Landing } from "./Landing/Landing";
import { BlackList } from "./BlackList/BlackList";
import { Contact } from "./Contact/Contact";
import { CalculatorPage } from "./CalculatorPage/CalculatorPage";
import { Review } from "./Review/Review";
import { Politics } from "Politics/Politics";
import {ThankYou} from "ThankYou/ThankYou";

export default function App() {
  useEffect(() => {
    // Fetch the IP data and update the context
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => {
        // Update the state variables with the fetched data
        localStorage.setItem(
          "IPData",
          JSON.stringify({
            usersIP: data.ip,
            usersCity: data.city,
            usersCountry: data.country_name,
            phoneCode: data.country_calling_code,
            countryCode: data.country_code
          })
        );
      });
  }, []);

  return (
    <Router>
        {/* Routes define the mapping of path to component */}
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/blacklist" element={<BlackList />} />
          <Route path="/review" element={<Review />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/" element={<Landing />} />
        </Routes>
    </Router>
  );
}
