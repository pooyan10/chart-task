import { Card, DonutChart, Title } from "@tremor/react";
import { wastageData } from "../constants/constantData";
import { e2p } from "../helper/helper";

const valueFormatter = (number) =>
  `${e2p(new Intl.NumberFormat("us").format(number).toString())} کیلوگرم `;

const DonutsChart = () => (
  <Card className="flex flex-col items-center font-mono mt-5 mb-10">
    <Title className="font-semibold">نمودار ضایعات </Title>
    <DonutChart
      className="mt-6"
      showAnimation="true"
      data={wastageData}
      category="wastage"
      index="id"
      valueFormatter={valueFormatter}
      colors={["yellow", "blue", "green", "fuchsia"]}
    />
  </Card>
);

export default DonutsChart;
