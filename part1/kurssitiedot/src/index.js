import React from "../node_modules/@types/react";
import ReactDOM from "../node_modules/@types/react-dom";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  console.log({ props });
  return (
    <>
      <Part name={props.parts[0].name} ex={props.parts[0].exercises}></Part>
      <Part name={props.parts[1].name} ex={props.parts[1].exercises}></Part>
      <Part name={props.parts[2].name} ex={props.parts[2].exercises}></Part>
    </>
  );
};
const Part = (props) => {
  return (
    <h2>
      {props.name} {props.ex}{" "}
    </h2>
  );
};
const Total = (props) => {
  return (
    <h2>
      Total number of excercises:{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </h2>
  );
};
const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  console.log("Kissa");

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
