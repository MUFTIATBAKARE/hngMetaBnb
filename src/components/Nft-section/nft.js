import React from 'react'
import nftpic from '../../assets/NFTs.svg'
import './nft.css'


function nft() {
  return (
    <div className='container4'>
        <div className='nft' id='nft'>
            <h3>Metabnb NFTs</h3>
            <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
            <button>Learn more</button>
        </div>
        <div className='nft_pic'>
        <img src={nftpic} alt="NFT" id="nft_pic"/>
        </div>
    </div>
  )
}

export default nft