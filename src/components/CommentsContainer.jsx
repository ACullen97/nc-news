import { useEffect, useState } from "react";
import CommentCard from "../components/CommentCard";
import PostComment from "../components/PostComment";
import { getComments } from "../api";

function CommentsContainer({id}){

  const [comments, setComments] = useState([]);

  useEffect(() => {
  getComments(id).then((data) => {
    setComments(data);
  })

}, []);



    return (
    <>
    <div className="item-card"><PostComment/></div>

  <div className="item-list">
   
  <ul className="item-list-grid">
      {comments.map((comment, index) => (
      <CommentCard key={index} comment={comment}/>
    ))}  
  </ul>

  </div>

  </>
    );
  }
  export default CommentsContainer;