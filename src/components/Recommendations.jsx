import React from 'react';

function Recommendations({ weather }) {
  const temp = weather.main.temp;
  const main = weather.weather[0].main;

  let recommendation = "✅ Enjoy your day!";

  if (main === "Rain") recommendation = "☔ It's raining! Don’t forget your umbrella.";
  else if (temp < 10) recommendation = "🧥 It's cold! Wear warm clothes.";
  else if (temp > 30) recommendation = "🥵 It's hot! Stay hydrated and wear light clothes.";
  else recommendation = "😎 Weather looks great! Go out and enjoy!";

  return <div className="recommendation">🌈 {recommendation}</div>;
}

export default Recommendations;
