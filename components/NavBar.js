import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div className="p-3 flex justify-end text-xl">
        <ul className="flex gap-4">
          <li>
            <Link href="/services" className="hover:text-blue-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-blue-400">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/book" className="hover:text-blue-400">
              Book
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar;