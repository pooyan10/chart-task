import { Tab, TabGroup, TabList } from "@tremor/react";
import { Link } from "react-router-dom";

const TabsList = () => {
  return (
    <div className="mx-8 mb-2">
      <TabGroup onIndexChange>
        <TabList className="mt-8 gap-4">
          <Tab className="text-[19px] ">
            <Link to="/">
              <p className="">جدول وضعیت</p>
            </Link>
          </Tab>
          <Tab className="text-[19px] flex ">
            <Link to="/production-chart">
              <p className="">نمودار تولید</p>
            </Link>
          </Tab>
          <Tab className="text-[19px] flex ">
            <Link to="/wastage-chart">
              <p className="">نمودار ضایعات</p>
            </Link>
          </Tab>
          <Tab className="text-[19px] flex ">
            <Link to="/sleep-chart">
              <p className="">نمودار خواب</p>
            </Link>
          </Tab>
        </TabList>
      </TabGroup>
    </div>
  );
};

export default TabsList;
