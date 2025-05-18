import { useState } from "react";
import {FaFolder} from "@react-icons/all-files/fa/FaFolder" // react icons npm downloaded

export default function Colorflipper() {
  const [color, setColor] = useState("loght-blue");

  function randomGenerator(length) {
    return Math.floor(Math.random() * length);
  }

  function handleColorChange() {
    //#00000 . This is the hex format
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hash = "#";

    for (let i = 0; i < 6; i++) {
      hash += hex[randomGenerator(hex.length)];
    }

    setColor(hash);
  }

  const styles = {
    backgroundColor: color,
    height: "300px",
    textAlign: "center"
    
  };
  return (
    <main style={styles}>
      <h3>Hex color  <FaFolder /></h3>
      <div>{color} </div>
      <button onClick={handleColorChange}> Generate random color</button>
    </main>
  );
}
