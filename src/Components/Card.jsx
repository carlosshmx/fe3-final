import React from "react";
import doctor from "../../public/images/doctor.jpg"
import { Link, useNavigate } from "react-router-dom";
import {useDentistStates} from '../Components/utils/global.context'


const Card = ({ name, username, id, deletable }) => {

  const {setLocStrgDentist} = useDentistStates();

  const navigate = useNavigate();


  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage✅
    const newDentist = {name:name, username:username, id:id}; //Crea un objeto con los datos del dentista
    const savedValue = JSON.parse(localStorage.getItem('locStrgDentist')); //trae el array guardado en el localStorage para agregar el nuevo elemento
    savedValue.push(newDentist);                               
    localStorage.setItem('locStrgDentist', JSON.stringify(savedValue))

    setLocStrgDentist(JSON.parse(localStorage.getItem('locStrgDentist'))); //actualiza el estado del contexto (opcional)
  }

  const delFav = ()=>{
    const savedValue = JSON.parse(localStorage.getItem('locStrgDentist'));
    const newList = savedValue.filter((dentist) => dentist.id != id)
    localStorage.setItem('locStrgDentist', JSON.stringify(newList))

    setLocStrgDentist(JSON.parse(localStorage.getItem('locStrgDentist')));
    window.location.reload();
  }

  return (
    <div className="card" >
        {/* En cada card deberan mostrar en name - username y el id ✅*/}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle ✅*/}
        <img src={doctor} alt="" />
        <Link to={`/dentist/${id}`}>{name}</Link>
        <p>ID: {id} / User: {username}</p>

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {deletable ? (<button onClick={delFav} className="favButton">Delete fav</button>) 
        : (<button onClick={addFav} className="favButton">Add fav</button>) 
        }
    </div>
  );
};

export default Card;
