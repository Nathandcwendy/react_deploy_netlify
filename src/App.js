import React from "react";
import Header from "./Components/Header";
import TopDashboard from "./Components/TopDashboard";
import SecondHeader from "./Components/SecondHeader";
import BottomDashboard from "./Components/BottomDashboard.js";
import { useState } from "react";
import "./index.css";

function App() {
  const [topData, setTopData] = useState([
    {
      id: 1,
      icon: "fb",
      username: "@nathanf",
      followers: 1987,
      subscribers: false,
      arrow: true,
      change: 12,
    },
    {
      id: 2,
      icon: "tw",
      username: "@nathanf",
      followers: 1044,
      subscribers: false,
      arrow: true,
      change: 99,
    },
    {
      id: 3,
      icon: "ig",
      username: "@realnathanf",
      followers: "11k",
      subscribers: false,
      arrow: true,
      change: 1099,
    },
    {
      id: 4,
      icon: "yt",
      username: "Nathan F.",
      followers: 8239,
      subscribers: true,
      arrow: false,
      change: 144,
    },
  ]);

  const [bottomData, setBottomData] = useState([
    {
      id: 1,
      icon: "fb",
      description: "Page Views",
      value: 87,
      arrow: true,
      change: 3,
    },
    {
      id: 2,
      icon: "fb",
      description: "Likes",
      value: 52,
      arrow: false,
      change: 2,
    },
    {
      id: 3,
      icon: "ig",
      description: "Likes",
      value: 5462,
      arrow: true,
      change: 2257,
    },
    {
      id: 4,
      icon: "ig",
      description: "Profile Views",
      value: "52k",
      arrow: true,
      change: 1375,
    },
    {
      id: 5,
      icon: "tw",
      description: "Retweets",
      value: 117,
      arrow: true,
      change: 303,
    },
    {
      id: 6,
      icon: "tw",
      description: "Likes",
      value: 507,
      arrow: true,
      change: 553,
    },
    {
      id: 7,
      icon: "yt",
      description: "Likes",
      value: 107,
      arrow: false,
      change: 19,
    },
    {
      id: 8,
      icon: "yt",
      description: "Total Views",
      value: 1407,
      arrow: false,
      change: 12,
    },
  ]);

  const [theme, setTheme] = useState(false);

  const handleChangeTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme ? "dark" : "light"}>
      <div className="content-container">
        <Header theme={theme} handleChangeTheme={handleChangeTheme} />
        <TopDashboard topData={topData} />
        <SecondHeader />
        <BottomDashboard bottomData={bottomData} />
      </div>
    </div>
  );
}

export default App;
