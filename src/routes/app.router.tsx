import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Overview } from "../pages/Overview"
import { Statistic } from "../pages/Statistic"
import { Text } from "react-native"

const Tab = createMaterialTopTabNavigator()

export function AppRouter(){
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#FFC01E',
            tabBarStyle:{
                position: 'absolute',
                borderRadius: 30,
                left: 30,
                right:30,
                top:20,
                height:50,  
            },
            tabBarIndicatorStyle:{
                backgroundColor: '#FFC01E',
                height:50,
                borderRadius: 30, 

            },
            tabBarAndroidRipple: { borderless: false },
        }}>
            <Tab.Screen 
                name= "Overview" 
                component={Overview}
                options={{ 
                    tabBarLabel:({focused}) => (
                        <Text style={{
                            opacity: focused ? 0.8 : 0.2,
                            fontFamily: "Roboto_700Bold",
                            fontSize: 16,
                            marginTop: -24,
                        }}>Visão geral</Text>
                    ),
                    tabBarIcon: () => null,

                }}
            />
            <Tab.Screen 
                name= "Statistic" 
                component={Statistic}
                options={{
                    tabBarLabel:({focused}) => (
                        <Text style={{
                            opacity: focused ? 0.8 : 0.2,
                            fontFamily: "Roboto_700Bold",
                            fontSize: 16,
                            marginTop: -24,
                        }}>Estatística</Text>
                    ),
                    tabBarIcon: () => null,
                }}
            />
        </Tab.Navigator>
        
    )
}