import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const total = good + neutral + bad;
  const positive = ((good / total) * 100).toFixed(2) + "%";
  const avg =
    (((good + bad * -1) / (good + neutral + bad)) * 100).toFixed(2) + "%";

  if (total === 0) {
    return <h2>No Feedback given</h2>;
  }
  return (
    <table>
      <tbody>
        <tr>
          <StatisticLine text="Good" value={good} />
        </tr>
        <tr>
          <StatisticLine text="Neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticLine text="Bad" value={bad} />
        </tr>
        <tr>
          <StatisticLine text="Total" value={total} />
        </tr>
        <tr>
          <StatisticLine text="Average" value={avg} />
        </tr>
        <tr>
          <StatisticLine text="Positive" value={positive} />
        </tr>
      </tbody>
    </table>
  );
};

const StatisticLine = (props) => {
  return (
    <>
      <td> {props.text}</td>
      <td> {props.value}</td>
    </>
  );
};

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newValue) => {
    setGood(newValue);
  };
  const setToNeutral = (newValue) => {
    setNeutral(newValue);
  };
  const setToBad = (newValue) => {
    setBad(newValue);
  };

  return (
    <>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
