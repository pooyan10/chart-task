import React from "react";
import { BarChart, Card, Title } from "@tremor/react";
import { chartProduction } from "../constants/constantData";
import { e2p } from "../helper/helper";

const valueFormatter = (number) =>
  ` ${e2p(new Intl.NumberFormat("us").format(number).toString())} تومان`;

const BarsChart = () => {
  return (
    <Card className="flex flex-col items-center font-mono mt-5 mb-10">
      <Title className="font-semibold">نمودار تولید روزانه</Title>
      <BarChart
        showAnimation="true"
        className="mt-6 text-lg"
        data={chartProduction}
        index="day"
        categories={["id-1", "id-2", "id-3", "id-4"]}
        colors={["yellow", "blue", "green", "fuchsia"]}
        valueFormatter={valueFormatter}
        yAxisWidth={48}
      />
    </Card>
  );
};
export default BarsChart;
