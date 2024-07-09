import React from 'react';
import styles from './NavBar.module.css';

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