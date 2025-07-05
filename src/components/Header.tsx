import { NavLink } from "react-router-dom";
import headerBg from "../assets/ubpl-header.jpg";
import logo from "../assets/react.svg";
import redCarpet from "../assets/Red-Carpet.png";
import ubplBar from "../assets/anu-bar.jpg";

export default function Header() {
  return (
    <header className="w-full">
      {/* Top Banner with Background */}
      <div className="relative w-full h-[105px] lg:h-[115px] z-0">
        <img
          src={headerBg}
          alt="UBPL Header Background"
          className="absolute top-0 left-0 w-full h-full object-fit "
        />

        {/* Overlay content */}
        <div className="flex items-center justify-between h-full  px-6 py-4 relative z-10">
          {/* Left: Logo + Title */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="UBPL Logo" className="h-14 w-auto" />
            <h1 className="text-xl font-bold text-blue-800">
              Utishta Bharata Private Limited
            </h1>
          </div>

          {/* Right: Tagline Image */}
          <div className="text-right">
            <img src={redCarpet} alt="Red Carpet Tagline" className="h-auto " />
          </div>
        </div>
      </div>

    {/* Bottom Navigation Bar with Background Image */}
<nav className="relative w-full h-[25px] flex items-center justify-start px-2 text-xs  text-blue-900 font-bold overflow-hidden ">
  {/* Background Image */}
  <img
    src={ubplBar}
    alt="Nav Background"
    className="absolute top-0 left-0 w-full h-full object-cover"
  />

  {/* Navigation Links */}
  <NavLink
    to="/"
    className="hover:underline hover:text-amber-900 mr-3 z-10"
  >
    Home
  </NavLink>
  <NavLink
    to="/contact"
    className="hover:underline hover:text-amber-900 mr-3 z-10"
  >
    Contact Us
  </NavLink>
</nav>

    </header>
  );
}
