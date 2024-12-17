import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import getArticles from "../api";

function ArticleContainer() {

  const [articles, setArticles] = useState([]);

  
  useEffect(() => {
    getArticles()
    .then((data) => {
      setArticles(data.articles);
    })
  }, [])


  return (


<div className="item-list">
<ul className="item-list-grid">
  {articles.map((article, index) => (
    <ArticleCard key={index} article={article}/>
  ))}
</ul>
</div>
  );
}
export default ArticleContainer;
