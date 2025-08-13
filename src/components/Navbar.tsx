
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 p-4 text-white backdrop-blur-sm grainy-effect">
      <ul className="flex justify-around">
        <li>
          <Link href="/">
            <p className="hover:text-yellow-400">Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p className="hover:text-yellow-400">About Me</p>
          </Link>
        </li>
        <li>
          <Link href="/art">
            <p className="hover:text-yellow-400">Art</p>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <p className="hover:text-yellow-400">Projects</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p className="hover:text-yellow-400">Contact</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
