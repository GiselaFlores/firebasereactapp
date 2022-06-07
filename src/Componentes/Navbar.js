import {NavLink} from 'react-router-dom';

import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <ul>
            <li> <NavLink to="/productos" >Productos</NavLink> </li>
            <li> <NavLink to="/productos" >Contacto</NavLink> </li>
            <li> <NavLink to="/productos" >Novedades</NavLink> </li>

        </ul>
    </div>
  )
}
