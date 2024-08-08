import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22: 90;

export const HeaderContainer = styled.View`
    background-color: #104972;

    padding-top:  ${statusBarHeight}px;
    padding-left: 35px;
    padding-right: 30px;
    padding-bottom: 60px;

    display: flex;
    flex-direction: row;
`

export const HeaderContent = styled.View`
    flex: 1;
    display: flex;
    flex-direction: row;
    
    align-items: center;
    justify-content: space-between;
`

export const Title = styled.Text`
    font-family: Roboto_400Regular;
    color: #fff;
`

export const Subtitle = styled.Text`
    margin-top: 5px;
    margin-left: 2px;

    font-family: Roboto_100Thin;
    color: #fff;
`




