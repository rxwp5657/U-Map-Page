import React from 'react'
import "animate.css/animate.min.css"
import Button from '../Button/Button.js'

const Navigation = () => {
  return(
    <nav>
      <ul style={{listStyleType: 'none'}}>
        <Button name={'App'} block={'us'}/>
        <Button name={'Demo'}/>
        <Button name={'Contact Us'} block={'contact'}/>
      </ul>
    </nav>
  );
}

export default Navigation;
