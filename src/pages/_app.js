import "@/styles/globals.css";
import { Roboto } from 'next/font/google';
import NavBar from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";

const roboto = Roboto ({
  subsets: ['latin'],
  weight: ['400','700']
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <NavBar/>
    <main id="main" className={roboto.className}>
       <Component {...pageProps}/>
    </main>
    <Footer />
    </>
  );
}
