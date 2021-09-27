import React, {useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGenreList } from "../actions";
import Nav from "./Nav"
import CreateGameStyled from "../styledComponents/CreateGameStyled";

export default function CreateGame() {
  
    const dispatch = useDispatch();
    const genreList = useSelector(state => state.genres);
    useEffect(() => {
        dispatch(fetchGenreList());
    }, [dispatch]);
    const [gameCreated,setGameCreated] =useState(false)
    const [newGame, setNewGame] = useState({
        name: "",
        description: "",
        release_date: "",
        rating: "",
        game_genres: [],
        plataforms: "",
    });
    //handleChange para cada checkbox

    const handleChangeGenres = (e) => {
        if(newGame.game_genres.includes(e.target.value)){
            setNewGame({
                ...newGame,
                game_genres: newGame.game_genres.filter(genre => genre !== e.target.value)
            })
        }
        else{
            setNewGame({
                ...newGame,
                game_genres: [...newGame.game_genres, e.target.value]
            })
        }
    };
    const handleChange = (e) => {
        setNewGame({
            ...newGame,
            [e.target.name]: e.target.value
        });
    };
   
    async function handleSubmit(e) {
       const response = await fetch("http://localhost:3001/videogames", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(newGame),
        });
        const data = await response.json();
       
        return window.location.href = 'http://localhost:3000/gamecreated'
       
        if(data.error){
          alert(data.error)
        }   

    };

   
   

  return (
      <>
      <Nav/>
   
    <CreateGameStyled>
      
       {!gameCreated ? (
         <>
       <h1>Bienvenido al creador de juegos!</h1>
       <p> En esta seccion usted podra agregar un nuevo juego al listado con todas sus caracteristicas </p>
       <form className="form-container" >
          <h2>Nombre del juego:</h2>
          <input 
          type="text" 
          name="name" 
          value={newGame.name} 
          className={!newGame.name && "input-error"} 
          onChange={handleChange} 
          required />
          {!newGame.name && <p className="alert">*Ingrese el nombre</p>}
          <h2>Descripcion:</h2> 
          <textarea 
          type="text" 
          name="description" 
          value={newGame.description} 
          className={!newGame.description && "input-error"} 
          onChange={handleChange} required/>
        {!newGame.description && <p className="alert">*Ingrese la description</p>}
   
          <h2>Fecha de lanzamiento:</h2>
          <input 
          type="date" 
          name="release_date" 
          value={newGame.release_date} 
          // className={!newGame.release_date && "input-error"}
          onChange={handleChange} 
          />
        {/* {!newGame.release_date && <p className="alert">*Please enter a release date</p>} */}
  
        <h2>Rating:</h2>
            <select 
            name="rating" 
            value={newGame.rating} 
            onChange={handleChange}
            className={!newGame.rating && "input-error"}
            >
              <option></option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
            {!newGame.rating && <p className="alert">*elija el rating</p>}
          <h2>Plataforma/s:</h2>
          <input 
          type="text" 
          name="plataforms" 
          value={newGame.plataforms} 
          className={!newGame.plataforms && "input-error"} 
          onChange={handleChange} 
          required
          />
          {!newGame.plataforms && <p className="alert">*ingrese la plataforma/s</p>}
        <div className="genres-container">
          <h2>Generos:</h2>
          <p>*puede agregar o quitar los generos que desee</p>
          <p className="selected-genres">{newGame.game_genres.join(' - ')}</p>
            <div className="checkbox-container">
              {genreList.map(genre => (
                <>
                <div className="check" key={genre.id}>
                  <input type="checkbox" 
                  className="checkbox"
                  onChange={handleChangeGenres} 
                  name={genre.name} 
                  value={genre.name} />
                  {genre.name}
                  
                </div>
                </>
              ))}
            </div>
        </div>
        <div className="submit-game">
          <input 
          type="submit"
          value="Agregar juego" 
          className="form-submit"
          onClick={newGame.name && newGame.description && newGame.plataforms && newGame.rating && handleSubmit} 
          disabled={!newGame.name || !newGame.description || !newGame.plataforms}
          />  
          </div>
      </form>
        </>) : null}
    </CreateGameStyled>
    </>
  );
}
