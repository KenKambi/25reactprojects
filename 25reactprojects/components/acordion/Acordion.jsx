import { useState } from "react";


export default function Acordion(props) {
  const [ans, setAns] = useState(false)

  function showAns (){
    setAns(prevAns => !prevAns)
  }

  return (
    <>
        <div onClick={showAns}> {props.acordion.question} </div>
        { ans && <div> {props.acordion.answer} </div>}
        <hr />
    </>
  );
}
