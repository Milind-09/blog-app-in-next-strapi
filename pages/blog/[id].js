import React from "react";

export async function getStaticPaths() {
  let res = await fetch("http://localhost:1337/api/posts?populate=*");
  let api = await res.json();

  let paths = api.data.map((content) => {
    return {
      params: {
        id: content.id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  let id = context.params.id;
  let res = await fetch(`http://localhost:1337/api/posts/${id}?populate=*`);
  let api = await res.json();
  return {
    props: {
      data: api.data,
    },
  };
}
export default function singlePost({ data }) {
  return (
    <div>
      <div className="singlePost">
        <h1 className="title">{data.attributes.title}</h1>
        <p>{data.attributes.content}</p>
      </div>
    </div>
  );
}
