import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav  className={styles.navBar}>
    <a href="#home">HOME</a> 
    <a href="#about">ABOUT</a>
    <a href="#projects" >PROJECTS</a> 
    <a href="#contact">CONTACT</a> 
    </nav>
  )
}

export default NavBar