import { Link } from "react-router-dom";

function CommentCard({comment}){

    return(
        <li className="item-card">
        <div className="item-card-info">
            <p>{comment.body}</p>
        
            <h3>Votes: {comment["votes"]}</h3>
            <h5>Author: {comment["author"]}</h5>
            <p>Posted: {comment["created_at"]}</p>
        </div>
        </li>
    )
}
export default CommentCard;