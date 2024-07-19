import { Card } from "antd";
import { useEffect } from "react";
import list from "./list.css"
const { Meta } = Card;

export const List = ({ item }) => {
  
  
  const poster = `https://image.tmdb.org/t/p/w500/`;

  return (
    
      <li>

    <Card className="card"
    // hoverable
    
    cover={
      
      <img
      className="picture"
      alt="example"
      src={poster + item.poster_path}
      />
    }
    >

      <Meta title={item.title} description={item.overview} />
    </Card>
      </li>
    

  );
};
