import React, { useState } from "react";
import { people } from "./People";


function App() {
  const [value, setValue] = useState("");
  const [ detail, setDetail ] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
};
  const search = people.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()));
  const onClick = (e) => {
    setDetail(e.target.innerHTML);

  }
  return (
    <>
      <h1>Contacts</h1>
      <input value={value} placeholder="Search" onChange={onChange} />
      {search.map((p, idx) => (
        <p onClick={onClick} key={idx}>{p.name}</p>
      ))}
      <h2>Details</h2>
         {detail}
    </>
  );
}

export default App;
