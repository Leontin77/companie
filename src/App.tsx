import React, { useEffect } from "react";
import "./styles.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Landing } from "./Landing/Landing";
import { BlackList } from "./BlackList/BlackList";
import { Contact } from "./Contact/Contact";
import { CalculatorPage } from "./CalculatorPage/CalculatorPage";
import { Review } from "./Review/Review";
import { Politics } from "Politics/Politics";
import { ThankYou } from "ThankYou/ThankYou";
import ScrollToTop from "ScrollToTop";
import { Header } from "components/Header/header";
import { About } from "About/About";
import ReactPixel from "react-facebook-pixel";

export default function App() {

  const url = window.location.search;
  const params = new URLSearchParams(url.split('?')[1]);

  // Now, you can get each parameter using the `get` method
  const ag = params.get('ag');
  const pid = params.get('pid');
  const kr = params.get('kr');
  const ad = params.get('ad');
  const fbclid = params.get('fbclid');
  
  // Log the values to console or use them as needed
  console.log({ ag, pid, kr, ad, fbclid });

  const getPixelIdFromUrl = () => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get("id"); // змінна 'id' в URL
  };
//   useEffect(() => {
//     if (window.location.href.includes('&rel')) {
//       window.location.href = window.location.href.split('&rel')[0]
//     }
// }, [window.location]);
  useEffect(() => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(
          "IPData",
          JSON.stringify({
            usersIP: data.ip,
            usersCity: data.city,
            usersCountry: data.country_name,
            phoneCode: data.country_calling_code,
            countryCode: data.country_code,
          })
        );
      });
    // const pixelId = getPixelIdFromUrl();

    // if (pixelId) {
    //   // Ініціалізація Facebook Pixel
    //   const options = {
    //     autoConfig: true,
    //     debug: false,
    //   };
    //   ReactPixel.init(pixelId, null, options);

    //   // Відправка події PageView
    //   ReactPixel.pageView();
    // }

  }, []);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <div className="wrapper">
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="/blacklist" element={<BlackList />} />
            <Route path="/review" element={<Review />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/thankyou" element={<ThankYou />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
