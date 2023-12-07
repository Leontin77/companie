import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactPixel from 'react-facebook-pixel';



import App from "./App";

const rootElement = document.getElementById("root");
if (rootElement) {
    const root = createRoot(rootElement);
    const options = {
        autoConfig: true,  // set to false if you want to manually call `ReactPixel.init`
        debug: false,      // enable logs
      };
      const extractPixelIdFromUrl = (url: any) => {
      const urlObj = new URL(url);
      const queryParams = new URLSearchParams(urlObj.search);
      return queryParams.get('pid'); 
  }
      
      const pixID = extractPixelIdFromUrl(window.location.href);
      localStorage.setItem('pixID', pixID)

      ReactPixel.init(pixID, null, options); // Replace YOUR_PIXEL_ID with your actual Pixel ID
      ReactPixel.pageView(); // For tracking page view


    root.render(
        <StrictMode>
            <App/>
        </StrictMode>
    );
}
