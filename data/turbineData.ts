import { Turbine, TurbineFilterFormat } from "../src/models/models";

export const turbineData: Turbine[] = [
  {
    date: "2017-01-03 00:00",
    turbine_id: 1,
    Status: 25.7,
    variable: 10,
  },
  {
    date: "2017-01-03 02:30",
    turbine_id: 1,
    Status: 13.5,
    variable: 10,
  },
  {
    date: "2017-01-03 05:00",
    turbine_id: 1,
    Status: 95.48,
    variable: 10,
  },
  {
    date: "2017-01-03 07:40",
    turbine_id: 1,
    Status: 40.87,
    variable: 4,
  },
  {
    date: "2017-01-03 10:10",
    turbine_id: 1,
    Status: 60.7,
    variable: 4,
  },
  {
    date: "2017-01-03 12:40",
    turbine_id: 1,
    Status: 50.78,
    variable: 8,
  },
  {
    date: "2017-01-03 15:20",
    turbine_id: 1,
    Status: 70.7,
    variable: 14,
  },
];

export const turbinesIds: TurbineFilterFormat[] = [
  { turbine_id: 1, turbineLabel: "Turbine 1" },
  { turbine_id: 2, turbineLabel: "Turbine 2" },
  { turbine_id: 3, turbineLabel: "Turbine 3" },
  { turbine_id: 4, turbineLabel: "Turbine 4" },
  { turbine_id: 5, turbineLabel: "Turbine 5" },
  { turbine_id: 6, turbineLabel: "Turbine 6" },
];