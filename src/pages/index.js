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
        <meta name="viewport" content="width=device-width, initial-scale=0.9" />
        <meta property="og: title" content="Sankets Portfolio" />
        <meta property="og: type" content="website" />
        <meta property="og:image" content="https://sanket-deb.github.io/portfolio-website/images/bitmoji_wave.png" />
        <meta property="og:image: secure_url" content="https://sanket-deb.github.io/portfolio-website/images/bitmoji_wave.png" />
        <meta property="og:image: type" content="image/png" />
        <meta property="og:image: width" content="400" />
        <meta property="og:image: height" content="300" />
        <meta property="og:image: alt" content="Sankets Portfolio" />
        <meta property="og:url" content=" portfolio-website/ " />
        <link rel="icon" href="./images/favicon-32x32.png" /> 
    </Head>
    <AutoPlayAudio src={'./audio/mujix.mp3'}/>
      <Profile />
      <About/>
      <Project />
      <Contact />
    </>
  );
}
