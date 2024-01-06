import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import scrollreveal from "scrollreveal";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from "./Home";
import Payment from "./components/Payment";
import Login from "./components/Login";
import Register from "./components/Register";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        nav,
        #hero,
        #services,
        #recommend,
        #testimonials,
        footer
        `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      {/* <ScrollToTop />
      <Hero />
      <Services />
      <Recommend />
      <Testimonials /> */}
      <Routes>
        <Route path ="/Payment" element = {<Payment/>}></Route>
        <Route path ="/Login" element = {<Login/>}></Route>
        <Route path ="/Register" element = {<Register/>}></Route>
        <Route path ="/" element = {<Home/>}></Route>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}
