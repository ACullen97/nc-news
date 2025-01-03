import { useEffect, useState } from "react";
import ArticleCard from "../components/ArticleCard";
import { getArticles } from "../api";
import ErrorComponent from "../components/ErrorComponent";

function ArticleContainer() {
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState("title");

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
    }).catch((err)=>{
      setError(err);
    });
  }, []);

  let sorted = articles;

  const handleSortBy = (e) => {
    setSortBy(e);

    if (e === "votes") {
      sorted = Object.values(articles).sort((a, b) => b.votes - a.votes);
      setArticles(sorted);
    } else {
      sorted = articles.sort((a, b) =>
        a[e] > b[e] ? 1 : b[e] > a[e] ? -1 : 0
      );
      setArticles(sorted);
    }
  };

  const handleAscDesc = (e) => {
    if (sortBy === "votes") {
      if (e === "ascending") {
        sorted = Object.values(articles).sort((a, b) => b.votes - a.votes);
        setArticles(sorted);
      } else if (e === "descending") {
        sorted = Object.values(articles).sort((b, a) => b.votes - a.votes);
        setArticles(sorted);
      }
    } else {
      if (e === "ascending") {
        sorted = articles.sort((a, b) =>
          a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0
        );
        setArticles(sorted);
      } else if (e === "descending") {
        sorted = articles.sort((b, a) =>
          a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0
        );
        setArticles(sorted);
      }
    }
  };

  if (error) {
    return <ErrorComponent message={error.message} />;
  }

  return (
    <>
      <label htmlFor="sort-key">Sort By:</label>
      <select id="sort-key" onChange={(e) => handleSortBy(e.target.value)}>
        <option value="title">Title</option>
        <option value="topic">Topic</option>
        <option value="author">Author</option>
        <option value="votes">Votes</option>
        <option value="created_at">Posted Date</option>
      </select>

      <label htmlFor="sort-asc-desc">Asc/Desc:</label>
      <select id="sort-asc-desc" onChange={(e) => handleAscDesc(e.target.value)}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>

      <div className="item-list">
        <ul className="item-list-grid">
          {articles.map((article, index) => (
            <ArticleCard key={index} article={article} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default ArticleContainer;
