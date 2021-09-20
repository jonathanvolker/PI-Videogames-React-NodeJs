import React, {useEffect, useState } from 'react';
import {fetchListGames, fetchGenreList} from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import VideogameListStyled from "../styledComponents/VideogameListStyled"
import { Link } from 'react-router-dom';



export function VideogameList() {

    const dispatch = useDispatch();
    const listGames = useSelector(state => state.games);
    console.log("listGames",listGames);
   useEffect(() => {
       dispatch(fetchListGames());
    }, [dispatch]);
   
    const listGenres = useSelector(state => state.genres);
    useEffect(() => {
        dispatch(fetchGenreList());
    }, [dispatch]);
   //console.log("list genres",listGenres);
   
    //paginado de los juegos
    const [state,setState]= useState(0)
    const [currentPage, setCurrentPage] = useState(0);
    const[filters, setFilters] = useState({
        search: "",
        filter: "",
        sort: "",
        sortOrigin: "",
        ratingSort: ""
    });

    const filteredGames = () => {
        // API array de objetos juegos... game_genres
        // DB array de objetos juegos... genres ... [name]
        
        if (filters.search.length > 0) return listGames.filter(game => game.name.toLowerCase().includes(filters.search.toLowerCase())).slice(currentPage, currentPage + 10);
        if (filters.filter.length > 0) return listGames.filter(game => game.game_genres.split(', ').includes(filters.filter)).slice(currentPage, currentPage + 10);
        if (filters.sortOrigin === 'API') return listGames.filter(game => !(isNaN(game.id))).slice(currentPage, currentPage + 10);
        if (filters.sortOrigin === 'Database') return listGames.filter(game => isNaN(game.id)).slice(currentPage, currentPage + 10);
        if (filters.ratingSort === 'High to Low') return listGames.sort((a, b) => b.rating - a.rating).slice(currentPage, currentPage + 10);
        if (filters.ratingSort === 'Low to High') return listGames.sort((a, b) => a.rating - b.rating).slice(currentPage, currentPage + 10);
        else return listGames.slice(currentPage, currentPage + 10)
    }
    const filterZ=()=>{ listGames.sort(function (a, b) {if (a.name > b.name) {return -1;}if (a.name < b.name) {return 1;}return 0; }); setState(1)}
    const filterA=()=>{listGames.sort(function (a, b) {if (a.name > b.name) {return 1;}if (a.name < b.name) {return -1;}return 0;}); setState(2)}
    
 
    const handleChange = (e) => {
        setCurrentPage(0);
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        })
    }
      
     const nextPage = () => {
        setCurrentPage(currentPage + 10);
         }
    const prevPage = () => {
            setCurrentPage(currentPage - 10);
        }
     

    return (
        <VideogameListStyled>
            <div className="search-bar">
                <div className="search-form">
                    <input
                        name="search" 
                        value={filters.search}
                        onChange={handleChange}
                        type="text" 
                        className="input-search" 
                        placeholder="Busque un juego" 
                    />
                   
                </div>
            </div>
            <div className="filters">
                <div className="genre-filter">
                    <h1 className="orders">
                        Genero:
                    </h1>
                    <select
                        name="filter"
                        value={filters.filter}
                        onChange={handleChange}
                        className="select-genre"
                    >
                        <option value=""></option>
                    {
                        listGenres.map(genre => 
                        <option key={genre.id} value={genre.name}>{genre.name}</option>
                        )
                    }     
                    </select>
                </div>
                <div>
                    <h1 className="orders">
                        Rating:
                    </h1>
                    <select
                    name="ratingSort"
                    value={filters.ratingSort}
                    onChange={handleChange}
                    className="select-rate"
                    >
                        <option value=""></option>
                        <option value="High to Low">Mayor a menor</option>
                        <option value="Low to High">Menor a mayor</option>
                    </select>
                </div>
                <div>
                    <h1 className="orders">
                        Origen:
                    </h1>
                    <select
                        name="sortOrigin"
                        value={filters.sortOrigin}
                        onChange={handleChange}
                        className="select-origin"
                    >
                        <option value=""></option>
                        <option value="API">API</option>
                        <option value="Database">Database</option> 
                    </select>
                </div>
                <div className="pagination">
                    <nav
                        name="sort"
                        className="select-sort">
                        <button key="a" value="A-Z" className="order-button" onClick={filterA} >A/Z </button>
                        <button key="b" value="Z-A" className="order-button" onClick={filterZ} >Z/A </button>
                    </nav>
                </div>
                </div>
                {listGames.length === 0 ?<><div className="await">Aguarde, estamos cargando los resultados...</div> <div className="spinner-container"> <img className="spinner" src="https://media4.giphy.com/media/26tn84fF0eL3c898c/giphy.gif?cid=ecf05e4780ytrcq9le37ycbd1mqeo8luco0upmqo7q228mmq&rid=giphy.gif&ct=g" alt="loading"></img></div></> : 
                filteredGames().length === 0 ? <h1 className="games-not-found">No se encontraron juegos</h1> :  
                <div className="list-container">
                    {(state ==0 || state ==1 || state ==2) ? (filteredGames().map(game =>
                    <div className="list-item" key={game.id}>
                            <div className="list-item-name">
                                <h1>{game.name}</h1>
                            </div>
                            <div className="list-item-genres">
                                <h4>{game.game_genres}</h4>
                            </div>
                            <div className="list-item-img">
                                <img 
                                src={game.background_image ? 
                                game.background_image 
                                : "https://images-na.ssl-images-amazon.com/images/I/71JeJBMiejL.jpg"} 
                                alt={game.name}/>
                            </div>
                           <div className="link-container">
                            <Link className="list-item-link" to={`/videogames/${game.id}`}>
                               <p> Mas detalles... </p>
                            </Link>
                           </div>
                    </div>
                )):null}
            </div >
        }
            <div className="pagination">
                <button 
                    className="pagination-button"
                    onClick={prevPage}
                    disabled={currentPage === 0}
                    
                >
                    Previous
                </button>
                <button
                    className="pagination-button"
                    onClick={nextPage}
                    disabled={filteredGames().length < 9}
                >
                    Next
                </button>
            </div>
        </VideogameListStyled>
    );
                                
}

 

export default VideogameList