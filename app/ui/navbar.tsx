import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex max-md:justify-between gap-2">
      <Link href="/">
        <span>Home</span>
      </Link>
      <Link href="/projects">
        <span>Projects</span>
      </Link>
      <Link href="/about">
        <span>About</span>
      </Link>
    </nav>
  );
}
