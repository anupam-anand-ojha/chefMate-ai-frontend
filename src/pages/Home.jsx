import { useState } from "react";
import { Sparkles } from "lucide-react";

import Navbar from "../components/Navbar";
import IngredientInput from "../components/IngredientInput";
import Preferences from "../components/Preferences";
import FeatureBar from "../components/FeatureBar";
import RecipeResults from "../components/RecipeResults";

import { generateRecipes } from "../services/recipeApi";

const Home = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");

  const [cuisine, setCuisine] = useState("");
  const [mealType, setMealType] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerateRecipes = async () => {
    if (ingredients.length === 0) {
      setError("Please add at least one ingredient.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await generateRecipes({
        ingredients,
        cuisine,
        mealType,
        difficulty,
      });

      console.log("AI Response:", data);

      setRecipes(data.recipes || []);

    } catch (error) {
      console.error(error);

      setError(
        error.response?.data?.message ||
        "Something went wrong while generating recipes."
      );

    } finally {
      setLoading(false);
    }
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

            <div className="mt-10 flex items-center gap-4">
              <div className="text-6xl">🍅</div>
              <div className="text-5xl">🥬</div>
              <div className="text-6xl">🧄</div>
              <div className="text-5xl">🧅</div>
            </div>

          </div>

          {/* Generator */}
          <div className="card bg-base-100 border border-base-200 shadow-md">

            <div className="card-body p-6 md:p-8">

              <IngredientInput
                ingredients={ingredients}
                setIngredients={setIngredients}
                ingredient={ingredient}
                setIngredient={setIngredient}
              />

              <Preferences
                cuisine={cuisine}
                setCuisine={setCuisine}
                mealType={mealType}
                setMealType={setMealType}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
              />

              {error && (
                <div className="alert alert-error mt-5">
                  <span>{error}</span>
                </div>
              )}

              <button
                onClick={handleGenerateRecipes}
                disabled={loading}
                className="btn bg-orange-500 hover:bg-orange-600 text-white border-none w-full mt-6 text-base"
              >

                {loading ? (
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    ChefMate is cooking...
                  </>
                ) : (
                  <>
                    <Sparkles size={18} />
                    Generate Recipes
                  </>
                )}

              </button>

              <div className="text-center text-sm text-gray-400 mt-4">
                AI powered • Personalized • Quick & easy
              </div>

            </div>

          </div>

        </section>

        <FeatureBar />

        {/* Actual AI Results */}
        <RecipeResults recipes={recipes} />

      </main>

    </div>
  );
};

export default Home;