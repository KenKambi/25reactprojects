import { useState } from "react";

export default function Acordion(props) {
  const [ans, setAns] = useState(false);

  function showAns() {
    setAns((prevAns) => !prevAns);
  }

  return (
    <main className="main-section">
      <div className="question" onClick={showAns}>
        {" "}
        {props.acordion.question}
        {ans ? <span > &#65293; </span> : <span >  &#65291; </span>}
      </div>

      {ans && <div className="answer"> {props.acordion.answer} </div>}
      <hr />
    </main>
  );
}
