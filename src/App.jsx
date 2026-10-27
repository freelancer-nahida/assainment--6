import { Suspense, useState } from "react";
import "./App.css";

import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import StatsSection from "./component/StatsSection";
import Premium from "./component/Premium";
import Steps from "./component/Steps";
import PricingSection from "./component/PricingSection";


import Footer from "./component/Footer";

const getPremium = async () => {
  const response = await fetch("/Premium.json");
  if (!response.ok) {
    throw new Error("Could not load Premium.json");
  }
  return response.json();
};

const premiumPromise = getPremium();

function App() {
  const [activeTab, setActiveTab] = useState("products");
  const [carts, setCarts] = useState([]);

  return (
    <>
      <NavBar carts={carts} setActiveTab={setActiveTab} />
      <Banner />
      <StatsSection />

      <Suspense fallback={<p className="py-12 text-center">Loading products...</p>}>
        <Premium
          premiumPromise={premiumPromise}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          carts={carts}
          setCarts={setCarts}
        />
      </Suspense>

      <Steps></Steps>
      <PricingSection></PricingSection>

      <Footer />
    </>
  );
}

export default App;

