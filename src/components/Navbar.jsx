import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const { pathname } = router;
  const [activePage, setActivePage] = useState("/");

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);
  return (
    <aside className="flex flex-col justify-center items-center bg-gradient-to-b from-[#2A58D0] via-[#5740B4] to-[#4291B4] w-[270px] min-h-screen font-inter">
      <h1 className="text-[#f2f2f2] font-semibold text-[36px] text-center underline underline-4 underline-white">
        Project SBM
      </h1>
      <ul className="mt-10 w-full relative text-[36px] flex flex-col //gap-[87px] items-center //bg-white fill-transparent">
        <div
          className={
            "bg-[#f5f5f5] absolute h-[25%] transition rounded-l-full w-[95%] right-0" +
            (activePage == "/history" ? " translate-y-[100%]" : "") +
            (activePage == "/settings" ? " translate-y-[200%]" : "") +
            (activePage == "/about" ? " translate-y-[300%]" : "")
          }
        ></div>
        <li
          className={
            "flex transition items-center gap-8 z-[2] py-5 !bg-gradient-to-b from-[#2A58D0] via-[#5740B4] to-[#4291B4] !bg-clip-text " +
            (activePage == "/" ? " text-transparent " : " text-[#f2f2f2] ")
          }
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={
            "flex transition items-center gap-8 z-[2] py-5 !bg-gradient-to-b from-[#2A58D0] via-[#5740B4] to-[#4291B4] !bg-clip-text" +
            (activePage == "/history" ? " text-transparent " : " text-[#f2f2f2] ")
          }
        >
          <Link href="/history">History</Link>
        </li>
        <li
          className={
            "flex transition items-center gap-8 z-[2] py-5 !bg-gradient-to-b from-[#2A58D0] via-[#5740B4] to-[#4291B4] !bg-clip-text" +
            (activePage == "/settings" ? " text-transparent " : " text-[#f2f2f2] ")
          }
        >
          <Link href="/settings">Settings</Link>
        </li>
        <li
          className={
            "flex transition items-center gap-8 z-[2] py-5 !bg-gradient-to-b from-[#2A58D0] via-[#5740B4] to-[#4291B4] !bg-clip-text" +
            (activePage == "/about" ? " text-transparent " : " text-[#f2f2f2] ")
          }
        >
          <Link href="/about">About</Link>
        </li>
      </ul>
      <p className="text-white text-[18px] mt-10">
        &copy; 2023
      </p>
    </aside>
  );
}
