import React from 'react'
import Image from 'next/image'
import styles from './Socials.module.css'

const Socials = () => {
    const linkedin_icon = '/images/icons8-linkedin.gif'
    const github_icon = '/images/icons8-github.gif'
    const instagram_icon = '/images/icons8-instagram.gif'
    const whatsapp_icon = '/images/icons8-whatsapp.gif'
  return (
    <div id="socials-container" style={{opacity:0.4}} className={styles.icons} title="Find a way to unlock me 😁">
        <a href="https://www.linkedin.com/in/sanket-deb-7a7669196/" target="_blank" rel="noopener noreferrer">
        <button disabled>
            <Image src={linkedin_icon} height={40} width={40} alt="Linkedin-profile"/>
        </button>
        </a>
        <a href="https://github.com/Sanket-Deb" target="_blank" rel="noopener noreferrer">
            <Image src={github_icon} height={40} width={40} alt="Github-profile"/>
        </a>
        <a href="https://www.instagram.com/sanket_deb/?utm_source=qr" target="_blank" rel="noopener noreferrer">
            <Image src={instagram_icon} height={40} width={40} alt="Instagram-profile"/>
        </a>
        <a href=" https://wa.me/919599694710?text=Hi, I just stumbled upon your portfolio and would like to connect further!" target="_blank" rel="noopener noreferrer">
            <Image src={whatsapp_icon} height={40} width={40} alt="Whatsapp-profile"/>
        </a>
        {/* <div title="Find a way to unlock me 😁" className={styles.overlay}></div> */}
 
    </div>
  )
}

export default Socials