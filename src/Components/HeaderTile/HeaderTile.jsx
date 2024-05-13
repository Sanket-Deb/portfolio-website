import React from 'react'
import styles from './HeaderTile.module.css'

const HeaderTile = () => {
  return (
    <nav className={styles.headerTile}>
    <a href="/html/">HOME</a> |
    <a href="/css/">PROJECTS</a> |
    <a href="/js/">CONTACT</a> 
    </nav>
  )
}

export default HeaderTile