export interface Turbine {
    date: string,
    turbine_id: number,
    Status: number,
    variable: number
}

export interface IndicatorBoxProps {
    color: string;
    tittle: string;
    value: number;
    simbol?: string;
  }

  export interface TurbineFilterFormat{
      turbine_id: number,
      turbineLabel: string
  }

 export interface Size {
    width: number | undefined;
    height: number | undefined;
  }