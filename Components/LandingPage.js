import React from "react";
import Link from "next/link";
export default function LandingPage() {
  return (
   
      <div className="landing-page">
        <div className="heading">
          <h1>
            Welcome to <span className="logo">LaptopQuery</span>
          </h1>
          <p>Confused on which laptop to buy? </p>
          <p>Spend Your Money on Perfect Laptop by Reading our blogs</p>
          <Link href="/blogs">
            <button className="btn">Explore Blogs</button>
          </Link>
        </div>
        <div className="image">
          <img src="images/landing-page-image.jpg" alt="landing-page-image" />
        </div>
      </div>
   
  );
}
