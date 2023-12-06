import { Route, Routes } from "react-router-dom";
import KpiCardGrid from "./components/KpiCards";
import TableInfo from "./components/TableInfo";
import BarsChart from "./components/‌BarChart";
import DonutsChart from "./components/DonutChart";
import TabsList from "./components/TabList";
import LinesChart from "./components/LineChart";

function App() {
  return (
    <>
      <KpiCardGrid />
      <TabsList />
      <Routes>
        <Route path="/" element={<TableInfo />} />
        <Route path="production-chart" element={<BarsChart />} />
        <Route path="wastage-chart" element={<DonutsChart />} />
        <Route path="sleep-chart" element={<LinesChart />} />
      </Routes>
    </>
  );
}

export default App;
