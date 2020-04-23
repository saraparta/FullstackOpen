import React, { Component } from "react";

const Header = (props) => {
  return <h2>{props.course}</h2>;
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.id} part={part}></Part>
      ))}
    </div>
  );
};
const Part = (props) => {
  return (
    <div>
      {props.part.name} {props.part.exercises}{" "}
    </div>
  );
};
const Total = (props) => {
  return (
    <div>
      <b>
        Total number of excerises:{" "}
        {props.parts
          .map((x) => x.exercises)
          .reduce(
            (previousScore, currentScore) => previousScore + currentScore
          )}
      </b>
    </div>
  );
};

const Course = ({ courses }) => {
  return (
    <div>
      {" "}
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Header key={course.id} course={course.name}></Header>
            <Content parts={course.parts}></Content>
            <Total parts={course.parts}></Total>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Course;
