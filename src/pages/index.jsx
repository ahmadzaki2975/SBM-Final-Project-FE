import Image from "next/image";
import { Inter } from 'next/font/google'
import {BiHomeAlt2} from 'react-icons/bi'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex">
      <aside className={`bg-gradient-to-b from-[#2A58D0] via-[#5740B4] to-[#4291B4] w-[270px] fixed h-screen ${inter.className}`}>
        <h1 className="text-[#f2f2f2] font-semibold text-[36px] mt-20 text-center underline underline-4 underline-white">Project SBM</h1>
        <ul className="text-[36px] flex flex-col //gap-[87px] items-center //bg-white fill-transparent">
          <div className="w-full bg-[#f5f5f5] absolute h-[20%]"></div>
          <li className="flex items-center gap-8 z-[2] py-5 !bg-gradient-to-b from-[#2A58D0] via-[#5740B4] to-[#4291B4] !bg-clip-text text-transparent">
            Home
          </li>
          <li className="flex items-center gap-8 z-[2] py-5 !bg-gradient-to-b from-[#2A58D0] via-[#5740B4] to-[#4291B4] !bg-clip-text text-transparent">
            History
          </li>
          <li className="flex items-center gap-8 z-[2] py-5 !bg-gradient-to-b from-[#2A58D0] via-[#5740B4] to-[#4291B4] !bg-clip-text text-transparent">
            Settings
          </li>
          <li className="flex items-center gap-8 z-[2] py-5 !bg-gradient-to-b from-[#2A58D0] via-[#5740B4] to-[#4291B4] !bg-clip-text text-transparent">
            About
          </li>
        </ul>
      </aside>
    </main>
  );
}
