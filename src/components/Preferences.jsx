const Preferences = ({
  cuisine,
  setCuisine,
  mealType,
  setMealType,
  difficulty,
  setDifficulty,
}) => {
  return (
    <div className="border-t border-base-200 mt-7 pt-6">

      <h2 className="text-xl font-semibold mb-5">
        Preferences
        <span className="text-sm font-normal text-gray-400 ml-1">
          (Optional)
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        <label className="form-control">
          <div className="label">
            <span className="label-text font-medium">
              Cuisine
            </span>
          </div>

          <select
            className="select select-bordered"
            value={cuisine}
            onChange={(e) => setCuisine(e.target.value)}
          >
            <option value="">Any Cuisine</option>
            <option value="Indian">Indian</option>
            <option value="Italian">Italian</option>
            <option value="Chinese">Chinese</option>
            <option value="Mexican">Mexican</option>
            <option value="American">American</option>
          </select>
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text font-medium">
              Meal Type
            </span>
          </div>

          <select
            className="select select-bordered"
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
          >
            <option value="">Any Meal</option>
            <option value="Breakfast">Breakfast</option>
            <option value="Lunch">Lunch</option>
            <option value="Dinner">Dinner</option>
            <option value="Snack">Snack</option>
          </select>
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text font-medium">
              Difficulty
            </span>
          </div>

          <select
            className="select select-bordered"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="">Any Difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </label>

      </div>
    </div>
  );
};

export default Preferences;