import Image from "next/image";
import { Inter } from "next/font/google";
import HeaderTile from "@/Components/HeaderTile/HeaderTile";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <HeaderTile/>
    </main>
  );
}
