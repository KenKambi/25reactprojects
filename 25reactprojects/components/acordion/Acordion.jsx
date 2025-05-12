import accordionData from "./data";

export default function Acordion() {
  console.log(accordionData);

  const data = accordionData.map(function (acordion) {
    return (
      <div key={acordion.id}>
        {" "}
        {acordion.question}
        <div key={acordion.id}> {acordion.answer} </div>
      </div>
    );
  });

  return (
    <>
      <h1>I am an acordion</h1>
      {data}
    </>
  );
}
