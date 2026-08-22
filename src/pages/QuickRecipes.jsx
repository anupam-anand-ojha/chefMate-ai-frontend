import {
  Clock,
  Zap,
  ChefHat,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";

const quickRecipes = [
  {
    id: 1,
    name: "Masala Omelette",
    description:
      "A quick and flavorful omelette packed with onions, tomatoes and spices.",
    time: "10 min",
    difficulty: "Easy",
    emoji: "🍳",
  },
  {
    id: 2,
    name: "Veg Sandwich",
    description:
      "Crispy and fresh vegetable sandwich perfect for a quick snack or breakfast.",
    time: "15 min",
    difficulty: "Easy",
    emoji: "🥪",
  },
  {
    id: 3,
    name: "Garlic Noodles",
    description:
      "Simple noodles tossed with garlic, vegetables and delicious sauces.",
    time: "20 min",
    difficulty: "Easy",
    emoji: "🍜",
  },
  {
    id: 4,
    name: "White Sauce Pasta",
    description:
      "Creamy pasta with vegetables and herbs that's quick and easy to prepare.",
    time: "25 min",
    difficulty: "Easy",
    emoji: "🍝",
  },
  {
    id: 5,
    name: "Paneer Wrap",
    description:
      "Spicy paneer wrapped with fresh vegetables and a creamy sauce.",
    time: "20 min",
    difficulty: "Easy",
    emoji: "🌯",
  },
  {
    id: 6,
    name: "Chocolate Pancakes",
    description:
      "Soft and fluffy chocolate pancakes for a quick and delicious breakfast.",
    time: "20 min",
    difficulty: "Easy",
    emoji: "🥞",
  },
];

const QuickRecipes = () => {
  return (
    <div className="min-h-screen bg-[#fffdf9]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-5 md:px-10 py-12">

        {/* Header */}
        <section className="text-center max-w-2xl mx-auto">

          <div className="badge badge-outline border-orange-300 text-orange-500 px-4 py-4 mb-5">
            <Zap size={14} />
            Quick & Easy
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Quick Recipes
          </h1>

          <p className="text-gray-500 text-lg mt-4 leading-7">
            Short on time? Try these delicious recipes that
            you can make in 30 minutes or less.
          </p>

        </section>

        {/* Recipe Cards */}
        <section className="mt-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {quickRecipes.map((recipe) => (

              <div
                key={recipe.id}
                className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow"
              >

                {/* Emoji */}
                <figure className="h-48 bg-orange-50">
                  <span className="text-7xl">
                    {recipe.emoji}
                  </span>
                </figure>

                <div className="card-body">

                  <h2 className="card-title text-xl text-slate-800">
                    {recipe.name}
                  </h2>

                  <p className="text-sm text-gray-500 leading-6">
                    {recipe.description}
                  </p>

                  {/* Info */}
                  <div className="flex gap-2 mt-3">

                    <div className="badge bg-orange-50 text-orange-600 border-none gap-1 px-3 py-3">
                      <Clock size={14} />
                      {recipe.time}
                    </div>

                    <div className="badge bg-green-50 text-green-600 border-none gap-1 px-3 py-3">
                      <ChefHat size={14} />
                      {recipe.difficulty}
                    </div>

                  </div>

                  {/* Button */}
                  <div className="card-actions justify-end mt-4">

                    <button className="btn btn-ghost text-orange-500 hover:bg-orange-50">
                      View Recipe
                      <ArrowRight size={17} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Bottom */}
        <section className="mt-16">

          <div className="rounded-3xl bg-orange-50 border border-orange-100 p-8 text-center">

            <div className="text-5xl mb-4">
              ⚡
            </div>

            <h2 className="text-2xl font-bold text-slate-800">
              Less time, more delicious food.
            </h2>

            <p className="text-gray-500 mt-2">
              Pick a recipe and get cooking!
            </p>

          </div>

        </section>

      </main>

    </div>
  );
};

export default QuickRecipes;