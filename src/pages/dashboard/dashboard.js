import React from "react";
import "./dashboard.css";
import KeyPointIndicator from "./KeyPointIndicator";
import StatsCard from "./StatsCard";

const Dashboard = () => {
  const data02 = [
    { name: "C1", value: 58 },
    { name: "C2", value: 42 },
  ];

  const data01 = [
    { name: "C1", value: 80 },
    { name: "C2", value: 20 },
  ];

  const dailySalesStats = [
    { name: "In-store", value: 30 },
    { name: "Download", value: 20 },
    { name: "Mail-Order", value: 12 },
  ];
  const COLORS = ["#ee5254", "#f8b9ba"];
  const StatsColor = ["#5c6bba", "#fd8ccb", "#3eb9de"];

  const keyPointIndicatorDetails = [
    {
      heading: "Total Revenue",
      chartdetails: data02,
      colors: COLORS,
      number: "256",
      chartLabel: "58",
    },
    {
      heading: "Sales Analytics",
      number: "8451",
      progress: 80,
    },
    {
      heading: "Statistics",
      chartdetails: data01,
      colors: COLORS,
      number: "4569",
      chartLabel: "80",
    },
    {
      heading: "Daily Sales",
      number: "158",
      progress: 80,
    },
  ];

  const statsCardDetails = [
    {
      heading: "Daily Sales",
      chartdetails: dailySalesStats,
      statsColor: StatsColor,
      number: "256",
      chartLabel: "58",
      chartType: "pie",
    },

    {
      heading: "Statistics",
      chartdetails: data01,
      statsColor: StatsColor,
      number: "4569",
      chartLabel: "80",
      chartType: "bar",
    },
  ];
  return (
    <div className="dashboardContainer">
      <div className="gutterGapAndDisplay">
        {keyPointIndicatorDetails.map((item) => {
          return <KeyPointIndicator {...item} />;
        })}
      </div>
      <div class="gutterGapAndDisplay">
        {statsCardDetails.map((item) => {
          return <StatsCard {...item} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
