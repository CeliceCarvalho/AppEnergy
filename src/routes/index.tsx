import { NavigationContainer } from "@react-navigation/native";
import { AppRouter } from "./app.router";
import { Header } from "../@components/Header";
import { MetricsContextProvider } from "../contexts/MetricsContext";

export function Routes(){
    return(
            <NavigationContainer>
                <Header/>
                <AppRouter/>
            </NavigationContainer>
    )
}