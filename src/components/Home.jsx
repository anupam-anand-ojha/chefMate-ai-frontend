import {
  Sparkles,
  ArrowRight,
  Leaf
} from "lucide-react";

import Navbar from "../components/Navbar";

const Home = () => {

  const generateRecipes = () => {
    console.log("Generate recipes");
  };

  return (
    <div className="min-h-screen bg-[#fffdf9]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-5 md:px-10 py-10">

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left */}
          <div className="lg:pl-8">

            <div className="badge badge-outline border-green-400 text-green-700 px-4 py-4 mb-6">
              <Sparkles size={14} />
              AI Powered
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-slate-800">
              What's in your
              <span className="block text-orange-500">
                kitchen?
              </span>
            </h1>

            <p className="text-gray-500 text-lg leading-8 mt-6 max-w-md">
              Tell us what ingredients you have, and
              ChefMate AI will whip up delicious recipes
              just for you!
            </p>

            {/* Decorative food area */}
            <div className="mt-10 flex items-center gap-4">

              <div className="text-6xl">🍅</div>
              <div className="text-5xl">🥬</div>
              <div className="text-6xl">🧄</div>
              <div className="text-5xl">🧅</div>

            </div>

          </div>


        </section>

     

      </main>

    </div>
  );
};

export default Home;