import styles from './Skills.module.css';
import { Zilla_Slab } from 'next/font/google';


const zilla=Zilla_Slab({
    weight:'400',
    style:'normal',
    subsets:['latin'],
    display:'swap'
})

import React from 'react'

const Skills = () => {
  return (
    <div className={zilla.className +' '+ styles.skillsContainer}>
        <span className={styles.skillsInfo}>HTML</span>
        <span className={styles.skillsInfo}>CSS</span>
        <span className={styles.skillsInfo}>Javascript</span>
        <span className={styles.skillsInfo}>Next.js</span>
        <span className={styles.skillsInfo}>React</span>
        <span className={styles.skillsInfo}>Git</span>
        <span className={styles.skillsInfo}>GitHub</span>
        <span className={styles.skillsInfo}>Vercel</span>
    </div>
  )
}

export default Skills