import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Serviceslist from "../components/main/icon with text/Serviceslist";

import Welcome from "../components/main/welcome section/Welcome";
import Herosection from "../components/main/hero section/Herosection";
import Counter from "../components/main/counter/Counter";
import Faqsec from "../components/main/faq section/Faqsec";
import '../App.css'
function Home() {
  return (
    <>
      <Header />
      <main>
        <Herosection /> 
        <Counter /> 

        <Serviceslist />
        <Welcome />
        <Faqsec />
    

        {/* <AppFeatureList /> */}

        {/* <CaptainAndTraveler /> */}

        {/* <FAQListHome /> */}
      </main>

      <Footer />
    </>
  );
}

export default Home;
