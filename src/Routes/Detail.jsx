import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [dentist, setDentist] = useState({})

  const navigate = useNavigate();

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
      <>
        <h1>Detail Dentist id: {dentist.id} </h1>
        <div>
          <p>Nombre: {dentist.name}</p>
          <p>Email: {dentist.email}</p>
          <p>Telefono: {dentist.phone}</p>
          <p>Sitio web: {dentist.website}</p> 
        </div>
      </>
      ):(
        <h2>Cargando...</h2>
      )} 
      
    </>
  )
}

export default Detail