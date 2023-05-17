import style from "styles/app.module.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const DashboardPage = (): JSX.Element => {
  const [data, setData] = useState([
    { name: "Orange", oc: 0 },
    { name: "Blue", bc: 0 },
  ]);

  useEffect(() => {
    const socket = io("http://localhost:3003", {
      autoConnect: true,
    });

    socket.on("connect", () => {});
    socket.on("disconnect", () => {
      setData([
        { name: "Orange", oc: 0 },
        { name: "Blue", bc: 0 },
      ]);
    });

    socket.on("chart", (data) => {
      setData([...data]);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("chart");
    };
  });

  return (
    <main className={style.main}>
      <header className={style.header}>
        <h1 className={style.headerTitle}>SEC Test Dashboard</h1>
      </header>

      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="oc" fill="#FF6000" />
        <Bar dataKey="bc" fill="#5F9DF7" />
      </BarChart>
    </main>
  );
};

export default DashboardPage;
