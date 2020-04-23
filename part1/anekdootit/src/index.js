import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const App = (props) => {
  const max = anecdotes.length;
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(
    [new Array(max + 1).join("0").split("").map(parseFloat)][0]
  );
  const [mostVoted, setMostVoted] = useState(0);

  const setNewVote = () => {
    const copy = vote;
    copy[selected] += 1;
    setVote(copy);
    setMostVoted(vote.indexOf(Math.max(...vote)));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{props.anecdotes[selected]}</div>
      <Button handleClick={() => setNewVote()} text="Vote"></Button>
      <Button
        handleClick={() => setSelected(Math.floor(Math.random() * max))}
        text="Next Anecdote"
      ></Button>
      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[mostVoted]}</div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
