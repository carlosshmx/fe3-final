import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const Detail = () => {
 
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [dentist, setDentist] = useState({})

  const navigate = useNavigate();

  const imageUrl =  `../../public/profile_images/${id}.jpg`

  useEffect(()=>{
    setLoading(true);
    const fetchtData = async () => {
      try{
        const dentistGet = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setDentist(dentistGet.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        navigate("/error")
      }
    }
    fetchtData();
  },[]);

  return (
    <>
     {!loading ? (
      <div className='details'>
        <div className='detailsContainer'>
          <img src={imageUrl} alt="" />
          <div>
            <h3>{dentist.name}</h3>
            <p>Email: {dentist.email}</p>
            <p>Phone: {dentist.phone}</p>
            <p>Website: {dentist.website}</p>
          </div>
        </div>
      </div>
      ):(
        <h2>Cargando...</h2>
      )} 
      
    </>
  )
}

export default Detail