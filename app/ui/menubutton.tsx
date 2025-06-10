"use client";
import { BiMenuAltRight } from "react-icons/bi";

export default function MenuButton() {
  function handleClick() {
    console.log("click");
    const menu = document.getElementById("nav-menu");
    menu?.classList.remove("hidden");
  }

  return (
    <button onClick={() => handleClick()} className="cursor-pointer">
      <BiMenuAltRight className="size-10 relative -top-2" />
    </button>
  );
}
