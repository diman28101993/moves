import { Card } from "antd";
import { List } from "./List"
const poster = `https://image.tmdb.org/t/p/w500/ `
export const CreateElement=({moveList})=>{


    return(
<>

  {moveList.map((move)=> <List 
  key={move.id}
  item = {move}/>)}

</>

)
    
}