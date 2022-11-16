import React from 'react'
import './search.css'
import topimages from '../../assets/top_images.svg'
import opensea from '../../assets/opensea.svg'
import metamask from '../../assets/metamask.svg'
import mbtoken from '../../assets/mbtoken.svg'

function search() {
  return (
    <div className='container5'>
        <div className='alpha'>
            <div id='echo'>
                <h3>Rent a <span id='purple'>Place</span> away from <span id='purple'> Home </span> in the <span id='purple'>Metaverse</span></h3>
                <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                <input type='text' placeholder='Search for location' />
                <input type='search' value='Search' />
            </div>
            <div className='topimages'>
            <img src={topimages} alt="NFT" id="topimages"/>
            </div>
        </div>
        <div className='base'>
        <img src={mbtoken} alt="NFT" id="mbtoken"/>
        <img src={metamask} alt="NFT" id="metamask"/>
        <img src={opensea} alt="NFT" id="opensea"/>
        </div>
    </div>
  )
}

export default search