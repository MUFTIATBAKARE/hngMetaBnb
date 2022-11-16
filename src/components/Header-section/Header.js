import React from 'react'
import { useState } from 'react'
import metabnblogo from '../../assets/metabnblogo.svg'
import './Header.css'
import ConnectWallet from '../modal_section/ConnectWallet'
import { HiMenu } from "react-icons/hi"
import { CgClose } from "react-icons/cg"

import {Link} from 'react-router-dom'

function Header() {
  const[show, setShow] = useState(false)
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  return (
    <div  className='container1'>
      <div className='metabnb_logo'>
      <Link to="/"><img src={metabnblogo} alt="Metabnb logo" id="metabnb_logo"/></Link>
      </div>
      <div className='headerlist'>
        <ul>
          <li>
            <Link to="/" id='click'>Home</Link>
          </li>
          <li>
            <Link to="/placetostay" id='click'>Place to stay</Link>
          </li>
          <li>
            <Link to="/Nft" id='click'>NFTs</Link>
          </li>
          <li>
            <Link to="/Community" id='click'>Community</Link>
          </li>
        </ul>
      </div>
      <div className='click1'>
        <button onClick={()=> setShow(true) } id='click1'> Connect Wallet </button>
        <ConnectWallet onClose={()=> setShow(false)} show={show}/>
      </div>
        <div className='hamburger' onClick={handleClick}>
          {click ? <CgClose/> : <HiMenu  className='hamburgerIcon'/>}
          
        </div>
        <div className ={click ? 'mobileMenu active' : 'mobileMenu'}>
          <ul className = 'mobileList' >
            <li>
              <Link to="/" id='click9'>Home</Link>
            </li>
            <li>
              <Link to="/placetostay" id='click9'>Place to stay</Link>
            </li>
            <li>
              <Link to="/Nft" id='click9'>NFTs</Link>
            </li>
            <li>
              <Link to="/Community" id='click9'>Community</Link>
            </li>
          </ul>
          <div className='mobileMenu-bottom'>
            <button onClick={()=> setShow(true) } id='click7'> Connect Wallet </button>
            <ConnectWallet onClose={()=> setShow(false)} show={show}/>
          </div>
        </div>
       
    </div>
  )
}

export default Header