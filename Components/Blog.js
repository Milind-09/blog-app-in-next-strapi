import React from "react";
import Footer from "./Footer";

export default function Blog() {
  return (
    <div>
      <div className="blog">
        <h1>LaptopQuery Blogs Post</h1>

        <div className="card-container">
          <div className="blog-card">
            <img
              src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="dell-laptop-image"
            />
            <h1>Is Dell Laptop Good ?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              quidem error animi consectetur eligendi impedit repellendus
              tempore sit officiis, officia hic sequi, ratione tempora dolorem?
            </p>
            <button className="read-more">Read More</button>
          </div>

          <div className="blog-card">
            <img
              src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="dell-laptop-image"
            />
            <h1>Is Dell Laptop Good ?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              quidem error animi consectetur eligendi impedit repellendus
              tempore sit officiis, officia hic sequi, ratione tempora dolorem?
            </p>
            <button className="read-more">Read More</button>
          </div>
          <div className="blog-card">
            <img
              src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="dell-laptop-image"
            />
            <h1>Is Dell Laptop Good ?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
              quidem error animi consectetur eligendi impedit repellendus
              tempore sit officiis, officia hic sequi, ratione tempora dolorem?
            </p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
