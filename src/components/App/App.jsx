
import { useEffect,useState } from "react";
import { CreateElement } from "../List/Create-element";
import { List } from "../List/List"
import { Card } from "antd";
import app from "./app.css";




export const App = ()=> {
  const [move,setMove] = useState([])
  const  getMoves = async ()=>{
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOWUxMTFiYzM1NGY1YTVjMDBjZjcwOGVkZTEyMTgzOSIsIm5iZiI6MTcyMTIzMDA5Ny43MzM2MDksInN1YiI6IjY2OTc3NWE4OTQzYTEzYjQ1NmE5ZmM3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5WSADF63yqqpj7pZQtUOACQZGAFyK_Z-m_UP93li2eA'
      }
    };
    
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
    const moves = await response.json()
    if(moves){

      setMove(moves.results)
    }
}
useEffect( ()=>{getMoves()},[])

// console.log(move.results);
  return (
<>
<main>


  <CreateElement moveList = { move }/>
</main>
</>
  )
}


