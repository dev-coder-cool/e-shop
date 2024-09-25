import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner"
import AOS from "aos";
import "aos/dist/aos.css";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonal from "./components/Testimonal/Testimonal";
import Footer from "./components/Footer/Footer"

const App=()=>{
// Aos 
  useEffect(() => {
    AOS.init({
      offset:100,
      duration: 700,
      easing: "ease-out-sine",
      delay:100
    });
    AOS.refresh();
  }, []);

  return(
    <div className="">
      <Navbar/>
      <Hero/>
      <Products/>
      <TopProducts/>
      <Banner/>
      <Subscribe/>
      <Testimonal/>
      <Footer/>
    </div>
  )
}

export default App