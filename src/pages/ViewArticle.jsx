import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import SingleArticleCard from "../components/SingleArticleCard";
import { useState, useEffect } from "react";
import CommentsContainer from "../components/CommentsContainer";
import ErrorComponent from "../components/ErrorComponent";

function ViewArticle() {
  // id needs to have the same name as the route path!
  const { id } = useParams();
  const [article, setArticle] = useState({});
  const [error, setError] = useState(null);


  useEffect(() => {
    getArticle(id).then((articleData) => {
      setArticle(articleData);
    }) .catch((err) => {
      setError(err);
    });
  }, [id]);


  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <>
      <SingleArticleCard article={article}/>
       <CommentsContainer id={id}/> 
    </>
  );
}

export default ViewArticle;
