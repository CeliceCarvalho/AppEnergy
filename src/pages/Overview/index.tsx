import { ScrollView, Text, View } from "react-native";
import {
  OverviewContainer,
  DateContainer,
  CurrentDate,
  CardsContainer,
  Card,
  ValueContainer,
  Title,
  Value,
  PercentageSign,
} from "./styles";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { GoalChart } from "./GoalChart";
import { useEffect, useState } from "react";
import axios from "axios";

let goal = 90;

interface Metrics {
    interval: string;
    value: number;
    accumulated: number;
    predicted: boolean;
  }

export function Overview() {
  const day = new Date().getDate();
  const month = format(new Date(), "MMMM", { locale: ptBR });
  const [metrics, setMetrics] = useState<Metrics[]>([]);

  useEffect(() => {
    axios.get("http://192.168.0.209:5000/metrics/monthly").then((response) => {
      setMetrics(response.data.monthly_metrics);
    });
  }, []);

  const percentage = () => {
    const actualCostObject = metrics.findLast(
        (metrics) => !metrics.predicted
    );
    if(actualCostObject){
        const actualCost = actualCostObject?.accumulated
        return (actualCost/goal*100)
    }else{
        return []
    }
  }

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <ScrollView bounces={false}>
        <OverviewContainer>
            <DateContainer>
                <CurrentDate>
                    {day < 10 && "0"}
                    {day} de {capitalizeFirstLetter(month)}, hoje
                </CurrentDate>
            </DateContainer>
            <GoalChart/>
            <CardsContainer>
                <Card>
                    <Title>Porcentagem:</Title>
                    <ValueContainer>
                        <Value>{percentage()}</Value>
                        <PercentageSign>%</PercentageSign>
                    </ValueContainer>
                </Card>
                <Card>
                    <Title>Meta (R$):</Title>
                    <ValueContainer>
                        <Value>{goal}</Value>
                    </ValueContainer>
                </Card>
            </CardsContainer>
        </OverviewContainer>
    </ScrollView>
  );
}
