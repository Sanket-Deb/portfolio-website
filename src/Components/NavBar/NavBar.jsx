import React from 'react';
import styles from './NavBar.module.css';
import { Roboto } from 'next/font/google';

const roboto = Roboto ({
  subsets: ['latin'],
  weight: ['400','700']
})

const NavBar = () => {
  return (
    <nav className={styles.navBarContainer}>
      <div className={ styles.navBar}>
        <a href="#">HOME</a> 
        <a href="#about">ABOUT</a>
        <a href="#projects" >PROJECTS</a> 
        <a href="#contact">CONTACT</a> 
      </div>
    </nav>
  )
}

export default NavBar