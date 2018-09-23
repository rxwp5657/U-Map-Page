import React from 'react'
import TextBlock from '../TextBlock/TextBlock.js'
import question from './question.png'
import './Contact.css'

const Contact = () => {
  return (
    <div class="contact" id="contact">
      <TextBlock
        img = {question}
        title = {'FAQ'}
        text = {"Scrum Master: Aldo Castellanos. UX Designer: Jordi Omar Ponce. Front End Programmer: Juan Carlos Sánchez, Backend Programmers: Juan Carlos Sánchez, Carlos Andrés Reyes."}
      />
    </div>
  );
}

export default Contact;
