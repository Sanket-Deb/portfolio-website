import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from './Profile.module.css';
import Intro from '../Intro/Intro';

const Profile = () => {
    const [audio, setAudio] = useState(false)
    const img_src = '/images/bitmojii.png';
    useEffect(() => {
      const playButton = document.getElementById('audio-play');
      const pauseButton = document.getElementById('audio-pause');

      document.getElementById('profileImg').addEventListener('mouseover', function(event) {
        // Your code to be executed when mouse is hovered over the element
        document.getElementById('clickMe').style.left = '600px';
      });
      
      if (audio) {
        if (playButton) playButton.click();
        document.querySelectorAll('#aurora').forEach(element => element.classList.add('lightOn'));
        document.getElementById('clickMe').textContent = 'kuch toh bolo 😼';
        console.log('kuch toh bolo 😼:','https://youtu.be/49Wk6PW88Zg?si=0ey_iyqWqTBEoF6Y');
      } else {
        if (pauseButton) pauseButton.click();
        document.querySelectorAll('#aurora').forEach(element => element.classList.remove('lightOn'));
        document.getElementById('clickMe').style.left = '250px';
        setTimeout(()=>{
          document.getElementById('clickMe').textContent = 'Kyu nehi bol rahe ho 😒';
        },500)
      }
    }, [audio]);
  return (
    <>
  <div className="northern-lights">
    <div id="aurora"></div>
    <div id="aurora"></div>
    <div id="aurora"></div>
  </div>
    <div className={styles.pfp}>
      <button  id='clickMe' className={styles.clickMe} onClick={()=>{setAudio(!audio)}}>Kyu nehi bol rahe ho 😒</button>
        <Image src={img_src} height={500} width={500} alt="ProfilePic" id="profileImg"/>
        <Intro/>
    </div>
    </>
  )
}

export default Profile