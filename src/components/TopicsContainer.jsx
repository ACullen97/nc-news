import { useEffect, useState } from "react";
import TopicCard from "../components/TopicCard";
import { getArticles } from "../api";

function TopicsContainer() {
  const [articles, setArticles] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("coding");

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
    });
  }, []);

  return (
    <>
      <h3>Viewing topic: {selectedTopic}</h3>
      <div>
        <button value="coding" onClick={(e) => setSelectedTopic(e.target.value)}>Coding</button>
        <button value="cooking" onClick={(e) => setSelectedTopic(e.target.value)}>Cooking</button>
        <button value="football" onClick={(e) => setSelectedTopic(e.target.value)}>Football</button>
      </div>
      
      <div className="item-list">
        <ul className="item-list-grid">
          {articles.map((article, index) => (
            <TopicCard key={index} article={article} selectedTopic={selectedTopic}/>
          ))}
        </ul>
      </div>
    </>
  );
}
export default TopicsContainer;
