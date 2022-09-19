import React, { useEffect } from "react";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import ScrollToTop from "./ScroilToTop";
import Services from "./Services";
import Products from './Product'
import Newsletter from './Newsletter'
import Scrollreveal from "scrollreveal";
import Testimonials from "./Testimonials";

export default function XDdesign() {
  useEffect(() => {
    const sr = Scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });
    sr.reveal(
      `
        nav,
        #home,
        #services,
        #portfolio,
        #testimonials,
        #products,
        #newsletter,
        .footer
    `,
      {
        opacity: 0,
        interval: 200,
      }
    );
  }, []);
  return (
    <>
    <ScrollToTop />
    <Navbar />
    <Hero />
    <Services />
    <Portfolio />
    <Testimonials />
    <Products />
    <Newsletter />
    <Footer />
    

   
      
    </>
  );
}
