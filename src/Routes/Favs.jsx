import React, { useEffect } from "react";
import Card from "../Components/Card";
import {useDentistStates} from '../Components/utils/global.context'

const Favs = () => {

  const {state} = useDentistStates();

  return (
    <div className="favs">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
            state.favs.map((dentist) => (
              <Card dentist={dentist} key={dentist.id}/>
          ))) : <h2>No has agreago dentistas</h2>}
      </div>
    </div>
  );
};

export default Favs;
