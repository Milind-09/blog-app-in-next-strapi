import React, { useEffect, useState } from "react";

import Link from "next/link";
export default function Navbar() {
  const [toogle, setToogle] = useState(false);
  function responsiveNav() {
    setToogle(!toogle);
  }

  return (
    <div>
      <div className="navbar">
        <nav>
          <div className="logo">
            <Link href="/">
              <h1>LaptopQuery</h1>
            </Link>
          </div>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/blogs">
                <a>Blogs</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
          <div onClick={responsiveNav} className="hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </nav>
      </div>

      <div>
        {toogle && (
          <div className="responsive-nav">
            <ul onClick={responsiveNav}>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a>Blogs</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
