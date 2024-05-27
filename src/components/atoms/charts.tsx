"use client";
import React from "react";
import { TEChart } from "tw-elements-react";

export default function ChartLine(): JSX.Element {
  return (
    <TEChart
      type="line"
      data={{
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        datasets: [
          {
            label: "User",
            data: [0, 0, 0, 1000, 2365, 3000, 0],
          },
        ],
      }}
    />
  );
}