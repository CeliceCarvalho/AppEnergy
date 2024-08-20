import { ScrollView } from "react-native";
import { DailyChart } from "./Charts/DailyChart";
import { StatisticContainer, ChartTitleContainer, Title, Subtitle, ChartContainer } from "./styles";

export function Statistic(){
    return(
        <ScrollView>
            <StatisticContainer>
                <ChartContainer>
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
                    <DailyChart/>
                </ChartContainer>
            </StatisticContainer>
        </ScrollView>
    )
}