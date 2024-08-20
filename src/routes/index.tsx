import { NavigationContainer } from "@react-navigation/native";
import { AppRouter } from "./app.router";
import { Header } from "../@components/Header";

export function Routes(){
    return(
        <NavigationContainer>
            <Header/>
            <AppRouter/>
        </NavigationContainer>
    )
}