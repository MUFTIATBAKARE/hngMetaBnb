import React from 'react'
import whitemetabnblogo from '../../assets/white_metabnb_logo.svg'
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { BiCopyright } from "react-icons/bi"

import './footer.css'

function footer() {
  return (
    <div className='container2'>
      <div className='footer_icons'>
        <img src={whitemetabnblogo} alt="Metabnb logo" id="white_metabnb_logo"/>
        <div className='social_Icon'>
          <FaFacebookF id='social_Icon'/>
          <FaInstagram id='social_Icon'/>
          <FaTwitter id='social_Icon'/>
        </div>
        <div id='copyright'>
        <p> <BiCopyright className='moreIcon'/> 2022 Metabnb </p>
        </div>
      </div>
      
      <div className='footerlist'>
        <ul>
          <li id='listhead'>Community</li>
          <li>NFT</li>
          <li>Tokens</li>
          <li>Landlords</li>
          <li>Discord</li>
        </ul>
      </div>
      <div className='footerlist'>
        <ul>
          <li id='listhead'>Places</li>
          <li>Castle</li>
          <li>Farms</li>
          <li>Beach</li>
          <li>Learn More</li>
        </ul>
      </div>
      <div className='footerlist'>
        <ul>
          <li id='listhead'>About us</li>
          <li>Roadmap</li>
          <li>Creators</li>
          <li>Career</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className='socialmobile_Icon2'>
          <FaFacebookF id='socialmobile_Icon2'/>
          <FaInstagram id='socialmobile_Icon2'/>
          <FaTwitter id='socialmobile_Icon2'/>
        </div>
        <div id='mobilecopyright2'>
        <p> <BiCopyright className='mobilemoreIcon2'/> 2022 Metabnb </p>
        </div>
    </div>
  )
}

export default footer