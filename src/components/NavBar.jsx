import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex justify-center items-center">
      <ul className="flex flex-row my-8">
        <li>
          <Link to="/" className="ml-8 hover:text-blue-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/signin" className="ml-8 hover:text-blue-500">
            LogIn
          </Link>
        </li>
        <li>
          <Link to="/signup" className="ml-8 hover:text-blue-500">
            SingUp
          </Link>
        </li>
        <li>
          <Link to="/todo" className="ml-8 hover:text-blue-500">
            Todo
          </Link>
        </li>
      </ul>
    </nav>
  );
}
