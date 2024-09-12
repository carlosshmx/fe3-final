import React from "react";
import doctor from "/images/doctor.jpg"
import { Link, useNavigate } from "react-router-dom";
import {useDentistStates} from '../Components/utils/global.context'


const Card = ({ dentist }) => {

  const {state, dispatch} = useDentistStates();

  const isFav = state.favs.some((fav) => fav.id == dentist.id);

  const handleFav = () => {
    dispatch({ type: state.favs.some((fav) => fav.id == dentist.id) ? "DEL_DENTIST" : "ADD_DENTIS", payload: dentist });
  };

  const imageUrl =  `../../public/profile_images/${dentist.id}.jpg`


  return (
    <div className="card" >
        <img src={imageUrl} alt="" />
        <i className={'fa-solid fa-star ' + (isFav ? 'checked' : '')} onClick={handleFav }></i>
        <Link to={`/dentist/${dentist.id}`}>{dentist.name}</Link>
        <p>User: {dentist.username}</p>
        {isFav ? (<button onClick={handleFav} className="favButton">Delete fav</button>) 
        : (<button onClick={handleFav} className="favButton">Add to favorites</button>) 
        }
    </div>
  );
};

export default Card;
