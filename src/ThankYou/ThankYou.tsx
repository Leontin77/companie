import "./ThankYou.scss";
import { Header } from "components/Header/header";
import { LeaveRequest } from "components/LeaveRequest/LeaveRequest";
import { Footer } from "components/Footer/Footer";
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

export interface ILandingProps {}

export const ThankYou = () => {
    const pixID = localStorage?.getItem('pixID') || null
    console.log("🚀 ~ file: ThankYou.tsx:12 ~ ThankYou ~ pixID:", pixID)

    useEffect(() => {
        // Function to dynamically load the Facebook Pixel script
        const loadFacebookPixel = (pixelId: any) => {
          // Create script element
          const script = document.createElement('script');
          script.innerHTML = `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
    
            fbq('init', ${pixelId});
            fbq('track', 'PageView');
          `;
          document.head.appendChild(script);
        };
    
        // Load Facebook Pixel with your Pixel ID
        const pixelId = localStorage.getItem('pixID'); // Replace with your actual Pixel ID
        setTimeout(() => {
            loadFacebookPixel(pixelId);
        },3000)
    
        // Add noscript tag for users who have JavaScript disabled
        const noscript = document.createElement('noscript');
        const img = document.createElement('img');
        img.height = 1;
        img.width = 1;
        img.style.display = 'none';
        img.src = `https://www.facebook.com/tr?id=${pixelId}&ev=Lead&noscript=1`;
        noscript.appendChild(img);
        document.body.appendChild(noscript);
    
      }, []);

  return (
    <main className="thank-you">
      {/* <Header/> */}

      <div className="thank-you__picture">
        <div className="global-container">
          <div className="thank-you__picture-info">
            <div className="title">БЛАГОДАРИМ ЗА ВАШУ ЗАЯВКУ!</div>
            <div className="divider"></div>
            <div className="thank-you-item">
              Наш консультант свяжется с вами для персональной бесплатной
              консультации в ближайшее время!
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};
