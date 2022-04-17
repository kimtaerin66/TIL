import React, { useState } from "react";
import { people } from "./People";


function App() {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
};
  const search = people.filter((p) => p.name.toLowerCase().includes(value.toLowerCase()));
  return (
    <>
      <h1>Contacts</h1>
      <input value={value} placeholder="Search" onChange={onChange} />
      <h2>Details</h2>
      {search.map((p, idx) => (
        <p key={idx}>{p.name}</p>
      ))}
    </>
  );
}

export default App;
