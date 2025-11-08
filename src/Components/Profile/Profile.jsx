import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Profile.module.css";
import Intro from "../Intro/Intro";
import ProfileImg from "../../../public/images/bitmojiNew.png";

const Profile = () => {
  const [audio, setAudio] = useState(false);
  const [isLocked, setIsLocked] = useState(true);
  const lockSoundRef = useRef(null);
  useEffect(() => {
    const playButton = document.getElementById("audio-play");
    const pauseButton = document.getElementById("audio-pause");

    document
      .getElementById("profileImg")
      .addEventListener("mouseover", function (event) {
        // Your code to be executed when mouse is hovered over the element
        document.getElementById("clickMe").style.top = "427px";
      });

    if (audio) {
      if (playButton) playButton.click();
      document
        .querySelectorAll("#aurora")
        .forEach((element) => element.classList.add("lightOn"));
      document.getElementById("clickMe").textContent = "Go back 👉👉";
      // console.log('kuch toh bolo 😼:','https://youtu.be/49Wk6PW88Zg?si=0ey_iyqWqTBEoF6Y');
    } else {
      if (pauseButton) pauseButton.click();
      document
        .querySelectorAll("#aurora")
        .forEach((element) => element.classList.remove("lightOn"));
      document.getElementById("clickMe").style.top = "397px";
      document.getElementById("clickMe").style.zIndex = "1";
      setTimeout(() => {
        document.getElementById("clickMe").textContent =
          "Click Me for Magic 👆";
      }, 500);
    }
  }, [audio]);
  return (
    <>
      <div className={styles.profileContainer}>
        <button
          id="clickMe"
          className={styles.clickMe}
          onClick={() => {
            setAudio(!audio);
            setIsLocked(!isLocked);
            lockSoundRef.current.play();
          }}
        >
          Kyu nehi bol rahe ho 😒
        </button>
        <Image
          src={ProfileImg}
          height={500}
          width={500}
          alt="ProfilePic"
          id="profileImg"
        />
        <button
          id="phoneClickMe"
          className={styles.phoneClickMe}
          onClick={() => {
            setAudio(!audio);
            setIsLocked(!isLocked);
            lockSoundRef.current.play();
          }}
        >
          Surprise 🎉
        </button>
        <Intro
          isLocked={isLocked}
          setIsLocked={setIsLocked}
          lockSoundRef={lockSoundRef}
        />
      </div>
    </>
  );
};

export default Profile;
