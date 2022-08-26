import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import downArrow from "../images/icon-down.svg";
import upArrow from "../images/icon-up.svg";

const TopDashboardCard = ({ topData }) => {
  const topColor = "TopColor";

  return (
    <>
      {topData.map((data) => (
        <div key={data.id} className="TopDashboardCard">
          <div
            className={`${topColor} ${
              data.icon === "fb"
                ? "facebook"
                : data.icon === "tw"
                ? "twitter"
                : data.icon === "ig"
                ? "instagram"
                : data.icon === "yt"
                ? "youtube"
                : null
            }`}
          ></div>
          <div className="top">
            <img
              src={
                data.icon === "fb"
                  ? facebook
                  : data.icon === "tw"
                  ? twitter
                  : data.icon === "ig"
                  ? instagram
                  : data.icon === "yt"
                  ? youtube
                  : null
              }
              alt=""
            />
            <p>{data.username}</p>
          </div>
          <div className="center">
            <h2>{data.followers}</h2>
            <h4>{data.subscribers ? "SUBSCRIBERS" : "FOLLOWERS"}</h4>
          </div>
          <div className={data.arrow ? "bottom positive" : "bottom negative"}>
            <img src={data.arrow ? upArrow : downArrow} alt="" />
            <p>{data.change} Today</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopDashboardCard;
