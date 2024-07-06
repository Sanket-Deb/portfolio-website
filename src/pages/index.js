import AutoPlayAudio from "@/Components/Audio/AutoPlayAudio";
import Profile from "@/Components/Profile/Profile";
import About from "@/Components/About/About";
import ContactP from "@/Components/ContactNew/ContactP";




export default function Home() {
  return (
    <>
    <AutoPlayAudio src={'./audio/mujix.mp3'}/>
      <Profile />
      <About/>
      <ContactP />
    </>
  );
}
