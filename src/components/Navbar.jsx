import { ChefHat, Sun, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-200 px-5 md:px-10">

      {/* Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold"
        >
          <ChefHat size={30} strokeWidth={2.2} />

          <span className="text-white">
            ChefMate{" "}
            <span className="text-orange-500">
              AI
            </span>
          </span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-2 text-[15px]">

          <li>
            <Link
              to="/"
              className="text-orange-500 font-medium border-b-2 border-orange-500 rounded-none"
            >
              Home
            </Link>
          </li>

          <li>
            <Link to="/best-recipes">
              Best Recipes
            </Link>
          </li>

          <li>
            <a>
              Saved
            </a>
          </li>

          <li>
            <Link to="/about">
              About
            </Link>
          </li>

        </ul>
      </div>

      {/* Right */}
      <div className="flex-1 justify-end gap-4">

        <button className="btn btn-ghost btn-circle">
          <Sun size={20} />
        </button>

        <Link
          to="/"
          className="btn bg-orange-500 hover:bg-orange-600 text-white border-none rounded-lg px-5"
        >
          <Sparkles size={17} />
          Generate Recipes
        </Link>

      </div>

    </div>
  );
};

export default Navbar;