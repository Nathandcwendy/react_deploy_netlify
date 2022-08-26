import React from "react";
import BottomDashboardCard from "./BottomDashboardCard";

const BottomDashboard = ({ bottomData }) => {
  return (
    <div className="BottomDashboard">
      <BottomDashboardCard bottomData={bottomData} />
    </div>
  );
};

export default BottomDashboard;
