import { Link } from "react-router-dom";
import {useDentistStates} from '../Components/utils/global.context'
import { profileImg } from '../Components/utils/imagesImport.js'

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
        {isFav ? (<button onClick={handleFav} className="favButton">Delete from favorites</button>) 
        : (<button onClick={handleFav} className="favButton">Add to favorites</button>) 
        }
    </div>
  );
};

export default Card;
