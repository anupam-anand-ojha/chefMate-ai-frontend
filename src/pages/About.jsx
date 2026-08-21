import {
  Sparkles,
  ChefHat,
  Brain,
  Clock,
  Heart,
  Utensils,
} from "lucide-react";

import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen bg-[#fffdf9]">

      <Navbar />

      <main className="max-w-7xl mx-auto px-5 md:px-10 py-12">

        {/* Hero */}
        <section className="text-center max-w-3xl mx-auto">

          <div className="badge badge-outline border-orange-300 text-orange-500 px-4 py-4 mb-5">
            <Sparkles size={14} />
            About ChefMate AI
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Turn your ingredients into
            <span className="block text-orange-500">
              delicious recipes.
            </span>
          </h1>

          <p className="text-gray-500 text-lg leading-8 mt-6">
            ChefMate AI is a smart recipe assistant that helps
            you discover what you can cook with the ingredients
            already available in your kitchen.
          </p>

        </section>

        {/* What is ChefMate */}
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          <div>

            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-5">
              <ChefHat size={28} />
            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              What is ChefMate?
            </h2>

            <p className="text-gray-500 leading-8 mt-5">
              ChefMate is an AI-powered recipe generator designed
              to make everyday cooking easier. Simply enter the
              ingredients you have, choose your preferences, and
              let AI create personalized recipe suggestions for you.
            </p>

            <p className="text-gray-500 leading-8 mt-4">
              Whether you want a quick dinner, an easy breakfast,
              or something new to try, ChefMate helps you turn
              simple ingredients into something delicious.
            </p>

          </div>

          <div className="card bg-base-100 border border-base-200 shadow-sm">

            <div className="card-body p-8">

              <div className="text-center text-8xl mb-5">
                👨‍🍳
              </div>

              <h3 className="text-2xl font-bold text-center text-slate-800">
                Your AI Kitchen Assistant
              </h3>

              <p className="text-center text-gray-500 mt-3">
                Less thinking. Less searching. More cooking.
              </p>

            </div>

          </div>

        </section>

        {/* Features */}
        <section className="mt-24">

          <div className="text-center mb-10">

            <h2 className="text-3xl font-bold text-slate-800">
              Why ChefMate?
            </h2>

            <p className="text-gray-500 mt-3">
              Built to make your cooking experience simpler.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

            <div className="card bg-base-100 border border-base-200">
              <div className="card-body">

                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
                  <Brain size={24} />
                </div>

                <h3 className="font-bold text-lg mt-3">
                  AI Powered
                </h3>

                <p className="text-gray-500 text-sm leading-6">
                  Get personalized recipes generated according
                  to your ingredients and preferences.
                </p>

              </div>
            </div>

            <div className="card bg-base-100 border border-base-200">
              <div className="card-body">

                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                  <Utensils size={24} />
                </div>

                <h3 className="font-bold text-lg mt-3">
                  Ingredient Based
                </h3>

                <p className="text-gray-500 text-sm leading-6">
                  Tell ChefMate what you already have instead
                  of searching for recipes one by one.
                </p>

              </div>
            </div>

            <div className="card bg-base-100 border border-base-200">
              <div className="card-body">

                <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center">
                  <Clock size={24} />
                </div>

                <h3 className="font-bold text-lg mt-3">
                  Quick & Easy
                </h3>

                <p className="text-gray-500 text-sm leading-6">
                  Find recipes that match your preferred
                  difficulty and cooking time.
                </p>

              </div>
            </div>

            <div className="card bg-base-100 border border-base-200">
              <div className="card-body">

                <div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center">
                  <Heart size={24} />
                </div>

                <h3 className="font-bold text-lg mt-3">
                  Made for You
                </h3>

                <p className="text-gray-500 text-sm leading-6">
                  Every recipe suggestion is tailored to what
                  you want to cook.
                </p>

              </div>
            </div>

          </div>

        </section>

        {/* How it works */}
        <section className="mt-24">

          <div className="text-center mb-10">

            <div className="badge badge-outline border-green-300 text-green-600 px-4 py-4 mb-4">
              Simple Process
            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              How ChefMate Works
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                1
              </div>

              <h3 className="font-bold text-lg mt-5">
                Add Ingredients
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-6">
                Enter the ingredients you already have
                in your kitchen.
              </p>

            </div>

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                2
              </div>

              <h3 className="font-bold text-lg mt-5">
                Choose Preferences
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-6">
                Select your cuisine, meal type and
                preferred difficulty.
              </p>

            </div>

            <div className="text-center">

              <div className="w-14 h-14 mx-auto rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
                3
              </div>

              <h3 className="font-bold text-lg mt-5">
                Get Your Recipe
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-6">
                ChefMate AI generates recipes specifically
                for your ingredients.
              </p>

            </div>

          </div>

        </section>

        {/* Bottom CTA */}
        <section className="mt-24">

          <div className="rounded-3xl bg-orange-50 border border-orange-100 p-8 md:p-12 text-center">

            <div className="text-5xl mb-5">
              🍳
            </div>

            <h2 className="text-3xl font-bold text-slate-800">
              Ready to cook something delicious?
            </h2>

            <p className="text-gray-500 mt-3">
              Open your kitchen, add your ingredients,
              and let ChefMate do the rest.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
};

export default About;