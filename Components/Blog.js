import Link from "next/link";
import React from "react";
import Footer from "./Footer";

export default function Blog({ data }) {
  return (
    <div>
      <div className="blog">
        <div className="heading">
          <h1 className="heading">LaptopQuery Blogs Post</h1>
        </div>
        <div className="card-container">
          {data.map((data) => {
            return (
              <Link href={`/blog/${data.id}`}>
                <div key={data.id}>
                  <div className="blog">
                    <div className="card-container">
                      <div className="blog-card">
                        <img
                          src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt="dell-laptop-image"
                        />
                        <h1>{data.attributes.title}</h1>
                        <p>{data.attributes.description}</p>
                        <button className="read-more">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}
