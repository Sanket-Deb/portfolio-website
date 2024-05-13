import React from 'react'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
    <a href="">HOME</a> |
    <a href="">PROJECTS</a> |
    <a href="">CONTACT</a> 
    </nav>
  )
}

export default NavBar