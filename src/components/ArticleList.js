import React from "react";
import Article from "./Article"


function ArticleList(props) {
  const articles = props.posts.map(function(post) {
    console.log(post)
    return <Article key={post.id} title={props.title} date={props.date} preview={props.preview} />
  })
  return (
    <>
    <main>
          {articles}
    </main>
    </>
  );
}

export default ArticleList;