import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Text,
  Title,
} from "@tremor/react";

import { e2p } from "../helper/helper";
import { data } from "../constants/constantData";

const TableInfo = () => {
  return (
    <Card className="flex flex-col items-center w-screen mt-5">
      <Title className="font-bold font-mono"> جدول وضعیت روزانه</Title>
      <Table className="mt-5 shadow-lg w-full sm:w-[90%] md:px-8 pb-10 rounded-lg">
        <TableHead>
          <TableRow className="font-mono">
            <TableHeaderCell>id</TableHeaderCell>
            <TableHeaderCell> تولید </TableHeaderCell>
            <TableHeaderCell>ضایعات (kg) </TableHeaderCell>
            <TableHeaderCell>خواب</TableHeaderCell>
            <TableHeaderCell>ساعت شروع</TableHeaderCell>
            <TableHeaderCell>ساعت پایان</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody className="">
          {data.map((item) => (
            <TableRow
              className={`bg-${item.color}-200 hover:scale-105 transition-all duration-200 cursor-default text-xl`}
              key={item.id}
            >
              <TableCell>{e2p(item.id)}</TableCell>
              <TableCell>
                <Text className="font-semibold text-xl">
                  {e2p(item.production[2])}
                </Text>
              </TableCell>
              <TableCell>
                <Text className="text-[18px]">{e2p(item.wastage[2])}</Text>
              </TableCell>
              <TableCell>
                <Text className="text-[18px]">{e2p(item.sleep)}</Text>
              </TableCell>
              <TableCell>
                <Text className="text-[18px]">{e2p(item.starttime)}</Text>
              </TableCell>
              <TableCell>
                <Text className="text-[18px]">{e2p(item.endtime)}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default TableInfo;
