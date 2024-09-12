import React from "react";
import doctor from "/images/doctor.jpg"
import { Link, useNavigate } from "react-router-dom";
import {useDentistStates} from '../Components/utils/global.context'
import img1 from "../../public/images/1.jpg"
import img2 from "../../public/images/2.jpg"
import img3 from "../../public/images/3.jpg"
import img4 from "../../public/images/4.jpg"
import img5 from "../../public/images/5.jpg"
import img6 from "../../public/images/6.jpg"
import img7 from "../../public/images/7.jpg"
import img8 from "../../public/images/8.jpg"
import img9 from "../../public/images/9.jpg"
import img10 from "../../public/images/10.jpg"

const profileImg = [img1,img2,img3,img4,img5,img6,img7,img8,img9,img10]


const Card = ({ dentist }) => {

  const {state, dispatch} = useDentistStates();

  const isFav = state.favs.some((fav) => fav.id == dentist.id);

  const handleFav = () => {
    dispatch({ type: state.favs.some((fav) => fav.id == dentist.id) ? "DEL_DENTIST" : "ADD_DENTIS", payload: dentist });
  };

  return (
    <div className="card" >
        <img src={profileImg[dentist.id-1]} alt="" />
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
