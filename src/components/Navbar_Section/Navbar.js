import React from 'react'
import './Navbar.css'

import { GoSettings } from "react-icons/go"

function Navbar() {
  return (
    <div className='container6'>
      <div className='navlist'>
        <ul>
          <li>
          Restaurant
          </li>
          <li>
          Cottage
          </li>
          <li>
          Castle
          </li>
          <li>
          Fantast city
          </li>
          <li>
          Beach
          </li>
          <li>
          Carbins
          </li>
          <li>
          Off-grid
          </li>
          <li>
          Farm
          </li>
          <button> Location <span id='set'> <GoSettings /> </span></button>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar