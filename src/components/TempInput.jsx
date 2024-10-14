export default function TempInput({ temp, scale, onTempChange }) {
  const scaleNames = {
    c: "섭씨",
    f: "화씨",
  };

  const handleChange = (event) => {
    onTempChange(event.target.value);
  };
  return (
    <fieldset>
      <legend>온도를 입력하세요. (단위 :{scaleNames[scale]})</legend>
      <input value={temp} onChange={handleChange}></input>
    </fieldset>
  );
}
