import { VictoryPie } from "victory-native";
import {
  ChartContainer,
  ConsumptionInfoContainer,
  TodayConsumption,
  DollarSign,
  Estimate,
  LegendContainer,
  LegendItem,
  LegendItemColor,
  LegendItemTitle,
} from "./styles";
import { useEffect, useState } from "react";
import axios from "axios";

let todayConsumption = 20.45;
let goal = 90;
let percentage = (todayConsumption * 100) / goal;
let estimate = 200.0;

const data = [
  { x: " ", y: 35 },
  { x: "", y: 45 },
];

interface Metrics {
  interval: string;
  value: number;
  accumulated: number;
  predicted: boolean;
}

export function GoalChart() {
  const [metrics, setMetrics] = useState<Metrics[]>([]);

  useEffect(() => {
    axios.get("http://192.168.0.209:5000/metrics/monthly").then((response) => {
      setMetrics(response.data.monthly_metrics);
    });
  }, []);

  const actualCostComsuption = metrics.findLast(
    (metrics) => !metrics.predicted
  );

  const costEstimate = metrics.findLast((metrics) => metrics.predicted);

  return (
    <ChartContainer>
      <VictoryPie
        colorScale={["#FFBD14", "#FFF"]}
        innerRadius={180}
        data={[
          { x: "", y: percentage },
          { x: "", y: 100 - percentage },
                     ]}
        style={{
          labels: {
            fill: "#D8E3EC",
          },
        }}
      />
      <ConsumptionInfoContainer>
        <DollarSign>R$:</DollarSign>
        <TodayConsumption>
          {actualCostComsuption?.accumulated.toFixed(2).replace(".", ",")}
        </TodayConsumption>
        <Estimate>
          Estimativa: R${" "}
          {costEstimate?.accumulated.toFixed(2).replace(".", ",")}
        </Estimate>
      </ConsumptionInfoContainer>
      <LegendContainer>
        <LegendItem>
          <LegendItemColor variant="yellow" />
          <LegendItemTitle>Consumido</LegendItemTitle>
        </LegendItem>
        <LegendItem>
          <LegendItemColor variant="white" />
          <LegendItemTitle>Disponível</LegendItemTitle>
        </LegendItem>
      </LegendContainer>
    </ChartContainer>
  );
}
