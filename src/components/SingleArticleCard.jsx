import { useEffect, useState } from "react";
import  { getArticles } from "../api";
import ArticleVoteCounter from "../components/ArticleVoteCounter"

function SingleArticleCard({article}){



    return(
        <>
        <h1>View Article</h1>
        <div className="item-card">
          <div className="item-card-info">
            <h2>{article.title}</h2>
            <br />
            <h3>Topic: {article.topic}</h3>
            <br />
            <p>Topic: {article.body}</p>
            <br />
            <h4>Author: {article.author}</h4>
            <br/> 
            <ArticleVoteCounter articleVotes={article.votes}/>
          </div>
    
        </div>
     
        </>
    )
}
export default SingleArticleCard;