import React from "react";
import doctor from "/images/doctor.jpg"
import { Link, useNavigate } from "react-router-dom";
import {useDentistStates} from '../Components/utils/global.context'


const Card = ({ dentist, deletable }) => {

  const {state, dispatch} = useDentistStates();

  const localFavs = JSON.parse(localStorage.getItem('localFavs'));

  const verifyExistFav = (id)=>{
    return localFavs.some(savedDentist => savedDentist.id == id);
  }

  // Aqui iria la logica para agregar la Card en el localStorage✅
  const addFav = ()=>{
    const {id, name, username, website} = dentist;

    if(verifyExistFav(dentist.id)){ //Verifica si ya existe el destista en localStorage.
      alert('This dentist is already a favorite')
    }else{
      const newDentist = {id, name, username, website};
      const newList = localFavs;
      newList.push(newDentist)
      localStorage.setItem('localFavs', JSON.stringify(newList))
      dispatch({type:"ADD_DENTIS", payload: newDentist})
      alert('Dentist added to favorites')
    }
                        
  }

  const delFav = ()=>{
    const newList = localFavs.filter((savedDentist) => savedDentist.id != dentist.id)
    localStorage.setItem('localFavs', JSON.stringify(newList))
    dispatch({type:"DEL_DENTIST", payload: dentist.id})
  }

  const imageUrl =  `../../public/profile_images/${dentist.id}.jpg`

  const isFavorite = verifyExistFav(dentist.id) ? 'checked' : '';

  return (
    <div className="card" >
        {/* En cada card deberan mostrar en name - username y el id ✅*/}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle ✅*/}
        <img src={imageUrl} alt="" />
        <i className={'fa-solid fa-star ' + isFavorite}></i>
        <Link to={`/dentist/${dentist.id}`}>{dentist.name}</Link>
        <p>User: {dentist.username}</p>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {deletable ? (<button onClick={delFav} className="favButton">Delete fav</button>) 
        : (<button onClick={addFav} className="favButton">Add to favorites</button>) 
        }
    </div>
  );
};

export default Card;
