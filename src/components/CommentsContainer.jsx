import { useEffect, useState } from "react";
import CommentCard from "../components/CommentCard";
import PostComment from "../components/PostComment";
import { getComments } from "../api";

function CommentsContainer({ id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(id).then((data) => {
      setComments(data);
    });
  }, []);

  return (
    <>
      <h3 className="all-articles-header">Comments</h3>
      <div className="item-card-static">
        <PostComment />
      </div>
      <div className="item-list-comments">
        <ul className="item-list-grid">
          {comments.map((comment, index) => (
            <CommentCard key={index} comment={comment} />
          ))}
        </ul>
      </div>
    </>
  );
}
export default CommentsContainer;
