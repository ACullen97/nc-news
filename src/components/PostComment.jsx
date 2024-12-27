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
        author: author
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
        <label htmlFor="comment-body">Add a comment: </label>
        <br/>
        <textarea
        id="comment-body"
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        required
        />
        <br />

        <label htmlFor="select-author"> Select an author: </label>
        <br />
        <select id="select-author" value={author}  onChange={(e) => setAuthor(e.target.value)} required>
  <option value="tickle122">tickle122</option>
  <option value="jessjelly">jessjelly</option>
  <option value="happyamy2016">happyamy2016</option>
  <option value="grumpy19">grumpy19</option>
  <option value="weegembump">weegembump</option>
  <option value="cooljmessy">cooljmessy</option>
</select>

<br/>
        <input type="submit" value="Submit" />
      </form>

      {message && <p>{message}</p>}
    </>
  );
}

export default PostComment;