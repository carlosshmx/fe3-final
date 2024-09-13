import Card from "../Components/Card";
import {useDentistStates} from '../Components/utils/global.context'
import Button from "../Components/Button";

const Favs = () => {

  const {state, dispatch} = useDentistStates();

  return (
    <div className="favs">
      <h1>Favorites Dentists</h1>
      <div className="card-grid">
        {state.favs.length > 0 ? (
            state.favs.map((dentist) => (
              <Card dentist={dentist} key={dentist.id}/>
          ))) : <h2>There are not favorites</h2>}
      </div>
      <div className="resetFavs">
        {state.favs.length > 0 ? (
          <Button onClick={()=>dispatch({type: "RESET_FAVS"})}>Reset favorites</Button>
        ): null}
      </div>
    </div>
  );
};

export default Favs;
