import {Link} from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-gray-200 px-10 py-4">
      <div className="flex justify-between gap-3">
        <h1 className="text-2xl font-bold text-gray-800">TaskFlow</h1>
        <nav>
          <ul className="flex  gap-3">
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <Link
              to="/login"
              className="border-blue-700 rounded-2xl text-white bg-blue-700 px-2 py-2 hover:bg-blue-900">
                Login
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
