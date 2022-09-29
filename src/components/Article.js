import React from "react";


function Article(props) {
  return (
    <article>
      <h3>{props.title ? props.title : "default test"}</h3>
      <small>{props.date ? props.date : "January 1, 1970"}</small>
      <p>{props.preview}</p>
    </article>
  );
}

export default Article;