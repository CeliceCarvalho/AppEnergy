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

let todayConsumption = 20.45;
let goal = 90;
let percentage = (todayConsumption * 100) / goal;
let estimate = 200.0;

export function Overview() {
  const day = new Date().getDate();
  const month = format(new Date(), "MMMM", { locale: ptBR });

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
                        <Value>{percentage.toFixed(0)}</Value>
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
