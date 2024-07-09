import React from 'react';
import styles from './Footer.module.css';
import { Zilla_Slab, Roboto  } from 'next/font/google';


const roboto = Roboto ({
  subsets: ['latin'],
  weight: ['400','700']
})

const zilla=Zilla_Slab({
    weight:'400',
    style:'normal',
    subsets:['latin'],
    display:'swap'
})

const Footer = () => {
  return (
    <div className={styles.FooterContainer}>
    <footer className={roboto.className+" "+styles.FooterBox} >
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
    </footer>
    <p className={zilla.className+" "+styles.CopyRight}>© Sanket Deb. All Rights Reserved.</p>
    </div>
  )
}

export default Footer