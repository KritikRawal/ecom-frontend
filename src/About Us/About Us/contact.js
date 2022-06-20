import React from 'react'
import './contact.css'
import {FaFacebookMessenger} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'
// import {useRef} from 'react'
// import emailjs from 'emailjs-com' 


const contact = () => {

  // const form= useRef();

  // const sendEmail= (e)=>{
  //   e.preventDefault();

  //   emailjs.sendForm('service_xw6npxh','template_1n56jww', form.current,'GZzx3Evtr37SJ1suW' )
  
  return (
    <section id='contact'>
      <h5 className='top'>Get in Touch</h5>
      <h2  className='top'>Contact us</h2>

      <div className='container contact_container'>
        <div className='contact__options'>
          <artical className='contact__option'>
            <MdEmail />
            <h4>Email</h4>
            <h5 className='name'>suman.niraula00@gmail.com</h5>
            <a href='mailto:suman.niraula00@gmail.com'>Send a messege</a>
          </artical>
          <br></br>

          <artical className='contact__option'>
            <FaFacebookMessenger />
            <h4>Messenger</h4>
            <h5 className='name'>Suman Niroula</h5>
            <a href='https://m.me/suman.niroula.735' target='_blank'>Send a messege</a>
          </artical>
          <br></br>

          <artical className='contact__option'>
            <FaWhatsapp />
            <h4>Whatsapp</h4>
            <h5 className='name'>9817933293</h5>
            <a href='https://api.whatsapp.com/send?phone+9817933293' target='_blank'>Send a messege</a>
          </artical>
        </div>

        <form >

          <input type='text' name='name' placeholder='Your Full name'  required/>
          <input type='email' name='email' placeholder='Your Email'  required/>
          <textarea  name='messege'  rows='7' placeholder='Your Messege'  required/>
          <button type='submit' className='btn btn-primary'>Send Messege</button>

        </form>
      </div>
    </section>
  )
}


export default contact