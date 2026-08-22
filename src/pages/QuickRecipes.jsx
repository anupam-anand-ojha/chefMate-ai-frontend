import { useState } from "react";
import {
  Clock,
  Zap,
  ChefHat,
  ArrowRight,
} from "lucide-react";

import Navbar from "../components/Navbar";
import RecipeDetails from "./RecipeDetails";

const quickRecipes = [
  {
    id: 1,
    name: "Masala Omelette",
    description:
      "A quick and flavorful omelette packed with onions, tomatoes and spices.",
    time: "10 min",
    difficulty: "Easy",
    emoji: "🍳",
    ingredients: [
      "Eggs",
      "Onion",
      "Tomato",
      "Green Chilli",
      "Salt",
      "Pepper",
    ],
    steps: [
      "Crack the eggs into a bowl.",
      "Add chopped onion, tomato and green chilli.",
      "Add salt and pepper and mix well.",
      "Heat a pan and add the egg mixture.",
      "Cook both sides until golden and fully cooked.",
      "Serve hot.",
    ],
  },

  {
    id: 2,
    name: "Veg Sandwich",
    description:
      "Crispy and fresh vegetable sandwich perfect for a quick snack.",
    time: "15 min",
    difficulty: "Easy",
    emoji: "🥪",
    ingredients: [
      "Bread",
      "Onion",
      "Tomato",
      "Capsicum",
      "Cheese",
      "Butter",
    ],
    steps: [
      "Spread butter on the bread.",
      "Add sliced vegetables.",
      "Add cheese and season with salt and pepper.",
      "Place another bread slice on top.",
      "Toast until crispy and golden.",
      "Cut and serve hot.",
    ],
  },

  {
    id: 3,
    name: "Garlic Noodles",
    description:
      "Simple noodles tossed with garlic, vegetables and delicious sauces.",
    time: "20 min",
    difficulty: "Easy",
    emoji: "🍜",
    ingredients: [
      "Noodles",
      "Garlic",
      "Capsicum",
      "Soy Sauce",
      "Chilli Sauce",
    ],
    steps: [
      "Boil the noodles until cooked.",
      "Heat oil and sauté chopped garlic.",
      "Add vegetables and stir fry.",
      "Add soy sauce and chilli sauce.",
      "Add noodles and toss everything together.",
      "Serve hot.",
    ],
  },
];

const QuickRecipes = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  if (selectedRecipe) {
    return (
      <RecipeDetails
        recipe={selectedRecipe}
        onBack={() => setSelectedRecipe(null)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#fffdf9]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-5 md:px-10 py-12">

        <section className="text-center max-w-2xl mx-auto">

          <div className="badge badge-outline border-orange-300 text-orange-500 px-4 py-4 mb-5">
            <Zap size={14} />
            Quick & Easy
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Quick Recipes
          </h1>

          <p className="text-gray-500 text-lg mt-4">
            Delicious recipes that you can make in 30 minutes or less.
          </p>

        </section>

        <section className="mt-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {quickRecipes.map((recipe) => (

              <div
                key={recipe.id}
                className="card bg-base-100 border border-base-200 shadow-sm hover:shadow-md transition-shadow"
              >

                <figure className="h-48 bg-orange-50">
                  <span className="text-7xl">
                    {recipe.emoji}
                  </span>
                </figure>

                <div className="card-body">

                  <h2 className="card-title text-orange-400">
                    {recipe.name}
                  </h2>

                  <p className="text-sm text-white/70">
                    {recipe.description}
                  </p>

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

                  <div className="card-actions justify-end mt-4">

                    <button
                      onClick={() => setSelectedRecipe(recipe)}
                      className="btn btn-ghost text-orange-500 hover:bg-orange-50"
                    >
                      View Recipe
                      <ArrowRight size={17} />
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>

      </main>

    </div>
  );
};

export default QuickRecipes;