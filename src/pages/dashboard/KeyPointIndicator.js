import React from "react";
import { PieChart, Pie, Label, ResponsiveContainer, Cell } from "recharts";
import { Chip, LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./keypoint-indicator.css";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const KeyPointIndicator = ({
  heading,
  chartdetails,
  colors,
  number,
  progress,
  chartLabel,
}) => {
  return (
    <>
      {colors ? (
        <div className="cardContainer">
          <div className="cardWrapper">
            <div className="cardHeader">
              <h4>{heading}</h4>
              <button>
                <MoreVertIcon sx={{ color: "#98a6ad", fontSize: "20px" }} />
              </button>
            </div>
            <div className="cardContent">
              <ResponsiveContainer width="36%" height={80}>
                <PieChart>
                  <Pie
                    data={chartdetails}
                    dataKey="value"
                    innerRadius={25}
                    outerRadius={30}
                    fill="#aaa"
                  >
                    {chartdetails.map(
                      (entry, index) =>
                        colors && (
                          <Cell
                            fill={colors[index % colors?.length]}
                            stroke={colors[index % colors?.length]}
                          />
                        )
                    )}
                    <Label width={30} position="center">
                      {chartLabel}
                    </Label>
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="cardDetails">
                <h1>{number}</h1>
                <span>Revenue today</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cardContainer">
          <div className="cardWrapper salesAnalyticsWrapper">
            <div className="cardHeader">
              <h4>Sales Analytics</h4>
              <button>
                <MoreVertIcon sx={{ color: "#98a6ad", fontSize: "20px" }} />
              </button>
            </div>
            <div className="cardContent">
              <Chip
                icon={
                  <TrendingUpIcon sx={{ color: "#98a6ad", fontSize: "10px" }} />
                }
                size="small"
                label={"34%"}
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  padding: "5px 10px",
                }}
              />
              <div className="cardDetails">
                <h1>{number}</h1>
                <span>Revenue today</span>
              </div>
            </div>
            <div class="progressBar">
              <Box
                sx={{ width: "100%", color: "#10c469", borderRadius: "10px" }}
              >
                <LinearProgress
                  value={progress}
                  variant="determinate"
                  color="inherit"
                  sx={{
                    height: "0.313rem",
                    borderRadius: "0.625rem",
                  }}
                />
              </Box>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KeyPointIndicator;
