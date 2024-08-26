import { ScrollView } from "react-native";
import { DailyChart } from "./Charts/DailyChart";
import {
  StatisticContainer,
  ChartTitleContainer,
  Title,
  Subtitle,
  ChartContainer,
} from "./styles";
import { WeeklyChart } from "./Charts/WeekChart";
import { MonthlyChart } from "./Charts/MonthChart";

export function Statistic() {
  return (
    <ScrollView bounces={false}>
      <StatisticContainer>
        <ChartContainer variant="first">
          <ChartTitleContainer>
            <Title>Esse mês</Title>
            <Subtitle>Dia/Consumo (R$)</Subtitle>
          </ChartTitleContainer>
          <MonthlyChart/>
        </ChartContainer>
        <ChartContainer>
          <ChartTitleContainer>
            <Title>Ontem</Title>
            <Subtitle>Dia/Consumo (R$)</Subtitle>
          </ChartTitleContainer>
          <DailyChart />
        </ChartContainer>
        <ChartContainer>
          <ChartTitleContainer>
            <Title>Essa semana</Title>
            <Subtitle>Dia/Consumo (R$)</Subtitle>
          </ChartTitleContainer>
          <WeeklyChart />
        </ChartContainer>
      </StatisticContainer>
    </ScrollView>
  );
}
