import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav id='home' className={styles.navBar}>
    <a href="#home">HOME</a> 
    <a href="#about">ABOUT</a>
    <a href="">PROJECTS</a> 
    <a href="">CONTACT</a> 
    </nav>
  )
}

export default NavBar