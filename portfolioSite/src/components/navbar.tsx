import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-8 p-4 bg-black text-white">
      <Link to="/" className="hover:text-pink-400">Home</Link>
      <Link to="/projects" className="hover:text-pink-400">Projects</Link>
    </nav>
  );
}