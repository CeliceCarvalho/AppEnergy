import styled, { css } from "styled-components/native";
import { LanguageVariant } from "typescript";

export const StatisticContainer = styled.View`
    display: flex;
    align-items: center;
    gap: 32px;
`

interface ChartContainerProps{
    variant?: 'first'
}

export const ChartContainer = styled.View<ChartContainerProps>`

    background-color: #fff;
    border-radius: 32px;
    width: 370px;
    height: 320px;

    ${(props:ChartContainerProps) => props.variant === 'first' && css`
        margin-top: 100px;
    `}
`

export const ChartTitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
    
    margin: 16px 32px;
`

export const Title = styled.Text`
    font-family: Roboto_700Bold;
    font-size: 20px;
`

export const Subtitle = styled.Text`
    font-family: OpenSans_300Light;
    font-size: 12px;
`
