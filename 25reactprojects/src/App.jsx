import Acordion from "../components/acordion/Acordion";
import accordionData from "../components/acordion/data";

function App() {
  const data = accordionData.map(function (acordion) {
    return <Acordion key={acordion.id} acordion={acordion} />;
  });
  return (
    <>
      <h3>I am an acordion</h3>
      {data}
    </>
  );
}

export default App;
