const Preferences = () => {
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

          <select className="select select-bordered">
            <option>Indian</option>
            <option>Italian</option>
            <option>Chinese</option>
            <option>Mexican</option>
            <option>American</option>
          </select>
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text font-medium">
              Meal Type
            </span>
          </div>

          <select className="select select-bordered">
            <option>Breakfast</option>
            <option>Lunch</option>
            <option>Dinner</option>
            <option>Snack</option>
          </select>
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text font-medium">
              Difficulty
            </span>
          </div>

          <select className="select select-bordered">
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </label>

      </div>

    </div>
  );
};

export default Preferences;