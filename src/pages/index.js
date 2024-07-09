import AutoPlayAudio from "@/Components/Audio/AutoPlayAudio";
import Profile from "@/Components/Profile/Profile";
import About from "@/Components/About/About";
import Contact from "@/Components/ContactNew/Contact";
import Project from "@/Components/ProjectDisplay/Project";




export default function Home() {
  return (
    <>
    <AutoPlayAudio src={'./audio/mujix.mp3'}/>
      <Profile />
      <About/>
      <Project />
      <Contact />
    </>
  );
}
