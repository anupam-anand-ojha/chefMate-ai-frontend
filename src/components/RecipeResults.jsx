import { Sparkles } from "lucide-react";
import RecipeCard from "./RecipeCard";

const RecipeResults = ({ recipes }) => {
  if (!recipes || recipes.length === 0) {
    return null;
  }

  return (
    <section className="mt-16">

      <div className="text-center mb-8">

        <div className="badge badge-outline border-orange-300 text-orange-500 px-4 py-4 mb-4">
          <Sparkles size={14} />
          AI Generated
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
          Your Recipes
        </h2>

        <p className="text-gray-500 mt-2">
          Delicious recipes created from your ingredients
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
          />
        ))}

      </div>

    </section>
  );
};

export default RecipeResults;