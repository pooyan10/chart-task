export const data = [
  {
    id: 1,
    production: [45, 11, 56, 49],
    wastage: [67.5, 32.2, 30.7, 24.1],
    sleep: "1,200,000",
    date: "low",
    starttime: "8:30",
    endtime: "14:00",
    color: "yellow",
  },
  {
    id: 2,
    production: [25, 32, 24, 54],
    wastage: [32.9, 55.3, 67.1, 76.4],
    sleep: "1,600,000",
    date: "low",
    starttime: "9:00",
    endtime: "18:00",
    color: "blue",
  },
  {
    id: 3,
    production: [65, 32, 47, 39],
    wastage: [24.1, 32, 70.7, 66.4],
    sleep: "4,100,000",
    date: "low",
    starttime: "11:15",
    endtime: "17:00 ",
    color: "green",
  },
  {
    id: 4,
    production: [24, 55, 29, 78],
    wastage: [65.5, 12.4, 55.5, 34.6],
    sleep: "4,100,000",
    date: "low",
    starttime: "10:15",
    endtime: "16:00 ",
    color: "fuchsia",
  },
];

export const chartProduction = [
  {
    day: "یک شنبه",
    "id-1": data[0].production[0],
    "id-2": data[1].production[0],
    "id-3": data[2].production[0],
    "id-4": data[3].production[0],
  },
  {
    day: "دو شنبه",
    "id-1": data[0].production[1],
    "id-2": data[1].production[1],
    "id-3": data[2].production[1],
    "id-4": data[3].production[1],
  },
  {
    day: "سه شنبه",
    "id-1": data[0].production[2],
    "id-2": data[1].production[2],
    "id-3": data[2].production[2],
    "id-4": data[3].production[2],
  },
  {
    day: "چهار شنبه",
    "id-1": data[0].production[3],
    "id-2": data[1].production[3],
    "id-3": data[2].production[3],
    "id-4": data[3].production[3],
  },
];

export const wastageData = [
  {
    id: "id-1",
    wastage: data[0].wastage[2],
  },
  {
    id: "id-2",
    wastage: data[1].wastage[2],
  },
  {
    id: "id-3",
    wastage: data[2].wastage[2],
  },
  {
    id: "id-4",
    wastage: data[3].wastage[2],
  },
];

export const sleepChartData = [
  {
    date: "شنبه",
    "id-1": 58,
    "id-2": 87,
    "id-3": 66,
    "id-4": 45,
  },
  {
    date: "یک شنبه",
    "id-1": 45,
    "id-2": 78,
    "id-3": 44,
    "id-4": 32,
  },
  {
    date: "دو شنبه",
    "id-1": 13,
    "id-2": 22,
    "id-3": 45,
    "id-4": 32,
  },
  {
    date: "سه شنبه",
    "id-1": 55,
    "id-2": 44,
    "id-3": 54,
    "id-4": 52,
  },
  {
    date: "چهار شنبه",
    "id-1": 12,
    "id-2": 43,
    "id-3": 22,
    "id-4": 55,
  },

  {
    date: "پنج شنبه",
    "id-1": 43,
    "id-2": 77,
    "id-3": 66,
    "id-4": 52,
  },
];

export const kpiData = [
  {
    title: "تولید",
    metric: " 120,699 تومان",
    progress: 15.9,
    target: "   تومان 800,000",
    delta: "13.2%",
    deltaType: "moderateIncrease",
    path: "production-chart",
  },
  {
    title: "ضایعات",
    metric: "224  کیلو گرم",
    progress: 36.5,
    target: " 125,000",
    delta: "23.9%",
    deltaType: "increase",
    path: "wastage-chart",
  },
  {
    title: "خواب",
    metric: " 1,072 ساعت",
    progress: 53.6,
    target: "2,000",
    delta: "10.1%",
    deltaType: "moderateDecrease",
    path: "sleep-chart",
  },
];
