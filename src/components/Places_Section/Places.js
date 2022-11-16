import React from 'react'

import adventure1 from '../../assets/adventure_1.svg'
import adventure2 from '../../assets/adventure_2.svg'
import adventure3 from '../../assets/adventure_3.svg'
import adventure4 from '../../assets/adventure_4.svg'
import adventure5 from '../../assets/adventure_5.svg'
import adventure6 from '../../assets/adventure_6.svg'
import adventure7 from '../../assets/adventure_7.svg'
import adventure8 from '../../assets/adventure_8.svg'
import adventure9 from '../../assets/adventure_9.svg'
import adventure10 from '../../assets/adventure_10.svg'
import adventure11 from '../../assets/adventure_11.svg'
import adventure12 from '../../assets/adventure_12.svg'
import adventure13 from '../../assets/adventure_13.svg'
import adventure14 from '../../assets/adventure_14.svg'
import adventure15 from '../../assets/adventure_15.svg'
import adventure16 from '../../assets/adventure_16.svg'

import './Places.css'

function Places() {
  return (
    <div className='container8'>
        <div id='places'>
        <img src={adventure5} alt="adv" id="places_pic"/>
        <img src={adventure6} alt="adv" id="places_pic"/>
        <img src={adventure7} alt="adv" id="places_pic"/>
        <img src={adventure8} alt="adv" id="places_pic"/>
        </div>
        <div id='places'>
        <img src={adventure1} alt="adv" id="places_pic"/>
        <img src={adventure2} alt="adv" id="places_pic"/>
        <img src={adventure3} alt="adv" id="places_pic"/>
        <img src={adventure4} alt="adv" id="places_pic"/>
        </div>
        <div id='places'>
        <img src={adventure9} alt="adv" id="places_pic"/>
        <img src={adventure10} alt="adv" id="places_pic"/>
        <img src={adventure11} alt="adv" id="places_pic"/>
        <img src={adventure12} alt="adv" id="places_pic"/>
        </div>
        <div id='places'>
        <img src={adventure13} alt="adv" id="places_pic"/>
        <img src={adventure14} alt="adv" id="places_pic"/>
        <img src={adventure15} alt="adv" id="places_pic"/>
        <img src={adventure16} alt="adv" id="places_pic"/>
        </div>
        
    </div>
  )
}

export default Places