import { Card, LineChart, Title } from "@tremor/react";
import { sleepChartData } from "../constants/constantData";

const LinesChart = () => {
  return (
    <Card className="flex flex-col items-center font-mono mt-5 mb-10">
      <Title className="font-semibold">نمودار خواب</Title>
      <LineChart
        showAnimation="true"
        className="h-72 mt-4"
        data={sleepChartData}
        index="date"
        categories={["id-1", "id-2", "id-3", "id-4"]}
        colors={["yellow", "blue", "green", "fuchsia"]}
        yAxisWidth={30}
        connectNulls={true}
      />
    </Card>
  );
};

export default LinesChart;
