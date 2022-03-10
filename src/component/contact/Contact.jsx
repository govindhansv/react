import React from "react";
import "./contact.css";
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_f1do7o5', 'template_9zshfub', form.current, '7QQzEl4bU35bLwUv8')
    
    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option_icon"/>
            <h4>Email</h4>
            <h5>natasharomanoff@gmail.com</h5>
            <a href="mailto:fadhilkgm64@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option_icon" />
            <h4>Messenger</h4>
            <h5>Natasha Romanoff</h5>
            <a href="https://m.me/fadhil">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option_icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 439348920</h5>
            <a href="https://api.whatsapp.com/send?phone+918075595617" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        {/* End of Contact options */}

        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
