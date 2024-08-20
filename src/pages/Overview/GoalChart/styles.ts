import styled from "styled-components/native"

export const ChartContainer = styled.View``

export const ConsumptionInfoContainer = styled.View`
    position: absolute;

    margin-top: 68px;
    margin-left: 16%;

    width: 280px;
    height: 280px;

    border-radius: 200px;
    background-color: #104972;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextBase = styled.Text`
    color: white;
`

export const TodayConsumption = styled(TextBase)`
    font-family: OpenSans_700Bold;
    font-size: 55px;
`

export const DollarSign = styled(TextBase)` 
    font-family: OpenSans_300Light;
`

export const Estimate = styled(TextBase)`
    font-family: OpenSans_400Regular_Italic;
`

export const LegendContainer = styled.View`
    display: flex;
    flex-direction: row;

    justify-content: center;

    gap: 48px;
`

export const LegendItem = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
`

interface LegendItemColorProps {
    variant: 'yellow' | 'white'
}

export const LegendItemColor = styled.View<LegendItemColorProps>`
    background-color: ${(props: LegendItemColorProps) => props.variant === 'yellow' ? '#FFBD14' : '#fff'};
    border-radius: 8px;
    width: 24px;
    height: 13px;
`

export const LegendItemTitle = styled.Text`
    font-family: OpenSans_400Regular;
    font-size: 13px;
`