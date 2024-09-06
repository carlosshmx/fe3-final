import React from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const locStrgDentist = JSON.parse(localStorage.getItem('locStrgDentist'));

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage✅*/}
        {/* Deberan renderizar una Card por cada uno de ellos✅*/}
        {locStrgDentist ? (
            locStrgDentist.map((dentist) => (
              <Card id={dentist.id} name={dentist.name} username={dentist.username} key={dentist.id} deletable={true}/>
          ))) : <h2>No has agreago dentistas</h2>}
      </div>
    </>
  );
};

export default Favs;
