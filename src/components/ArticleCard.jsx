
function ArticleCard({article}){

    let articleBody = "";

    if(article.body.length > 175){
        articleBody = article.body.substring(0, 175) + "..."
    }
    else{articleBody = article.body};


    return(
        <li className="item-card">
        <div className="item-card-info">
            <h2>{article["title"]}</h2>
            <h3>Topic: {article["topic"]}</h3>
            <p>{articleBody}</p>
            <h5>Author: {article["author"]}</h5>
            
        </div>
        </li>
    )
}
export default ArticleCard;