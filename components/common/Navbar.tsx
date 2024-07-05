import { PAGE_URL } from "@/constants/router";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RiMovie2Line } from "react-icons/ri";

function Navbar() {
  const currentPath = usePathname();
  return (
    <ul className="flex flex-row justify-center align-middle h-15 p-5 bg-light-white">
      <Link href={PAGE_URL.BASE}>
        <div  className="flex flex-row gap-2 items-center">
        <RiMovie2Line size={30}/>
        <p className="text-lg font-semibold tracking-widest">MOVIE</p>
        </div>
      </Link>
      <div className="flex flex-row justify-end align-middle flex-1 gap-4">
        <li>
          <Link href={PAGE_URL.BASE} className={currentPath === PAGE_URL.BASE ? "font-bold text-cherry-pink no-underline" : "flex font-medium text-default-text no-underline"}>메인 화면</Link>
        </li>
        <li>
          <Link href={PAGE_URL.MOVIES} className={currentPath === PAGE_URL.MOVIES ? "font-bold text-cherry-pink no-underline" : "flex font-medium text-default-text no-underline"}>나의 영화</Link>
        </li>
        <li>
          <Link href={PAGE_URL.POST} className={currentPath === PAGE_URL.POST ? "font-bold text-cherry-pink no-underline" : "flex font-medium text-default-text no-underline"}>포스팅</Link>
        </li>
      </div>
    </ul>
  );
}

export default Navbar;
