import Acordion from "../components/acordion/Acordion";
import accordionData from "../components/acordion/data";
import Colorflipper from "../components/colorflipper/Colorflipper";


function App() {
  const data = accordionData.map(function (acordion) {
    return <Acordion key={acordion.id} acordion={acordion} />;
  });
  return (
    <>
      <h3>I am an Acordion</h3>
      {data}
      <Colorflipper/>
    </>
  );
}

export default App;
