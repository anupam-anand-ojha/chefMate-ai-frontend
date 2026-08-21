import { Clock, ChefHat, Sparkles } from "lucide-react";
import Navbar from "../components/Navbar";

const BestRecipes = () => {
  return (
    <div className="min-h-screen bg-[#fffdf9]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-5 md:px-10 py-12">

        {/* Header */}
        <section className="text-center">

          <div className="badge badge-outline border-orange-300 text-orange-500 px-4 py-4 mb-5">
            <Sparkles size={14} />
            ChefMate Collection
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Best Recipes
          </h1>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Explore delicious recipes created with ChefMate AI.
            Find something tasty to cook today.
          </p>

        </section>

        {/* Empty State */}
        <section className="flex justify-center mt-16">

          <div className="text-center max-w-md">

            <div className="text-7xl mb-6">
              🍳
            </div>

            <h2 className="text-2xl font-bold text-slate-800">
              No recipes yet
            </h2>

            <p className="text-gray-500 mt-3">
              Generate some recipes from your ingredients
              and they'll appear here.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
};

export default BestRecipes;