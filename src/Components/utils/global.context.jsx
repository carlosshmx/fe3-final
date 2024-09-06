import React, { useEffect, useState, createContext, useContext } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const navigate = useNavigate();

  const [dentistList, setDentistList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    const fetchtData = async () => {
      try{
        const dentistGet = await axios.get(`https://jsonplaceholder.typicode.com/users/`)
        setDentistList(dentistGet.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        navigate("/error")
      }
    }
    fetchtData();
  },[]);

  return (
    <ContextGlobal.Provider value={{dentistList, loading}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDentistStates = () => useContext(ContextGlobal);