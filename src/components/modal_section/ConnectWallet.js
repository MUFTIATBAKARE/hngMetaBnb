import React from 'react'
import modal_metamask from '../../assets/modal_metamask.svg'
import modalWallet from '../../assets/modalWallet.svg'
import { CgClose } from "react-icons/cg"
import { BiChevronRight } from "react-icons/bi"

import './ConnectWallet.css'


const ConnectWallet = props => {
  if (!props.show){
    return null
  }
  return (
    <div className='modal' onClick = {props.onClose}>
      <div className='modalContent' onClick = { e => e.stopPropagation()}>
        <div className='modalHeader'>
          <h4 className='modalTitle'>Connect Wallet</h4>
          <span onClick = {props.onClose}><CgClose id='close_Icon'/></span>
        </div>
        <hr id='rule' />
        <div className='modalBody'>
          <p>Choose your preferred wallet:</p>
          <div>
            <button > <img src= {modal_metamask} alt="/" id='modalPic' /> 
            <BiChevronRight id='chevron_Icon'/> </button>
          </div>
          <div>
            <button  > <img src= {modalWallet} alt="/" id='modalPic' />
             <BiChevronRight id='chevron_Icon'/> </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectWallet