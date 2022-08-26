import React from "react";
import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import downArrow from "../images/icon-down.svg";
import upArrow from "../images/icon-up.svg";

const BottomDashboardCard = ({ bottomData }) => {
  return (
    <>
      {bottomData.map((data) => (
        <div key={data.id} className="BottomDashboardCard">
          <div className="top">
            <p>{data.description}</p>
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
          </div>
          <div className="bottom">
            <h2>{data.value}</h2>
            <div className={data.arrow ? "change positive" : "change negative"}>
              <img src={data.arrow ? upArrow : downArrow} alt="" />
              <p>{data.change}%</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default BottomDashboardCard;
