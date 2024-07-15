import React, { useRef, useEffect, useState } from 'react';
import styles from './Socials.module.css';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import JSConfetti from 'js-confetti';
import Tooltip from '@mui/material/Tooltip';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';

const Socials = ({isLocked= true, setIsLocked, lockSoundRef}) => {
    const [jsConfetti, setJsConfetti] = useState(null);
    useEffect(()=>{
        if (!isLocked) {
            jsConfetti.addConfetti();
        }
    },[isLocked])

    useEffect(() => {
        // This code will run only on the client side
        setJsConfetti(new JSConfetti());
    }, []);

    return (
        <div className={styles.container}>
            <Tooltip title={isLocked?"Find a way to unlock me 😁" : ""}>
            <div id="socials-container" style={{ opacity: isLocked ? 0.4 : 1 }} className={styles.icons} >
                <a href="https://www.linkedin.com/in/sanket-deb-7a7669196/" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <LinkedInIcon className={styles.individualIcon}/>
                    </button>
                </a>
                <a href="https://github.com/Sanket-Deb" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <GitHubIcon className={styles.individualIcon}/>
                    </button>
                </a>
                <a href="https://www.instagram.com/sanket_deb/?utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <InstagramIcon className={styles.individualIcon}/>
                    </button>
                </a>
                <a href=" https://wa.me/919599694710?text=Hi, I just stumbled upon your portfolio and would like to connect further!" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <WhatsAppIcon className={styles.individualIcon}/>
                    </button>
                </a>
                <a href="mailto:sanketdebs@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <EmailIcon className={styles.individualIcon}/>
                    </button>
                </a>
                <a href="https://x.com/sanket_d20?t=0xRmhen5hka5v-QzL5oLDA&s=08" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <XIcon className={styles.individualIcon}/>
                    </button>
                </a>
            </div>
            </Tooltip>
            <Tooltip title={isLocked?"Unclock to access the Socials 😉": "Wooohoooo 🎉"}>
                <button onClick={()=>{setIsLocked(!isLocked);lockSoundRef.current.play();}} className={styles.lockButton}>
                    {isLocked ? <LockIcon className={styles.lockIcon} /> : <LockOpenIcon className={styles.lockIcon} />}
                </button>
            </Tooltip>
            <div style={{display:'none'}}>
                <audio ref={lockSoundRef} src="./audio/lock.mp3"/>
            </div>
        </div>
    );
};

export default Socials;
