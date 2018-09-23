import React from 'react'
import TextBlock from '../TextBlock/TextBlock.js'
import phone from './app.png'
import './Us.css'

const Us = () => {
  return(
    <div class="us" id='us'>
      <TextBlock
        img={phone}
        title={"U-Map"}
        text={"Is a cutting-edge geolocation app that eneables you to pinpoint the location of your classroom inside your college. Also, it gives you directions by using QR Codes for augmented reality and the google API."}
      />
    </div>
  );
}

export default Us;
