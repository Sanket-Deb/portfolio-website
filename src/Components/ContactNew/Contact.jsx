import React, { useState, useEffect } from 'react';
import styles from './Contact.module.css'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Zilla_Slab } from 'next/font/google';

const zilla=Zilla_Slab({
    weight:'400',
    style:'normal',
    subsets:['latin'],
    display:'swap'
})

const Contact = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });
const [isFormValid, setIsFormValid] = useState(false);
const [nameError, setNameError] = useState("");
const [emailError, setEmailError] = useState("");
const [popup, setPopup] = useState({show: false, message:"", type:""});

  const handleChange = (e) => {
    const { name: inputName, value } = e.target;
    setFormData({
      ...formData,
      [inputName]: value
    });
  
  if ( inputName === "username"){
    setNameError(value.trim() === "" || !/^[a-zA-Z\s]+$/.test(value)? "Please enter valid name." : "");
    }

  if( inputName === "email"){
    setEmailError(value.trim() === "''" || !validateEmail(value) ?
    "Please enter a valid email." : "");
    }
  };

  const validateEmail = (email)=>{
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  useEffect(()=>{
    const { username, email, message} = formData;
    setIsFormValid( username.trim() !== "" && validateEmail(email) && message.trim() !== "");
  },[formData])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid){
      setPopup({
        show: true,
        message: "Please fill out the form correctly.",
        type: "error"
      });
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setPopup({
          show: true,
          message: "Message sent successfully!",
          type: "success"
        });
        setFormData({ username: '', email: '', message: '' });
      } else {
        setPopup({
          show: true,
          message: "Failed to send message.",
          type: "error",
        });
      }
    } catch (error) {
      setPopup({
        show: true,
        message: "An error occurred. Please try again later.",
        type: "error",
      });
    } 
  };

  useEffect(()=>{
    if(popup.show){
      const timer = setTimeout(()=>{
        setPopup({show: false, message: "", type:""});
      },3000)
      return()=> clearTimeout(timer);
    }
  },[popup]);

  return (
    <div id='contact' className={styles.ContactContainer}>
        <div className={styles.ContactTitle}>
            <h3>Contact Me!</h3>
            <p className={zilla.className}>Get in touch</p>
        </div>
        <div className={zilla.className +" "+styles.ContactCard}>
            <div className={styles.InfoBox}>
                <div className={styles.InfoItem}>
                    <CallIcon/>
                    <div>
                      <h3>Call Me</h3>
                      <p>+91 9599694710</p>
                    </div>
                </div>
                <div className={styles.InfoItem}>
                    <EmailIcon/>
                    <div>
                      <h3>Email at</h3>
                      <p>sanketdebs@gmail.com</p>
                    </div>
                </div>
                <div className={styles.InfoItem}>
                    <LocationOnIcon/>
                    <div>
                      <h3>Location</h3>
                      <p>Jaipur, Rajasthan, India</p>
                    </div>
                </div>

            </div>
              <form className={zilla.className +" "+styles.FormBox} onSubmit={handleSubmit}>
                <div className={styles.FormInput}>
                <input className={styles.UsernameInput} type="text" id="username" name="username"  placeholder="Enter your name" required value={formData.username} onChange={handleChange}/>
                {nameError && <p className={styles.ErrorMessage}>{nameError}</p>}
                <input className={styles.EmailInput}  type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter your email" required value={formData.email} onChange={handleChange}/>
                {emailError && <p className={styles.ErrorMessage}>{emailError}</p>}
                </div>
                <textarea id="message" name="message" placeholder="Shoot your message!" required value={formData.message} onChange={handleChange}/>
                <button className={styles.SendMessage} style={{ opacity:!isFormValid? 0.4 : 1 }} disabled={!isFormValid}>
                  <input type="submit"  value="Send Message"  />
                  <SendIcon />
                </button>
              </form>
              {popup.show && (
                <div className={`${styles.Popup} ${styles[popup.type]}`}>
                  <p>{popup.message}</p>
                  <button onClick={()=> setPopup({show:false, message: "", type: ""})}>
                    CLOSE
                  </button>
                </div>
              )}
        </div>
    </div>
  );
};

export default Contact