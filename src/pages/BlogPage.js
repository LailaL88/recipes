import React from "react";

const BlogPage = (props) => {
      
const img = props.img;

  return (
    <div className="article">
      <h1>{props.title}</h1>
      <div className="article-image" style={{backgroundImage: `url(${img}) `}}></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        ducimus quidem ratione soluta magni nihil, provident est nesciunt nisi
        placeat, suscipit natus beatae! Quod ad beatae rerum inventore? Eaque,
        beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <p>Consectetur sapiente ipsa nisi corrupti quae temporibus iste
        exercitationem aliquam doloremque placeat ex blanditiis soluta ullam
        obcaecati officiis, ipsam sunt nesciunt rem. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. </p>
        <p>
        Illo facere qui minima ratione odio
        mollitia aliquam doloremque officia ullam eius nam incidunt id
        consectetur dicta nisi, quaerat, dolor vero labore. Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Recusandae, nam minima, debitis
        assumenda consectetur in cum delectus dignissimos voluptatibus cumque
        atque, neque tempora repellat non omnis deleniti sapiente quam
        quibusdam!
      </p>
      
    </div>
  );
};

export default BlogPage;
