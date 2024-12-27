import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import SingleArticleCard from "../components/SingleArticleCard";
import { useState, useEffect } from "react";
import CommentsContainer from "../components/CommentsContainer";

function ViewArticle() {
  // id needs to have the same name as the route path!
  const { id } = useParams();
  const [article, setArticle] = useState({});

  useEffect(() => {
    getArticle(id).then((articleData) => {
     console.log(articleData, "articleData");
      setArticle(articleData);
    });
  }, [id]);

 // console.log(article, "singleArticle");

  return (
    <>
      <SingleArticleCard article={article}/>
       <CommentsContainer id={id}/> 
    </>
  );
}

export default ViewArticle;
