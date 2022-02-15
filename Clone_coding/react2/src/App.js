
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); //여러개의 값을 받을 땐 배열.
  const [money, setMoney] = useState(0);
  const onChange = (e) => {
    setMoney(e.target.value);
  }
  const onSubmit = (e) =>{
    e.preventDefault();
  }
  //코인 받아오기
 useEffect(()=> {
  fetch('https://api.coinpaprika.com/v1/tickers')
  .then((res)=> res.json()) //받아서 res.json 
  .then(json => setCoins(json)) //json을 state로 만들기
  setLoading(false); //값받고 false
 },[])
  return(
    <div>
      <h1>The Coins!({coins.length})</h1> 
      {loading ? <strong>Loading...</strong> : null} 
      <form onSubmit={onSubmit}> 
       <label htmlFor='changer'> </label>
      <input value={money} id='changer' type="number" placeholder='write your money'onChange={onChange}/>
      </form>
      <hr />
      <select>
        {coins.map((el) => <option>{el.name} : {el.quotes.USD.price} {el.symbol} // {money /el.quotes.USD.price} {el.symbol}  </option>)}
      </select>
 

      
    </div>
  );
}


export default App;
