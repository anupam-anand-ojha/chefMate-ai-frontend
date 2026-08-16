# ChefMate AI

ChefMate AI is a recipe generator that helps you find recipes using the ingredients you already have.

Just enter your ingredients and the app sends them to the backend, where Google Gemini generates recipe suggestions. The generated recipes are then displayed in a simple and responsive UI.

## Features

* Generate recipes from available ingredients
* Get multiple recipe suggestions
* View ingredients and cooking steps
* Cooking time and difficulty level
* Responsive design
* Loading and error handling
* Backend API integration

## Tech Stack

* React
* Vite
* Tailwind CSS
* DaisyUI
* Axios
* JavaScript

## How It Works

```text
Enter Ingredients
       ↓
Frontend
       ↓
Backend API
       ↓
Google Gemini
       ↓
Generated Recipes
       ↓
Recipe Cards
```

## Getting Started

Clone the repository:

```bash
git clone <your-repository-url>
cd chefmate-frontend
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the development server:

```bash
npm run dev
```

The app will be available at:

```text
http://localhost:5173
```

## Project Structure

```text
src/
├── components/
├── pages/
├── services/
├── App.jsx
├── main.jsx
└── index.css
```

## Backend

The frontend uses a separate backend for recipe generation and Gemini API integration.

**Backend:** Node.js + Express + Google Gemini

## Environment Variable

| Variable       | Description     |
| -------------- | --------------- |
| `VITE_API_URL` | Backend API URL |

## Build

```bash
npm run build
```

## Future Plans

* Save favorite recipes
* Recipe history
* Dietary preferences
* Cuisine filters
* Nutrition information
* User authentication

## Author

**Anupam Anand Ojha**

Built with React and Google Gemini.
