import {
  ArrowLeft,
  Clock,
  ChefHat,
  Check,
  Bookmark,
  Sparkles,
} from "lucide-react";

const RecipeDetails = ({ recipe, onBack }) => {
  return (
    <div className="min-h-screen bg-[#fffdf9]">

      <div className="navbar bg-base-100 border-b border-base-200 px-5 md:px-10">

        <div className="flex-1">
          <button
            onClick={onBack}
            className="btn btn-ghost gap-2"
          >
            <ArrowLeft size={18} />
            Back to Recipes
          </button>
        </div>

        <button className="btn btn-ghost btn-circle">
          <Bookmark size={20} />
        </button>

      </div>

      <main className="max-w-5xl mx-auto px-5 py-10">

        {/* Header */}

        <div className="text-center">

          <div className="badge badge-outline border-orange-300 text-orange-500 px-4 py-4 mb-5">
            <Sparkles size={14} />
            AI Generated Recipe
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            {recipe.name}
          </h1>

          <p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-7">
            {recipe.description}
          </p>

          <div className="flex justify-center gap-3 mt-6">

            <div className="badge bg-orange-50 text-orange-600 border-none px-4 py-4 gap-2">
              <Clock size={16} />
              {recipe.time}
            </div>

            <div className="badge bg-green-50 text-green-700 border-none px-4 py-4 gap-2">
              <ChefHat size={16} />
              {recipe.difficulty}
            </div>

          </div>

        </div>

        {/* Content */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          {/* Ingredients */}

          <div className="card bg-base-100 border border-base-200 shadow-sm h-fit">

            <div className="card-body">

              <h2 className="card-title text-xl">
                Ingredients
              </h2>

              <div className="divider my-1" />

              <ul className="space-y-3">

                {recipe.ingredients?.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-600"
                  >

                    <div className="w-6 h-6 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                      <Check size={14} />
                    </div>

                    <span>{ingredient}</span>

                  </li>
                ))}

              </ul>

            </div>

          </div>

          {/* Steps */}

          <div className="md:col-span-2">

            <h2 className="text-2xl font-bold text-slate-800">
              Cooking Instructions
            </h2>

            <p className="text-gray-500 mt-1">
              Follow these simple steps to prepare your recipe.
            </p>

            <div className="mt-6 space-y-5">

              {recipe.steps?.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-4"
                >

                  <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold shrink-0">
                    {index + 1}
                  </div>

                  <div className="card bg-base-100 border border-base-200 shadow-sm flex-1">
                    <div className="card-body p-5">
                      <p className="text-gray-600 leading-7">
                        {step}
                      </p>
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default RecipeDetails;