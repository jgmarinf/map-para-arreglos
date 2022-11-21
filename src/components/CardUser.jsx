import React from 'react'
import useAllHooks from './../hooks/useAllHooks';
import App from '../App';

const CardUser = ({user}) => {
    

  return (
    <div className='card-user'>
      <img className='img' src={user.picture.medium} ></img>
      <h2>Nombre: {user.name.title} {user.name.first} {user.name.last}</h2>
      <h2>Ciudad: {user.location.city}, {user.location.country}</h2>
      <h2>Email: {user.email}</h2>
    </div>
  )
}

export default CardUser