import Link from "next/link";
import MenuButton from "@/app/ui/menubutton";

export default function Navbar() {
  return (
    <nav className="flex max-md:justify-between gap-2 bg-navbar p-4 fixed top-0 w-full h-14 md:sticky md:top-10 md:left-189 md:my-10 md:border-none md:rounded-2xl md:max-w-189">
      <Link href="/">Andrew Gremillion</Link>
      <div id="nav-menu" className="hidden md:block">
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
        <Link href="#blue">blue</Link>
      </div>
      <MenuButton />
    </nav>
  );
}
