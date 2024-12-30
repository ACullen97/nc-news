import { Link } from "react-router-dom";
import { instance } from "../api";
import { useState } from "react";

function CommentCard({comment}){

  const [message, setMessage] = useState("");
  const [commentId, setCommentId] = useState(comment.comment_id);



  const handleDeleteComment = (e) => {
    setCommentId(comment["comment_id"]);
    
    e.preventDefault();

    instance.delete(`/comments/${commentId}`)
    .then((response) => {
        console.log("comment successfully deleted:", response);
        setMessage("Comment deleted sucessfully");
    })
    .catch((error) => {
        console.log("Failed to delete comment")
        setMessage("Failed to delete comment!")
    })
  };
    

if(comment.author === "grumpy19"){
    return(
        <>
        <li className="item-card">
        <div className="item-card-info">
            <p>{comment.body}</p>
        
            <h3>Votes: {comment["votes"]}</h3>
            <h5>Author: {comment["author"]}</h5>
            <p>Posted: {comment["created_at"]}</p>
            <button onClick={handleDeleteComment}>Delete</button>
            {message && <p>{message}</p>}
        </div>
        </li>
        </>
    )
}

else return (

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