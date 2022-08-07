import React from "react";
import Blog from "../Components/Blog";
export async function getStaticProps() {
  let url = "http://localhost:1337/api/posts?populate=*";
  let res = await fetch(url);
  let mydata = await res.json();

  return {
    props: {
      data: mydata.data,
    },
  };
}
export default function blogs({ data }) {
  return (
    <div>
      <Blog data={data} />
    </div>
  );
}
