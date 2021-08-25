import React, { useEffect, useState } from "react";
import "./App.css";

function Clock() {
  const [date, setDate] = useState(new Date());

  function tick() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date.toLocaleTimeString()}.</h2>
      <a href="https://google.com">Google</a>
    </div>
  );
}

function App() {
  const [exibir, setExibir] = useState(true);
  return (
    <div>
      {exibir && <Clock />}
      <button onClick={() => setExibir(!exibir)}>Exibir Relógio</button>
    </div>
  );
}

export default App;
