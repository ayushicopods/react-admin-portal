import React, { useCallback, useState } from "react";
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Sector,
} from "recharts";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./stats-card.css";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";
  return (
    <g>
      <text
        x={cx}
        y={cy - 10}
        dy={8}
        textAnchor="middle"
        fill="#adb5bd"
        style={{ fontWeight: "900" }}
        fontSize={25}
      >
        {payload.name}
      </text>
      <text
        x={cx}
        y={cy + 10}
        dy={8}
        textAnchor="middle"
        fill="#adb5bd"
        fontSize={15}
      >
        {payload.value}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 5}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius - 4}
        outerRadius={innerRadius - 2}
        fill={fill}
      />
    </g>
  );
};

const StatsCard = ({
  heading,
  chartdetails,
  statsColor,
  chartLabel,
  chartType,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="statsCardContainer">
      <div className="statsCardWrapper">
        <div className="cardHeader">
          <h4>{heading}</h4>
          <button>
            <MoreVertIcon sx={{ color: "#98a6ad", fontSize: "20px" }} />
          </button>
        </div>
        <div className="statsCardContent">
          <ResponsiveContainer width="100%" height={280}>
            {chartType && (
              <PieChart>
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{
                    fontSize: "0.625rem",
                    bottom: "0",
                    left: "0.625rem",
                  }}
                />
                <Pie
                  data={chartdetails}
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  dataKey="value"
                  innerRadius={80}
                  outerRadius={115}
                  fill="#aaa"
                  legendType="circle"
                  onMouseEnter={onPieEnter}
                >
                  {chartdetails.map(
                    (entry, index) =>
                      statsColor && (
                        <>
                          <Cell
                            fill={statsColor[index % statsColor?.length]}
                            stroke={statsColor[index % statsColor?.length]}
                          />
                        </>
                      )
                  )}
                </Pie>
              </PieChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
