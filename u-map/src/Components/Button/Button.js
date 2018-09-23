import React from 'react'
import scrollToComponent from 'react-scroll-to-component';

const Button = (props) => {
  return(
    <div class="dib pa3 ma4 br3 ba b--orange bg-animate hover-bg-orange grow pointer white">
      <li onClick = {() => document.getElementById(props.block).scrollIntoView({behavior: 'smooth'})}>{props.name}</li>
    </div>
  );
}

export default Button;
