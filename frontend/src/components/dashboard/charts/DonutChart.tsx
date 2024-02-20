"use client";

import React, { FC } from "react";
import { DonutChart, Legend } from "@tremor/react";

interface DonutChartExampleProps {
  // Add your prop types here
}

const sales = [
  {
    name: "New York",
    sales: 980,
  },
  {
    name: "London",
    sales: 456,
  },
  {
    name: "Hong Kong",
    sales: 390,
  },
  {
    name: "San Francisco",
    sales: 240,
  },
  {
    name: "Singapore",
    sales: 190,
  },
];

const valueFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

const DonutChartExample: FC<DonutChartExampleProps> = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center space-x-6">
        <DonutChart
          data={sales}
          category="sales"
          index="name"
          valueFormatter={valueFormatter}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="aspect-square h-60"
        />
        <Legend
          categories={[
            "New York",
            "London",
            "Hong Kong",
            "San Francisco",
            "Singapore",
          ]}
          colors={["blue", "cyan", "indigo", "violet", "fuchsia"]}
          className="max-w-xs mt-4"
        />
      </div>
    </>
  );
};

export default DonutChartExample;
