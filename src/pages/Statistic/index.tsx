import { ScrollView } from "react-native";
import { DailyChart } from "./Charts/DailyChart";
import { StatisticContainer, ChartTitleContainer, Title, Subtitle, ChartContainer } from "./styles";
import { WeekChart } from "./Charts/WeekChart";

export function Statistic(){
    return(
        <ScrollView>
            <StatisticContainer>
                <ChartContainer variant="first">
                    <ChartTitleContainer>
                        <Title>
                            Ontem
                        </Title>
                        <Subtitle>
                            Dia/Consumo (R$)
                        </Subtitle>
                    </ChartTitleContainer>
                    <DailyChart/>
                </ChartContainer>
                <ChartContainer>
                    <ChartTitleContainer>
                        <Title>
                            Essa semana
                        </Title>
                        <Subtitle>
                            Dia/Consumo (R$)
                        </Subtitle>
                    </ChartTitleContainer>
                    <WeekChart/>
                </ChartContainer>
            </StatisticContainer>
        </ScrollView>
    )
}