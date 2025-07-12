🌍 REST Countries API with Color Theme Switcher
A Frontend Mentor challenge solution to build a responsive, accessible, and theme-switchable UI that consumes the REST Countries V2 API. Built using React 17, React Router v6, and Tailwind CSS v3.


🚀 Live Demo
🔗 Live Site

📌 Table of Contents
Overview

Features

Built With

Getting Started

Project Structure

Learnings

Author

Acknowledgments

📖 Overview
This single-page application allows users to browse and explore information about countries from around the world. Data is fetched from the REST Countries V2 API. Users can:

View all countries

Search countries by name

Filter by region

View details of a selected country

Navigate to border countries

Toggle between light and dark mode

✅ Features
🌍 Fetch data from REST Countries API

🔍 Real-time search functionality

🌎 Filter countries by region

🧭 Country detail page with nested border country navigation

🌙 Light / Dark theme toggle

📱 Fully responsive mobile-first layout

⚡ Fast and lightweight SPA

🛠 Built With
React 17

React Router v6

Tailwind CSS v3

React Icons

Fetch API for data requests

📁 Project Structure
bash
Copy
Edit
src/
├── components/         # Reusable UI components
├── pages/              # Main page views (Home, Detail)
├── assets/             # Static assets (flags, icons if needed)
├── styles/             # Tailwind + global CSS
├── App.js              # Routes and layout
├── index.js            # App entry point
└── context/            # Theme context provider
⚙️ Getting Started
Prerequisites
Node.js ≥ 14

npm or yarn

Install & Run
bash
Copy
Edit
# Clone repo
git clone https://github.com/yourusername/rest-countries-api.git
cd rest-countries-api

# Install dependencies
npm install

# Start dev server
npm start
🧪 Scripts
bash
Copy
Edit
npm start       # Start dev server
npm run build   # Build for production
npm test        # Run tests (if implemented)
📚 Learnings
Through this challenge, I gained experience with:

React Router DOM v6 and nested routing

Theme management using React Context

Tailwind CSS utility-first workflow

Dynamic UI updates using fetch

Improving UI accessibility and responsiveness

👤 Author
Frontend Mentor – @your-frontendmentor

GitHub – @yourusername

Twitter – @yourhandle

🙌 Acknowledgments
Frontend Mentor for the awesome challenge

REST Countries API

Tailwind CSS & React community for helpful docs and tools
