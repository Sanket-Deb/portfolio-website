import React, { useEffect } from 'react';
import styles from './Intro.module.css'
import Typewriter from 'typewriter-effect';
import { Zilla_Slab } from 'next/font/google';
import Socials from '../SocialMediaBar/Socials';

const zilla=Zilla_Slab({
    weight:'400',
    style:'normal',
    subsets:['latin'],
    display:'swap'
})

const Intro = ({isLocked, setIsLocked, lockSoundRef}) => {
  return (
    <div className={styles.intro}>
        <h3>Hello There!</h3><br/>
        <div className={zilla.className +" "+ styles.zilla}>
          <Typewriter 
              options={{
              strings: ["Hi! I'm Sanket, a rookie code wrangler. Still leraning, but hey, Rome wasn't built in a day, and neither was this website! Join me as I conquer bugs and tinker with tech one line of code at a time."],
              autoStart: true,
              loop: false,
              deleteSpeed:Infinity,
              delay: 30,
              }}
          />
        </div>
        
    
        <div style={{ margin: '10px 0' }}>
        <Socials isLocked={isLocked} setIsLocked={setIsLocked} lockSoundRef={lockSoundRef} />
        </div>

    </div>
  )
}

export default Intro