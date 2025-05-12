import { useState } from "react";
import accordionData from "./data";

export default function Acordion() {
  console.log(accordionData);

  const [ans, setAns] = useState("")

  const data = accordionData.map(function (acordion) {
    return (
      <div key={acordion.id} onClick={showAns} >
        {" "}
        {acordion.question}
        <div key={acordion.id}> {acordion.answer} </div>
        <hr />
      </div>
    );
  });

  function showAns (){
    console.log("clicked")
    setAns(accordionData.answer)
  }

  return (
    <>
      <h1>I am an acordion</h1>
      {data}
    </>
  );
}
