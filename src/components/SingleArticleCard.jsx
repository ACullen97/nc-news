import { useEffect, useState } from "react";
import { getArticles } from "../api";
import ArticleVoteCounter from "../components/ArticleVoteCounter";

function SingleArticleCard({ article }) {
  console.log({ article });

  return (
    <>
      <h2 className="all-articles-header">View Article</h2>
      <div className="item-card-static">
        <div className="item-card-info">
          <h2>{article.title}</h2>
          <br />
          <h3>Topic: {article.topic}</h3>
          <br />
  
          <p>Topic: {article.body}</p>
          <br/>
          <div className="img-container">
           <img src={article.article_img_url}></img>
          </div>

          <h4>Author: {article.author}</h4>
          <br />
          <ArticleVoteCounter articleVotes={article.votes} />
        </div>
      </div>
    </>
  );
}
export default SingleArticleCard;
