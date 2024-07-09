import React from 'react';
import styles from './Project.module.css';
import Image from 'next/image';
import { Zilla_Slab, Roboto } from 'next/font/google';
import DvrIcon from '@mui/icons-material/Dvr';
import GitHubIcon from '@mui/icons-material/GitHub';
import SocialsImg from '../../../public/images/project_socials.jpg';
import FrontendImg from '../../../public/images/project_frontend.jpg';
import DrowsinessImg from '../../../public/images/project_drowsiness.jpg';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


const zilla=Zilla_Slab({
    weight:'400',
    style:'normal',
    subsets:['latin'],
    display:'swap'
})


const Project = () => {
  return (
    <div id='projects' className={styles.ProjectContainer}>
        <div className={styles.PageTitle}>
            <h1>My<br/> Projects!</h1>
            <p className={zilla.className}>To get a good view and more visit <a href="https://github.com/Sanket-Deb" target="_blank" rel="noopener noreferrer">My Github</a></p>
        </div>
        <div className={styles.ProjectCard}>
            <div className={styles.ProjectImage}>
              <Image src={SocialsImg} height={400} width={400} alt="Driver Drowsiness Detection" id="DDD" />
            </div>
            <div className={zilla.className+" "+styles.ProjectDescription}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
            <div className={styles.ButtonContainer}>
            <button className={styles.ProjectControls}><SkipPreviousIcon/></button>
            <button className={styles.ProjectButtons}>Github<GitHubIcon style={{ marginLeft:'1rem' }} /></button>
            <button className={styles.ProjectButtons}>Go Live<DvrIcon style={{ marginLeft:'1rem' }} /></button>
            <button className={styles.ProjectControls}><SkipNextIcon/></button>
            </div>
            {/* <div className={styles.ProjectControls}>
              <button><SkipNextIcon/></button>
              <button><SkipPreviousIcon/></button>
            </div> */}
        </div>
   
    </div>
  )
}

export default Project