import React from 'react'
import Card from '../Components/Card'
import {useDentistStates} from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {dentistList, loading} = useDentistStates();

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        <ul>
          {!loading ? (
            dentistList.map((dentist, index) => {
            <li key={index}>
              <img src="" alt="" />
              <p>{dentist.name}</p>
              <p>Hola</p>
              <p>{dentist.username}</p>
            </li>
          })) : <h2>Cargando...</h2>}
        </ul>
        
      </div>
    </main>
  )
}

export default Home