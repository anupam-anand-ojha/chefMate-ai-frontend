import {ChefHat,Sun, Moon, Sparkles} from "lucide-react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-200 px-5 md:px-10">

      {/* Logo */}
      <div className="flex-1">
        <a className="flex items-center gap-2 text-2xl font-bold">
          <ChefHat size={30} strokeWidth={2.2} />

          <span className="text-slate-800">
            ChefMate{" "}
            <span className="text-orange-500">AI</span>
          </span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex">
        <ul className="menu menu-horizontal gap-2 text-[15px]">
          <li>
            <a className="text-orange-500 font-medium border-b-2 border-orange-500 rounded-none">
              Home
            </a>
          </li>

          <li>
            <a>My Recipes</a>
          </li>

          <li>
            <a>Saved</a>
          </li>

          <li>
            <a>About</a>
          </li>
        </ul>
      </div>

      {/* Right */}
      <div className="flex-1 justify-end gap-4">

        <button className="btn btn-ghost btn-circle">
          <Sun size={20} />
        </button>

        <button className="btn bg-orange-500 hover:bg-orange-600 text-white border-none rounded-lg px-5">
          <Sparkles size={17} />
          Generate Recipes
        </button>

      </div>
    </div>
  );
};

export default Navbar;