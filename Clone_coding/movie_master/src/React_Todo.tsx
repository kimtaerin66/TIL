import React,{ useState } from "react";

function React_Todo(){
    const [value, setValue ] = useState("");
    const onChange = (e:React.FormEvent<HTMLInputElement>) => {
   
    }
    return <>
    <form>
        <input value={value} type="text" placeholder="Write a to do "/>
        <button>Add</button>
    </form>
    </>
}

export default React_Todo;