import { useEffect, useState } from "react";
import { ChartContainer } from "./styles";
import { VictoryArea, VictoryAxis, VictoryChart } from "victory-native";
import axios from "axios";

const labelStyles = {
  fontFamily: "Seravek",
  opacity: 0.5,
};

interface MonthlyMetric {
  interval: string;
  value: number;
  accumulated: number;
  predicted: boolean;
}

export function MonthlyChart() {
  const [monthlyMetrics, setMonthlyMetrics] = useState<MonthlyMetric[]>([]);

  useEffect(() => {
    axios.get("http://192.168.0.209:5000/metrics/monthly").then((response) => {
      setMonthlyMetrics(response.data.monthly_metrics);
      console.log(response.data.monthly_metrics);
    });
  }, []);

  const filteredMonthlyMetrics = monthlyMetrics.map(
    ({ predicted, value, ...rest }) => rest
  );

  const monthlyComsuption = monthlyMetrics.filter(
    (metrics) => !metrics.predicted
  );

  const value = monthlyComsuption.map(({ value, predicted, ...rest }) => rest);

  return (
    <ChartContainer>
      <VictoryChart
        width={390}
        padding={{ top: 30, left: 50, right: 50, bottom: 80 }}
      >
        <VictoryArea
          data={filteredMonthlyMetrics}
          y="accumulated"
          style={{
            data: {
              fill: "#EFF7FE",
              opacity: 0.7,
              stroke: "#104972",
              strokeWidth: 0.8,
            },
          }}
        />
        <VictoryArea
          data={value}
          y="accumulated"
          style={{
            data: {
              fill: "#FBE9B8",
              opacity: 0.7,
              stroke: "#FFC01E",
              strokeWidth: 0.8,
            },
          }}
        />

        <VictoryAxis
          dependentAxis
          style={{
            axis: {
              strokeWidth: 0,
            },
            tickLabels: labelStyles,
          }}
        />
        <VictoryAxis
          crossAxis
          style={{
            axis: {
              strokeWidth: 0,
            },
            tickLabels: labelStyles,
          }}
          tickValues={[5, 10, 15, 20, 25, 30]}
        />
      </VictoryChart>
    </ChartContainer>
  );
}
