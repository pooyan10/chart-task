import {
  BadgeDelta,
  Card,
  Flex,
  Grid,
  Metric,
  ProgressBar,
  Text,
} from "@tremor/react";
import { Link } from "react-router-dom";
import { e2p } from "../helper/helper";
import { kpiData } from "../constants/constantData";

export default function KpiCardGrid() {
  return (
    <Grid numItemsMd={2} numItemsLg={3} className="gap-8 mb-12 mt-10 mx-8">
      {kpiData.map((item) => (
        <Link key={item.title} to={item.path}>
          <Card className="hover:scale-105 hover:shadow-xl transition-all">
            <Flex alignItems="start">
              <div className="truncate flex flex-col items-start">
                <Text className="font-bold text-xl font-mono mb-4 ">
                  {item.title}
                </Text>
                <Metric className="truncate"> {e2p(item.metric)} </Metric>
              </div>
              <BadgeDelta
                className="font-mono gap-2 "
                deltaType={item.deltaType}
              >
                {e2p(item.delta)}
              </BadgeDelta>
            </Flex>
            <Flex className="mt-4 space-x-2">
              <Text className="truncate">{`${e2p(item.progress)}% (${e2p(
                item.metric
              )})`}</Text>
              <Text className="truncate">{e2p(item.target)}</Text>
            </Flex>
            <ProgressBar
              showAnimation="true"
              value={item.progress}
              className="mt-2"
            />
          </Card>
        </Link>
      ))}
    </Grid>
  );
}
