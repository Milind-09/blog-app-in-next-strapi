import React from "react";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import LatestPost from "./LatestPost";

export default function App({data}) {
  return (
    <div className="app">
      <LandingPage />
      <LatestPost data={data}/>
      <Footer />
    </div>
  );
}
