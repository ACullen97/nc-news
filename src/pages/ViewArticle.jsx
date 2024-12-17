import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import { useState, useEffect } from "react";

function ViewArticle() {
    // id needs to have the same name as the route path! 
    const { id } = useParams();
  const [singleArticle, setSingleArticle] = useState({});


  console.log(id, "articleid");

  useEffect(() => {
    getArticle(id).then((articleData) => {
      setSingleArticle(articleData);
    });
  }, [id]);
  return (
    <div className="item-card">
         <div className="item-card-info">
      <h2>{singleArticle.title}</h2>
      <br/>
      <h3>Topic: {singleArticle.topic}</h3>
    <br/>
      <p>Topic: {singleArticle.body}</p>
      <br/>
      <h4>Author: {singleArticle.author}</h4>
      </div>
    </div>
  );
}

export default ViewArticle;
