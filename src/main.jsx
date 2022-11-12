import React from 'react';
import ReactDOM from 'react-dom/client';
import WelcomePage from './WelcomePage';
import BestSellers from './BestSellers';
import Menu from './Menu';
import Booking from './Booking';
import OurServices from './OurServices';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Faq from './Faq';
import Footer from './Footer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WelcomePage />
    <BestSellers />
    <Menu />
    <Booking />
    <OurServices />
    <Testimonials />
    <Newsletter />
    <Faq />
    <Footer />
  </React.StrictMode>
)
