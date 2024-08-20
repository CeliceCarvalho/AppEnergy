import { css } from "styled-components";
import styled from "styled-components/native";

export const OverviewContainer = styled.View`    
    height: 100%;

    display: flex;
    align-items: center;
    gap: 8px;

    background: #DAE4ED;
    margin-bottom: 64px;
`
export const DateContainer = styled.View`
    margin-top: 90px;

    background-color: #fff;
    border-radius: 30px;
    border: 1px #ADD4F1;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.20);

    width: 290px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const CurrentDate = styled.Text`
    font-size: 20px;
    font-family: OpenSans_300Light;
`

export const CardsContainer = styled.View`
    display: flex;
    flex-direction: row;
    gap: 32px;
    margin-top: 32px;
`

export const Card = styled.View`
    background-color:#FFBD14;

    width: 150px;
    height: 120px;
    border-radius: 32px;
`

export const Title = styled.Text`
    font-family: OpenSans_300Light;
    font-size: 12px;
    margin-top: 16px;
    margin-left: 16px;
`

export const ValueContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
`

export const Value = styled.Text`
    font-family: OpenSans_700Bold;
    font-size: 50px;
`

export const PercentageSign = styled.Text`
    font-family: OpenSans_700Bold;
    font-size: 25px;
`
