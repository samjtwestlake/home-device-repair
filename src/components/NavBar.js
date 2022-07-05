import { Link } from "react-router-dom";

const NavBar = ({

}) => {
  return (
    <nav>
      <div className="p-3 flex justify-end text-xl">
        <ul className="flex gap-4">
          <li>
            <Link to="/services" className="hover:text-blue-400">
              Services
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-blue-400">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;