import { Clock, ChefHat, ArrowRight, Bookmark } from "lucide-react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow">

      {/* Image */}
      <figure className="h-48 bg-orange-50">
        <div className="text-7xl">
          🍛
        </div>
      </figure>

      <div className="card-body">

        <div className="flex items-start justify-between gap-3">

          <div>
            <h2 className="card-title text-xl text-slate-800">
              {recipe.name}
            </h2>

            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {recipe.description}
            </p>
          </div>

          <button className="btn btn-ghost btn-circle">
            <Bookmark size={19} />
          </button>

        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mt-4">

          <div className="badge bg-orange-50 text-orange-600 border-none gap-1 px-3 py-3">
            <Clock size={14} />
            {recipe.time}
          </div>

          <div className="badge bg-green-50 text-green-700 border-none gap-1 px-3 py-3">
            <ChefHat size={14} />
            {recipe.difficulty}
          </div>

        </div>

        <div className="card-actions justify-end mt-5">

          <button className="btn btn-ghost text-orange-500 hover:bg-orange-50">
            View Recipe
            <ArrowRight size={17} />
          </button>

        </div>

      </div>
    </div>
  );
};

export default RecipeCard;