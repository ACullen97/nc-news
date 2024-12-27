import  {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { instance } from "../api";

function ArticleVoteCounter({articleVotes}) {

const { id } = useParams();

const [votes, setVotes] = useState(articleVotes);
const [error, setError] = useState(null);
 
useEffect(()=>{
    setVotes(articleVotes)
}, [articleVotes]);

const updateVote = (change) => {
    setVotes((prevVote)=>{prevVote + change});
    patchArticleVote(change);
}

const onClickHandlerUpvote = ()=>{
    updateVote(1)};
const onCLickHandlerDownVote = ()=>{
    updateVote(-1)
};

const patchArticleVote = (voteChange) => {
    setError(null)
    instance.patch(`/articles/${id}`, {inc_votes: voteChange}).catch((err)=>{
        setVotes((prevVote) => prevVote-voteChange);
        setError("Your vote was unsuccessful, please try again.");
    })
}

  return (
    <>
    <div>
    <h5>Votes: {votes}</h5>
    </div>
      <div>
        <button onClick={onClickHandlerUpvote}>+</button>
        <button onClick={onCLickHandlerDownVote}>-</button>
        {error ? <p>{error}</p> : null}
      </div>
    </>
  );
}
export default ArticleVoteCounter;
