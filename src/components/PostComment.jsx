import { useEffect, useState } from "react";

import  {useParams} from "react-router-dom";

import { instance } from "../api";

function PostComment() {

const { id } = useParams();

  const [author, setAuthor] = useState("");
  const [commentBody, setCommentBody] = useState("");
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();

    const newComment = {
        body: commentBody,
        author: "grumpy19"
    };

    instance.post(`/articles/${id}/comments`, newComment)
    .then((response) => {
        console.log("comment successfully added:", response);
        setMessage("Comment submitted sucessfully");
        setAuthor("")
        setCommentBody("")
    })
    .catch((error) => {
        console.log("Failed to add comment")
        setMessage("Failed to add comment!")
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="comment-body">Add a comment for grumpy19: </label>
        <br/>
        <textarea
        id="comment-body"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        required
        />
        <br />



<br/>
        <input type="submit" value="Submit" />
      </form>

      {message && <p>{message}</p>}
    </>
  );
}

export default PostComment;