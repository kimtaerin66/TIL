import { useState } from 'react';



function Counter(){
  const [count, setCount] = useState(0);
  const onClick = ()=>{
    setCount((prev) => prev +1);//현재값 +1
  };
  return(
    <div>
    <h1>Total Count : {count}</h1>
    <button onClick={onClick}>clicks</button>
    </div>
  )
}


function App() {
  return (
    <div className="App">
    <Counter />
    </div>
  );
}

export default App;
