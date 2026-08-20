import { Plus, X } from "lucide-react";

const IngredientInput = ({
  ingredients,
  setIngredients,
  ingredient,
  setIngredient,
}) => {
  const addIngredient = () => {
    const value = ingredient.trim();

    if (!value) return;

    if (ingredients.includes(value)) {
      setIngredient("");
      return;
    }

    setIngredients([...ingredients, value]);
    setIngredient("");
  };

  const removeIngredient = (item) => {
    setIngredients(
      ingredients.filter((ingredient) => ingredient !== item)
    );
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Add your ingredients
      </h2>

      <div className="flex gap-3">
        <input
          type="text"
          placeholder="Type an ingredient and press Enter"
          className="input input-bordered flex-1"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addIngredient();
            }
          }}
        />

        <button
          onClick={addIngredient}
          className="btn bg-orange-500 hover:bg-orange-600 text-white border-none px-6"
        >
          <Plus size={18} />
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {ingredients.map((item) => (
          <div
            key={item}
            className="badge badge-lg bg-green-50 text-green-900 border-none py-4 px-3 gap-2"
          >
            {item}

            <button onClick={() => removeIngredient(item)}>
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IngredientInput;