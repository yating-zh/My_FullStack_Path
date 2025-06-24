import { useState } from "react";

export default function FormSingleInput() {
  const [value, setValue] = useState("");
  //  function changeValue(e) {
  //    setValue(e.target.value);
  //  }
  return (
    <div>
      <h3>Single Input</h3>
      {/*<input type="text" value={value} onChange={(e) => changeValue(e)} />*/}
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
