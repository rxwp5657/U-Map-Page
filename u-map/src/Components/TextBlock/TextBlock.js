import React from 'react'
import './TextBlock.css'
import ScrollAnimation from 'react-animate-on-scroll'

const TextBlock = (props)=> {
  return(
    <div class = 'textBlockAll'>
      <ScrollAnimation animateIn = "zoomIn">
      <div class="textBlock">
        <div class='textBlockImg'>
          <img src={props.img}/>
        </div>
        <div>
          <h1 class="textBlockTitle">{props.title}</h1>
          <p class="textBlockParagraph">{props.text}</p>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
}

export default TextBlock;
