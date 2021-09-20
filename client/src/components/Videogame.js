import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getVideogameById } from '../actions/index.js'
import VideogameStyled from "../styledComponents/VideogameStyled";

export default function Videogame() {
    const { id } = useParams();
    const videogame = useSelector((state) => state.game);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogameById(id));
       
    }, [dispatch]);
    

  return (
 
    <VideogameStyled className="videogame-container">
      <h1 className="videogame-name">{videogame.name}</h1>
      <div className="videogame-data">
      <h4>Rating: {videogame.rating}</h4>
      <br/>
      <br/>
      <br/>
      <h4>Platformas: {videogame.plataforms}</h4>
      <br/>
      <br/>
      <br/>
      <h4>Lanzamiento: {videogame.release_date} </h4>
      <br/>
      <br/>
      <br/>
      <h4>Genero: {videogame.genres ?  videogame.genres.map(genre => genre.name).join(', ') : 
          videogame.game_genres
         }
      </h4>
      </div>
     <p className="videogame-description">{videogame.description ? videogame.description.replace(/<[^>]+>/g, '') : videogame.description}</p>
     {//ReactHtmlParser(videogame.description) 
    }
    
     <img className="videogame-img" src={videogame.background_image ?
              videogame.background_image :
              "https://images-na.ssl-images-amazon.com/images/I/71JeJBMiejL.jpg"
    } alt=""/>
   </VideogameStyled>
  );
}