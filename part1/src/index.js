import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  console.log("Hello from komponentti");
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
};

const App = () => {
  const nimi = "Pekka";
  const ika = 10;

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={nimi} age={ika} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
