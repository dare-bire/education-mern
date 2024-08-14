import React, { useState } from 'react';
import './Contact.css';
import themePattern from '../../assets/theme_pattern.svg';
import mailIcon from '../../assets/mail_icon.svg';
import locationIcon from '../../assets/location_icon.svg';
import callIcon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "1963b8a3-7043-4947-b45c-c85f8fd6522d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <div className='contact-title'>
        <h1>Get in touch</h1>
        <img src={themePattern} alt='Theme Pattern' />
      </div>
      <div className='contact-section'>
        <div className='contact-left'>
          <h1>Let's talk</h1>
          <p>I'm currently available to take on new projects, so feel free</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mailIcon} alt='Mail Icon' />
              <p>derartualemayehu268@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={callIcon} alt='Call Icon' />
              <p>+251966792413</p>
            </div>
            <div className='contact-detail'>
              <img src={locationIcon} alt='Location Icon' />
              <p>Oromia, Ethiopia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor='name'>Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' required />
          <label htmlFor='email'>Your Email</label>
          <input type='email' placeholder='Enter your email' name='email' required />
          <label htmlFor='message'>Write Your Message Here</label>
          <textarea name='message' rows="8" placeholder='Enter your message' required></textarea>
          <button type='submit' className='contact-submit'>Submit Now</button>
          <p className='form-result'>{result}</p>
        </form>
      </div>
    </div>
  );
}

export default Contact;
