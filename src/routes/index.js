import { NavigationContainer } from "@react-navigation/native";
import { AppRouter } from "./app.router";
import { Header } from "../@components/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Overview } from "../pages/Overview";
import { Statistic } from "../pages/Statistic";

const Tab = createMaterialTopTabNavigator()

export function Routes(){
    return(
        <NavigationContainer>
            <Header/>
            <AppRouter/>
        </NavigationContainer>
    )
}