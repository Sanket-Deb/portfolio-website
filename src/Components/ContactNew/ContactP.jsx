import React, { useState } from 'react';
import styles from './ContactP.module.css'
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

const ContactP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

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
                <button className={styles.SendMessage} onClick={handleSubmit}>Send Message <SendIcon style={{ marginLeft: "1rem" }} />
                </button>
            </div>
              <form className={zilla.className +" "+styles.FormBox} onSubmit={handleSubmit}>
                <div className={styles.FormInput}>
                <input type="text" id="name" name="name"  placeholder="Enter your name" required value={formData.name} onChange={handleChange}/>
                <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter your email" required value={formData.email} onChange={handleChange}/>
                </div>
                <textarea id="message" name="message" placeholder="Shoot your message!" required value={formData.message} onChange={handleChange}/>
              </form>
        </div>

    </div>
  )
}

export default ContactP