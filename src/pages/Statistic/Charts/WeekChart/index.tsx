import { useEffect, useState } from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
} from "victory-native";
import axios from "axios";
import { ChartContainer } from "./styles";

const labelStyles = {
  fontFamily: "Seravek",
  opacity: 0.5,
};

interface WeeklyMetric {
  interval: string;
  value: number;
}

export function WeeklyChart() {
  const [weeklyMetrics, setWeeklyMetrics] = useState<WeeklyMetric[]>([]);

  useEffect(() => {
    axios.get("http://192.168.0.90:5000/metrics/weekly").then((response) => {
      setWeeklyMetrics(response.data.weekly_metrics);
    });
  }, []);

  return (
    <ChartContainer>
      <VictoryChart
        width={390}
        padding={{ top: 50, left: 40, right: 58, bottom: 80 }}
      >
        <VictoryGroup
          animate={{
            easing: "bounce",
          }}
        >
          {weeklyMetrics.map((metrics) => {
            return (
              <VictoryBar
                key={metrics.interval}
                style={{
                  data: {
                    fill: "#FFC01E",
                    opacity: 0.8,
                    width: 30,
                    borderRadius: 50,
                  },
                  labels: labelStyles,
                }}
                data={[
                  {
                    id: metrics.interval,
                    value: metrics.value,
                  },
                ]}
                x="id"
                y="value"
                cornerRadius={5}
              />
            );
          })}
        </VictoryGroup>
        <VictoryAxis
          crossAxis
          standalone={true}
          fixLabelOverlap={true}
          style={{
            axis: { strokeWidth: 0 },
            tickLabels: labelStyles,
          }}
        ></VictoryAxis>
      </VictoryChart>
    </ChartContainer>
  );
}
