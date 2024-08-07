import React from 'react'
import Image from 'next/image';
import styles from './About.module.css';
import { Zilla_Slab } from 'next/font/google';
import DownloadIcon from '@mui/icons-material/Download';
import aboutImg from '../../../public/images/bitmoji_about.png';

const zilla=Zilla_Slab({
    weight:'400',
    style:'normal',
    subsets:['latin'],
    display:'swap'
})

const About = () => {

  return (
    <>
    <div id='about' className={styles.AboutContainer}>
        <Image className={styles.abtImage} src={aboutImg} height={500} width={500} alt="AboutPic" id="aboutImg"  />
        <div  className={styles.About}>
            <h3>About Me!</h3>
            <span className={`${zilla.className} ${styles.aboutContent}`}>
                I am <span className={styles.highlight}>Sanket Deb</span> a fresh graduate in Computer and Communication Engineering from Manipal University Jaipur looking for opportunities to contribute and grow in technology. Currently, I am immersing myself in web development, mastering HTML, CSS, JavaScript and React... <br/> <span className={styles.highlight}>(All things frontend)</span> and gradually venturing into backend development. But why, right? Why am I trying to get into tech when there are many better and more experienced engineers out there (espesially now)? <br/>
                The answer is, <br/>
                <span className={styles.highlight}>I just love using tech as a user,</span> as a consumer of the end product, from Google to Instagram to ChatGPT and all the other such products out there. We are living in an era of rapid innovation and unparalleled creativity like never before, and my goal is to be a part of this revolution. Even though I might not be the best developer yet to be at the forefront of it all, still I want to be on the sidelines to witness these exciting advancements. <br/>
                <span className={styles.highlight}>Cannot wait to make my contibution</span>
            </span> 
            <a download href="/assets/SANKETDEB_CV.pdf" target="_blank" className={styles.DownloadBtn}>
                Download Resume!  
                <DownloadIcon />
            </a>
        </div>
    </div>
    </>
  )
}

export default About