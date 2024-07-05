import React from 'react';
import styles from './Contact.module.css';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const contact = () => {
  return (
    <div id='contact' className={styles.ContactContainer}>
        <h1>Contact Me!</h1>
        <p className={styles.subtitle}>Get in touch</p>
        
        <div className={styles.content}>
            <div className={styles.contactinfo}>
                <div className={styles.infoitem}>
                    <CallIcon/>
                    <div>
                        <h3>Call Me</h3>
                        <p>+91 9599694710</p>
                    </div>
                </div>
                <div className={styles.infoitem}>
                    <EmailIcon/>
                    <div>
                        <h3>Email</h3>
                        <p>sanketdebs@gmail.com</p>
                    </div>
                </div>
                <div className={styles.infoitem}>
                    <LocationOnIcon />
                    <div>
                        <h3>Location</h3>
                        <p>Jaipur, Rajasthan, India</p>
                    </div>
                </div>
                <button className={styles.sendmessage}>Send Message <SendIcon /></button>
            </div>
            
            <form className={styles.contactForm}>
                <div className={styles.formrow}>
                    <input type="text" id="name" placeholder="Name" />
                    <input type="email" id="email" placeholder="Email" />
                </div>
                <textarea id="message" placeholder="Message"></textarea>
            </form>
        </div>
    </div>  
  )
}

export default contact