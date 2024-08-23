import { useEffect, useState } from "react";
import { ChartContainer } from "./styles";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
} from "victory-native";
import axios from "axios";

const labelStyles = {
  fontFamily: "Seravek",
  opacity: 0.5,
};

interface DailyMetric {
  interval: string;
  value: number;
}

export function DailyChart() {
  const [dailyMetrics, setDailyMetrics] = useState<DailyMetric[]>([]);

  useEffect(() => {
    axios.get("http://192.168.0.90:5000/metrics/daily").then((response) => {
      setDailyMetrics(response.data.daily_metrics);
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
          {dailyMetrics.map((metrics) => {
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
