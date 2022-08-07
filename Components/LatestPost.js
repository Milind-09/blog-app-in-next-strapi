import Link from "next/link";
import React from "react";

export default function LatestPost({ data }) {
  console.log(data);
  return (
    <div className="latest-post">
      <h1 className="main-title">Latest Post</h1>
      <div className="card-container">
        {data.slice(data.length - 3, data.length).map((data) => {
          return (
            <Link href={`/blog/${data.id}`}>
              <div key={data.id} className="blog-card">
                <img
                  src="https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="dell-laptop-image"
                />
                <h1>{data.attributes.title}</h1>
                <p>{data.attributes.description}</p>
                <button className="read-more">Read More</button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
