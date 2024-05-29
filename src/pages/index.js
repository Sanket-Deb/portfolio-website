import AutoPlayAudio from "@/Components/Audio/AutoPlayAudio";
import NavBar from "../Components/NavBar/NavBar";
import SplineApp from "../Components/SplineApp/SplineApp";
import Profile from "@/Components/Profile/Profile";




export default function Home() {
  return (
    <>
    <AutoPlayAudio src={'./audio/mujix.mp3'}/>
      <NavBar/>
      <Profile />
    </>
  );
}
