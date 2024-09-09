import React, { useEffect, useState, createContext, useContext, useReducer, } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


export const ContextGlobal = createContext(undefined);

const reducer = (state, action) =>{
  switch(action.type){
    case "ADD_DENTIS":
      return {}
    case "DEL_DENTIST":
      return {}
    case "THEME_DARK":
      return {... state, theme: "dark"}
    case "THEME_LIGTH":
      return {... state, theme: "light"}
  }
}

export const initialState = {theme: "light", data: []}


export const ContextProvider = ({ children }) => {
  
  const savedValue = localStorage.getItem('locStrgDentist'); //Guarda en una constante el valor del localStorage (Si existe)
  savedValue ? null : localStorage.setItem('locStrgDentist', '[]'); //Si existe el localStoge no hace nada, sino lo crea

  const [locStrgDentist, setLocStrgDentist] = useState(() => {  //usarmos un estado para sincronizar con el localStorage (opcional)
    return savedValue ? JSON.parse(savedValue) : [];
  });

  const [themeDark, setThemeDark] = useState(false);

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const navigate = useNavigate();

  const [dentistList, setDentistList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

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
    <ContextGlobal.Provider value={{dentistList, loading, locStrgDentist, setLocStrgDentist, themeDark, setThemeDark, state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useDentistStates = () => useContext(ContextGlobal);