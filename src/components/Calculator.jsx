import { useState } from "react";
import TempInput from "./TempInput";
function toCtemp(temp) {
  return ((temp - 32) * 5) / 9;
}

function toFtemp(temp) {
  return (temp * 9) / 5 + 32;
}
function tryCovert(temp, convert) {
  const input = parseFloat(temp);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
export default function Calculator() {
  const [temp, setTemp] = useState("");
  const [scale, setScale] = useState("c");

  const handleCChange = (temp) => {
    setTemp(temp);
    setScale("c");
  };

  const handleFChange = (temp) => {
    setTemp(temp);
    setScale("F");
  };

  const ctemp = scale == "f" ? tryCovert(temp, toCtemp) : temp;
  const ftemp = scale == "c" ? tryCovert(temp, toFtemp) : temp;

  return (
    <div>
      <TempInput scale="c" temp={ctemp} onTempChange={handleCChange} />
      <TempInput scale="f" temp={ftemp} onTempChange={handleFChange} />
    </div>
  );
}
