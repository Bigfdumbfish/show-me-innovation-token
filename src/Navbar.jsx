import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold hover:text-blue-400">
          SMI Token
        </Link>
        <div className="space-x-4">
          <Link to="/airdrop" className="hover:text-blue-300">Airdrop</Link>
          <Link to="/dao" className="hover:text-blue-300">DAO</Link>
          <Link to="/transparency" className="hover:text-blue-300">Transparency</Link>
          <Link to="/apply" className="hover:text-blue-300">Apply</Link>
        </div>
      </div>
    </nav>
  );
}