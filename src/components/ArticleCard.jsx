import { Link } from "react-router-dom";

function ArticleCard({article}){

        return(
            <Link to={`/article/${article.article_id}`}>
            <li className="item-card">
            <div className="item-card-info">
                <h2>{article["title"]}</h2>
                <h3>Topic: {article["topic"]}</h3>
                <p>{article["body"]}</p>
                <h5>Author: {article["author"]}</h5>
            </div>
            </li>
            </Link>
        )

}
export default ArticleCard;