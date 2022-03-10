import React from 'react';
import { Link } from 'react-router-dom';

function Movie({coverImg, title, summary, genres, id }){
    return(<div>

    <img src={coverImg} alt={title}/>
    <Link to={`/movie/${id}`}><h2>{title}</h2></Link>
    {summary}
    <ul>
    {genres.map(g=> <li key={g}>{g}</li>)}
    </ul>
   
    </div>)
}

export default Movie;