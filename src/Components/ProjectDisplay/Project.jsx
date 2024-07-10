import React, { useEffect, useState } from 'react';
import styles from './Project.module.css';
import Image from 'next/image';
import { Zilla_Slab, Roboto } from 'next/font/google';
import DvrIcon from '@mui/icons-material/Dvr';
import GitHubIcon from '@mui/icons-material/GitHub';
import ProjectImg from '../../../public/images/bitmoji_projectsNew2.png'
import SocialsImg from '../../../public/images/project_socialsNew2.jpg';
import FrontendImg from '../../../public/images/project_frontend.jpg';
import DrowsinessImg from '../../../public/images/project_drowsinessNew.jpg';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';


const zilla=Zilla_Slab({
    weight:'400',
    style:'normal',
    subsets:['latin'],
    display:'swap'
})

const projects =[
  {
    title: "Social Media Dashboard",
    image: SocialsImg,
    description: "A part of Frontend Mentor challenge, this is a responsive social media dashboard with a theme switcher using Next.js and styled-components.",
    repo: "https://github.com/Sanket-Deb/social-media-dashboard",
    live: "https://sanket-deb.github.io/social-media-dashboard/"
  },
  {
    title: "Foundational Frontend Projects",
    image: FrontendImg,
    description: "A collection of mini frontend projects designed to build a solid foundation and basics in web development. Includes projects like To-Do List, Stopwatch, Weather App,  and Tac Tic Toe, etc. Do checkout the live demos!!",
    repo: "https://github.com/Sanket-Deb/Mini-Frontend-Projects",
    live: "https://linktr.ee/sanketdeb"
  },
  {
    title: "Driver Drowsiness Detection",
    image: DrowsinessImg,
    description: "A research based project on Driver Drowsiness using Machine Learning techiniques, this includes 4 CNN models which had one custom architecture, one VGG19 model and two replicated CNN archietectures. Live Kaggle notebook links are in the repository.",
    repo: "https://github.com/Sanket-Deb/Driver-Drowsiness-Detection",
    live: "https://github.com/Sanket-Deb/Driver-Drowsiness-Detection"
  },
  {
    title: "Work in Progress...",
    image: ProjectImg,
    description: "Visit my GitHub to checkout more of my other projects 🫡",
    repo: "https://github.com/Sanket-Deb",
    live: "https://github.com/Sanket-Deb"
  }
]

const Project = () => {

  const[currentProjectIndex, setCurrentProjectIndex] = useState(0) //For project index
  const handleNextProject=()=>{
    setCurrentProjectIndex((prevIndex)=> (prevIndex + 1) % projects.length);
  };
  const handlePreviousProject=()=>{
    setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const currentProject = projects[currentProjectIndex];

  return (
    <div id='projects' className={styles.ProjectContainer}>
      <div className={styles.PageTitle}>
          <h3>My Projects!</h3>
          <p className={zilla.className}>
            To get a good view and more visit 
            <a href="https://github.com/Sanket-Deb" target="_blank" rel="noopener noreferrer"> My Github</a>
          </p>
        </div>
        <div className={styles.ProjectCard}>
          <div className={styles.ProjectImage}>
            <Image src={currentProject.image} height={400} width={400} alt="ProjectProfile" id="ProjectProfile" />
          </div>
          <div className={styles.ProjectTitle}>
            {currentProject.title}
          </div>
          <div className={zilla.className+" "+styles.ProjectDescription}>
            {currentProject.description}
          </div>
          <div className={styles.ButtonContainer}>
            <button className={styles.ProjectControls} onClick={handlePreviousProject}>
              <SkipPreviousIcon/>
            </button>
            <div className={styles.buttonsWrapper}>
              <a href={currentProject.repo} target="_blank" rel="noopener noreferrer">
                <button className={styles.ProjectButtons}>
                  Github <GitHubIcon className={styles.btnIcon} />
                </button>
              </a>
              <a href={currentProject.live} target="_blank" rel="noopener noreferrer">
                <button className={styles.ProjectButtons}>
                  Go Live<DvrIcon  className={styles.btnIcon}/>
                </button>
              </a> 
            </div>
            <button className={styles.ProjectControls} onClick={handleNextProject}>
              <SkipNextIcon/>
            </button>
          </div>
      </div>
    </div>
  )
}

export default Project