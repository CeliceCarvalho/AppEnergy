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

let todayConsumption = 20.45;
let goal = 90;
let percentage = (todayConsumption * 100) / goal;
let estimate = 200.0;

const data = [
  { x: " ", y: 35 },
  { x: " ", y: 40 },
];

export function GoalChart(){
    
    return(
            <ChartContainer>
                <VictoryPie
                    colorScale={["#FFF", "#FFBD14"]}
                    innerRadius={180}
                    data={data}
                    style={{
                        labels: {
                        fill: "#D8E3EC",
                        },
                    }}
                />
                <ConsumptionInfoContainer>
                    <DollarSign>R$:</DollarSign>
                    <TodayConsumption>
                        {todayConsumption.toFixed(2).replace(".", ",")}
                    </TodayConsumption>
                    <Estimate>
                        Estimativa: R$ {estimate.toFixed(2).replace(".", ",")}
                    </Estimate>
                </ConsumptionInfoContainer>
            <LegendContainer>
                <LegendItem> 
                    <LegendItemColor variant="yellow"/>
                    <LegendItemTitle>Consumido</LegendItemTitle>
                </LegendItem>
                <LegendItem>
                    <LegendItemColor variant="white"/>
                    <LegendItemTitle>Disponível</LegendItemTitle>
                </LegendItem>
            </LegendContainer>
        </ChartContainer>
    )
}