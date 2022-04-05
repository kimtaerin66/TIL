import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Inputs() {
  return (
    <div>
      <form  style={{ display: "flex", flexDirection: "column" }}>
        <input required placeholder="email" />
        <input required placeholder="firstname"/>
        <input required placeholder="lastname"/>
        <input required placeholder="username"/>
        <input required placeholder="password"/>
        <input required placeholder="password1"/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default Inputs;
