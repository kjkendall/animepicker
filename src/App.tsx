import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  // Your characters - you can change these later!
  const characters = [
    {
      id: 1,
      name: "Luna",
      description: "A brave warrior with moonlight powers",
      element: "Moon",
      image: "/character1.png", // or .jpg - whatever format you uploaded
      stats: { strength: 8, magic: 9, speed: 7 },
    },
    {
      id: 2,
      name: "Blaze",
      description: "A fiery dragon rider from the mountains",
      element: "Fire",
      image: "/character2.png",
      stats: { strength: 9, magic: 7, speed: 6 },
    },
    {
      id: 3,
      name: "Echo",
      description: "A mysterious shadow mage",
      element: "Shadow",
      image: "/character3.png",
      stats: { strength: 6, magic: 10, speed: 9 },
    },
    {
      id: 4,
      name: "Storm",
      description: "Controls lightning and thunder",
      element: "Lightning",
      image: "/character4.png",
      stats: { strength: 7, magic: 8, speed: 8 },
    },
    {
      id: 5,
      name: "Phoenix",
      description: "A legendary fire spirit reborn from ashes",
      element: "Fire",
      image: "/character5.png",
      stats: { strength: 8, magic: 10, speed: 8 },
    },
  ];

  // Blog posts
  const blogPosts = [
    {
      id: 1,
      title: "Welcome to My Dashboard",
      date: "2024-12-20",
      content:
        "Just launched my personal dashboard! It has a character picker and this blog section. Pretty excited about building more features.",
      tags: ["welcome", "coding"],
    },
    {
      id: 2,
      title: "Character Design Process",
      date: "2024-12-18",
      content:
        "Been working on creating unique characters for my picker. Each one has their own backstory and elemental powers. Luna is my favorite so far!",
      tags: ["characters", "design"],
    },
    {
      id: 3,
      title: "Learning React",
      date: "2024-12-15",
      content:
        "React is pretty cool once you get the hang of useState and components. Building this dashboard has been a great learning project.",
      tags: ["coding", "react"],
    },
  ];

  // Mood Weather data
  const moodWeather = [
    {
      mood: "Happy",
      emoji: "😊",
      weather: "Sunny",
      animation: "☀️",
      description: "Bright sunshine warms your spirit",
    },
    {
      mood: "Calm",
      emoji: "😌",
      weather: "Partly Cloudy",
      animation: "⛅",
      description: "Gentle clouds drift peacefully by",
    },
    {
      mood: "Energetic",
      emoji: "🤩",
      weather: "Windy",
      animation: "💨",
      description: "Fresh winds carry your enthusiasm",
    },
    {
      mood: "Sad",
      emoji: "😢",
      weather: "Rainy",
      animation: "🌧️",
      description: "Soft rain matches your feelings",
    },
    {
      mood: "Angry",
      emoji: "😠",
      weather: "Stormy",
      animation: "⛈️",
      description: "Thunder rumbles with intensity",
    },
    {
      mood: "Dreamy",
      emoji: "😴",
      weather: "Foggy",
      animation: "🌫️",
      description: "Misty fog creates a dreamlike atmosphere",
    },
    {
      mood: "Excited",
      emoji: "🤗",
      weather: "Lightning",
      animation: "⚡",
      description: "Electric energy fills the air",
    },
    {
      mood: "Peaceful",
      emoji: "🥰",
      weather: "Clear Night",
      animation: "🌙",
      description: "Starlit skies bring tranquility",
    },
  ];

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const pickRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    setCurrentCharacter(characters[randomIndex]);
  };

  const selectMood = (moodData) => {
    setCurrentWeather(moodData);
  };

  return (
    <div className={isDark ? "App dark" : "App light"}>
      <header>
        <h1>My Personal Dashboard</h1>
        <button onClick={toggleTheme}>
          {isDark ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>
      <section className="hero">
        <h2>Welcome to My Creative Universe</h2>
        <p>
          Discover unique characters from my imagination and follow my creative
          journey. Use the character picker to meet magical beings with their
          own stories, powers, and personalities. Check out my blog for updates
          on character designs, worldbuilding, and creative projects.
        </p>
        <div className="hero-features">
          <div className="feature">
            <span>🎲</span>
            <span>Random Character Generator</span>
          </div>
          <div className="feature">
            <span>📝</span>
            <span>Creative Blog</span>
          </div>
          <div className="feature">
            <span>🌙</span>
            <span>Dark/Light Mode</span>
          </div>
        </div>
      </section>
      <main>
        <section className="character-picker">
          <h2>Character Picker</h2>
          <button onClick={pickRandomCharacter} className="pick-button">
            🎲 Pick Random Character
          </button>

          {currentCharacter && (
            <div className="character-card">
              <img src={currentCharacter.image} alt={currentCharacter.name} />
              <h3>{currentCharacter.name}</h3>
              <p>{currentCharacter.description}</p>
              <div className="element">Element: {currentCharacter.element}</div>
              <div className="stats">
                <div>⚔️ Strength: {currentCharacter.stats.strength}/10</div>
                <div>✨ Magic: {currentCharacter.stats.magic}/10</div>
                <div>⚡ Speed: {currentCharacter.stats.speed}/10</div>
              </div>
            </div>
          )}
        </section>

        <section className="mood-weather">
          <h2>Mood Weather</h2>
          <p>How are you feeling today?</p>

          <div className="mood-buttons">
            {moodWeather.map((mood) => (
              <button
                key={mood.mood}
                onClick={() => selectMood(mood)}
                className="mood-button"
              >
                {mood.emoji} {mood.mood}
              </button>
            ))}
          </div>

          {currentWeather && (
            <div className="weather-display">
              <div className="weather-animation">
                {currentWeather.animation}
              </div>
              <h3>{currentWeather.weather}</h3>
              <p>{currentWeather.description}</p>
            </div>
          )}
        </section>

        <section className="blog">
          <h2>My Blog</h2>
          <div className="blog-posts">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-post">
                <h3>{post.title}</h3>
                <div className="blog-date">{post.date}</div>
                <p>{post.content}</p>
                <div className="blog-tags">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      (
      <div className={isDark ? "App dark" : "App light"}>
        <header>{/* your existing header code */}</header>

        <section className="hero">{/* your existing hero code */}</section>

        <main>{/* your existing main code */}</main>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Made by Kyra Kendall</h3>
              <p>Built with React, JavaScript, CSS & lots of creativity ✨</p>
            </div>

            <div className="footer-links">
              <a href="mailto:kykendall81@gmail.com" className="footer-link">
                📧 Email
              </a>
              <a
                href="https://kyraknew.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                🌐 Portfolio
              </a>
              <a
                href="https://github.com/kjkendall"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                💻 GitHub
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 Kyra Kendall. All rights reserved.</p>
          </div>
        </footer>
      </div>
      );
    </div>
  );
}
