import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Socials.module.css';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import JSConfetti from 'js-confetti';
import Tooltip from '@mui/material/Tooltip';

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

    const linkedin_icon = './images/icons8-linkedin.svg';
    const github_icon = './images/icons8-github.svg';
    const instagram_icon = './images/icons8-instagram.svg';
    const whatsapp_icon = './images/icons8-whatsapp.svg';
    const gmail_icon = './images/icons8-gmail.svg';
    const twitter_icon = './images/icons8-twitterx.svg';


    return (
        <div className={styles.container}>
            <Tooltip title={isLocked?"Find a way to unlock me 😁" : ""}>
            <div id="socials-container" style={{ opacity: isLocked ? 0.4 : 1 }} className={styles.icons} >
                <a href="https://www.linkedin.com/in/sanket-deb-7a7669196/" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <Image src={linkedin_icon} height={35} width={35} alt="Linkedin-profile" />
                    </button>
                </a>
                <a href="https://github.com/Sanket-Deb" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <Image src={github_icon} height={35} width={35} alt="Github-profile" />
                    </button>
                </a>
                <a href="https://www.instagram.com/sanket_deb/?utm_source=qr" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <Image src={instagram_icon} height={35} width={35} alt="Instagram-profile" />
                    </button>
                </a>
                <a href=" https://wa.me/919599694710?text=Hi, I just stumbled upon your portfolio and would like to connect further!" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <Image src={whatsapp_icon} height={35} width={35} alt="Whatsapp-profile" />
                    </button>
                </a>
                <a href="mailto:sanketdebs@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <Image src={gmail_icon} height={35} width={35} alt="Gmail-profile" />
                    </button>
                </a>
                <a href="https://x.com/sanket_d20?t=0xRmhen5hka5v-QzL5oLDA&s=08" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
                    <button disabled={isLocked}>
                        <Image src={twitter_icon} height={35} width={35} alt="Twitter-profile" />
                    </button>
                </a>
            </div>
            </Tooltip>
            <Tooltip title={isLocked?"Unclock to access the Socials 😉": "Wooohoooo 🎉"}>
                <button onClick={()=>{setIsLocked(!isLocked);lockSoundRef.current.play();}} className={styles.lockButton}>
                    {isLocked ? <LockIcon /> : <LockOpenIcon />}
                </button>
            </Tooltip>
            <div style={{display:'none'}}>
                <audio ref={lockSoundRef} src="./audio/lock.mp3" />
            </div>
        </div>
    );
};

export default Socials;
