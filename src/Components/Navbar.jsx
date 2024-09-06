import React from 'react'
import { Link } from 'react-router-dom'
import {useDentistStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeDark, setThemeDark} = useDentistStates();

  const handleTheme = () => {
    themeDark ? setThemeDark(false) : setThemeDark(true);
  }

  return (
    <nav>
      <h1>ColmeClinic</h1>
      <div>
        <Link to={`/`}>Home</Link>
        <Link to={`/contact`}>Contact </Link>
        <Link to={`/favs`}>Favs</Link>
        <button onClick={handleTheme}>Change theme</button>
      </div>
    </nav>
 
    
  )
}

export default Navbar