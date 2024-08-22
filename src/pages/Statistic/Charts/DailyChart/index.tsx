import { useEffect, useState } from "react";
import { ChartContainer } from "./styles";
import { VictoryAxis, VictoryBar, VictoryChart, VictoryGroup } from "victory-native";
import axios from 'axios'
import { Text } from "react-native";

const data = {
    "1":[
      {
        id: '0-4',
        label: '12,50',
        value: 12.50,
      },
    ],
    "2":[
      {
        id: '4-8',
        label: '10,42',
        value: 10.42,
      },
    ],
    "3":[
      {
        id: '8-12',
        label: '13,54',
        value: 13.54,
      },
    ],
    "4":[
      {
        id: '12-16',
        label: '20,48',
        value: 20.48,
      },
    ],
    "5":[
      {
        id: '16-20',
        label: '20,48',
        value: 20.48,
      },
    ],
    "6":[
      {
        id: '20-0',
        label: '20,48',
        value: 20.48,
      }
    ]   
};

const labelStyles = {
    fontFamily: 'Seravek',
    opacity: 0.5,
  };

interface DailyMetricsType{
  metrics: DailyMetric[]
}

interface DailyMetric{
  interval: string,
  value: number
}
  

export function DailyChart(){
  const [ dailyMetrics, setDailyMetrics ] = useState<DailyMetricsType>({
    metrics: []
})
  const [ error, setError ] = useState('')

  useEffect(() => {
    fetch('http://192.168.0.209:3000/weekly_metrics')
    .then(response => response.json())
    .then(data => {
      setDailyMetrics(data);
    })
    .catch(error => {
      setError('Ocorreu um erro ao carregar os dados')
    })
      
  }, []);


    return(
       <ChartContainer>
        {dailyMetrics && dailyMetrics.metrics && dailyMetrics.metrics.length > 0 ? (
          dailyMetrics.metrics.map(metrics => {
            return(
              <Text>{metrics.interval}</Text>
            )
          })
        ): (
          <Text>{error}</Text>
        )}
        <VictoryChart width={390} padding={{top: 50, left: 40, right:58, bottom: 80}}>
            <VictoryGroup 
              animate={{
                easing: "bounce"
              }}
            >
            <VictoryBar style={{
                data:{
                  fill: "#FFC01E",
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[1]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: '#104972',
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[2]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: "#FFC01E",
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[3]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: '#104972',
                  opacity: 0.75,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[4]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: "#FFC01E",
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[5]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
              <VictoryBar style={{
                data:{
                  fill: '#104972',
                  opacity: 0.8,
                  width: 30,
                  borderRadius:50,
                },
                labels: labelStyles
              }}
              data={data[6]} 
              x="id" 
              y="value" 
              cornerRadius={5}
              />
            </VictoryGroup>
            
             <VictoryAxis crossAxis
              standalone={true}
              fixLabelOverlap={true}
              style={{
                axis: {strokeWidth: 0 },
                tickLabels: labelStyles,
              }}
           ></VictoryAxis>
           </VictoryChart>
       </ChartContainer> 
    )
}