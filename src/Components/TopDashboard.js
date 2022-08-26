import React from "react";
import TopDashboardCard from "./TopDashboardCard";

const TopDashboard = ({ topData }) => {
  return (
    <div className="TopDashboard">
      <TopDashboardCard topData={topData} />
    </div>
  );
};

export default TopDashboard;
