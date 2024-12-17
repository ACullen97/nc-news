import { Link } from "react-router-dom";

function ArticleCard({article}){

    let articleBody = "";

    if(article.body.length > 175){
        articleBody = article.body.substring(0, 175) + "..."
    }
    else{articleBody = article.body};

    return(
        <Link to={`/article/${article.article_id}`}>
        <li className="item-card">
        <div className="item-card-info">
            <h2>{article["title"]}</h2>
            <h3>Topic: {article["topic"]}</h3>
            <p>{articleBody}</p>
            <h5>Author: {article["author"]}</h5>
        </div>
        </li>
        </Link>
    )
}
export default ArticleCard;