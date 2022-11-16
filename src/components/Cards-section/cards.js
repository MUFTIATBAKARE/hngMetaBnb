import React from 'react'
import adventure1 from '../../assets/adventure_1.svg'
import adventure2 from '../../assets/adventure_2.svg'
import adventure3 from '../../assets/adventure_3.svg'
import adventure4 from '../../assets/adventure_4.svg'
import adventure5 from '../../assets/adventure_5.svg'
import adventure6 from '../../assets/adventure_6.svg'
import adventure7 from '../../assets/adventure_7.svg'
import adventure8 from '../../assets/adventure_8.svg'

import './cards.css'


function cards() {
  return (
    <div className='container3'>
        <div className='cards'>
            <h6>Inspiration for your next adventure</h6>
        </div>
        <div id='cards'>
        <img src={adventure1} alt="adv" id="adv_pic"/>
        <img src={adventure2} alt="adv" id="adv_pic"/>
        <img src={adventure3} alt="adv" id="adv_pic"/>
        <img src={adventure4} alt="adv" id="adv_pic"/>
        </div>
        <div id='cards'>
        <img src={adventure5} alt="adv" id="adv_pic"/>
        <img src={adventure6} alt="adv" id="adv_pic"/>
        <img src={adventure7} alt="adv" id="adv_pic"/>
        <img src={adventure8} alt="adv" id="adv_pic"/>
        </div>
    </div>
  )
}

export default cards