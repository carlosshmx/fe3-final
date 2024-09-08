import React, { useEffect } from "react";
import Card from "../Components/Card";
import {useDentistStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const {locStrgDentist} = useDentistStates();

  let favorites = JSON.parse(localStorage.getItem('locStrgDentist'));

  useEffect(()=>{
  },[locStrgDentist])

  return (
    <div className="favs">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage✅*/}
        {/* Deberan renderizar una Card por cada uno de ellos✅*/}
        {favorites.length > 0 ? (
            favorites.map((dentist) => (
              <Card id={dentist.id} name={dentist.name} username={dentist.username} key={dentist.id} deletable={true}/>
          ))) : <h2>No has agreago dentistas</h2>}
      </div>
    </div>
  );
};

export default Favs;
