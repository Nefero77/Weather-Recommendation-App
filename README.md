# 🌤️ Weather Recommendation App

A sleek and minimalist React app that displays current weather information for any city and gives helpful, fun recommendations based on temperature and conditions. Built with OpenWeatherMap API and deployed on Vercel.

## 🚀 Features

- 🔍 Search weather by city name
- 📡 Fetches real-time weather data from OpenWeatherMap
- 🎯 Intelligent recommendations based on weather 
- 💡 City autocomplete dropdown
- 📱 Responsive & clean UI with emojis and gradient background
- ☁️ Deployed on Vercel for fast performance

---

## 🧑‍💻 Live Demo

👉 [Click here to view the live app](https://weather-recommendation-app.vercel.app/https://weather-recommendation-app.vercel.app/)  


---

## 📦 Project Structure
```
src/
│
├── components/
│ ├── SearchBar.jsx
│ ├── WeatherCard.jsx
│ ├── Recommendations.jsx
│ └── Footer.jsx
│
├── services/
│ └── weatherAPI.js
│
├── data/
│ └── cities.json
│
├── styles/
│ ├── app.css
│ └── footer.css
│
├── App.jsx
└── index.js

yaml
Copy
Edit
```
---

## ⚙️ Setup Instructions

### 1. Clone the repo

```
git clone https://github.com/yourusername/weather-recommendation-app.git
cd weather-recommendation-app

```

2. Install dependencies
Copy
Edit
```
npm install
```

4. Get your API Key
Go to OpenWeatherMap

Sign up and get your API key

4. Create .env file
env
Copy
Edit
```
REACT_APP_WEATHER_KEY=your_openweathermap_api_key
```
6. Run the app locally
```
npm start
```

🌐 Deployment (Vercel)
Push your code to GitHub

Connect your GitHub repo to Vercel

In Vercel project settings:

Go to Environment Variables
```
REACT_APP_WEATHER_KEY = your_openweathermap_api_key
```

Click Deploy

✅ Recommendations Logic
The app gives dynamic advice based on weather:

🌧️ Raining → "Bring an umbrella"

❄️ Cold (< 10°C) → "Wear warm clothes"

🔥 Hot (> 30°C) → "Stay hydrated"

😎 Pleasant → "Enjoy your day"

✨ Technologies Used
React (Functional Components & Hooks)

Axios (API fetching)

OpenWeatherMap API

Vercel (Deployment)

CSS3 with modern UI styling
