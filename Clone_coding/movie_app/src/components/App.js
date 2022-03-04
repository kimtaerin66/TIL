import React, { useState, useEffect } from "react";
import Movie from "./Movie";

function App() {
  const [ loading, setLoading ] = useState(true);
  useEffect(()=> {
    fetch(
      'https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=8e018e2fab4b6ca6c09cfd4eff2f96da&targetDt=20220101'
      )
      .then((res)=> res.json())
      .then(json => console.log(json));
  }, [])
  return (
    <div >
     {loading ? <h1>loading...</h1> : <Movie />}
    </div>
  );
}

export default App;
