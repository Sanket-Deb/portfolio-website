import AutoPlayAudio from "@/Components/Audio/AutoPlayAudio";
import Profile from "@/Components/Profile/Profile";
import About from "@/Components/About/About";
import Contact from "@/Components/ContactNew/Contact";
import Project from "@/Components/ProjectDisplay/Project";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
    <title>Sankets Portfolio</title>
    <meta name="description" content="Preferably open in a PC" />
    <link rel="icon" href="../../images/favicon-32x32.png" /> 
    </Head>
    <AutoPlayAudio src={'./audio/mujix.mp3'}/>
      <Profile />
      <About/>
      <Project />
      <Contact />
    </>
  );
}
