import { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Chart({ selectTo, selectFrom }) {
  const [filterChartData, setFilterChartData] = useState([]);
  const [chartData, setChartData] = useState([]);

  const chartInfo = () => {
    const options = {
      method: "GET",
      url: "https://twitch-game-popularity.p.rapidapi.com/game",
      params: { name: "League of Legends", year: "2020", month: "08" },
      headers: {
        "X-RapidAPI-Key": "00f3d8187amshdace09da0e255d9p10569ejsn9bbc72340cf5",
        "X-RapidAPI-Host": "twitch-game-popularity.p.rapidapi.com",
      },
    };
    axios
      .request(options)
      .then((res) => {
        console.log(res);
        const data = res?.data?.map((item) => {
          return {
            months: item.Month,
            peakViewers: item.Peak_channels,
          };
        });
        setChartData(data);
        setFilterChartData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    chartInfo();
  }, []);

  const handleFilter = () => {
    const filterData = chartData.filter((item) => {
      if (selectFrom && selectTo) {
        return (
          Number(item.months) >= Number(selectFrom) &&
          Number(item.months) <= Number(selectTo)
        );
      }
      if (selectFrom) {
        return Number(item.months) >= Number(selectFrom);
      }
      if (selectTo) {
        return Number(item.months) <= Number(selectTo);
      }
      return item;
    });
    setFilterChartData(filterData);
  };
  useEffect(() => {
    handleFilter();
  }, [selectFrom, selectTo]);
  return (
    <>
      <div className="ChartMainContainer">
        <ResponsiveContainer
          className="chart-container"
          width="100%"
          height=""
          aspect={3}
        >
          <LineChart
            width={500}
            height={500}
            data={filterChartData}
            margin={{
              top: 5,
              right: 30,
              left: 40,
              bottom: 30,
            }}
          >
            <CartesianGrid vertical="" horizontal="true" />
            <XAxis
              dy={30}
              dataKey="months"
              tickLine={false}
              axisLine={false}
              className="test"
            />
            <YAxis dx={-30} axisLine={false} tickLine={false} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="peakViewers"
              stroke="#FFAB00"
              activeDot={{ r: 8, stroke: "#F1F5FA" }}
              strokeWidth={5}
              strokeLinecap={"round"}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Chart;
