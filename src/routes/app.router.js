import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { Overview } from "../pages/Overview"
import { Statistic } from "../pages/Statistic"
import { StatisticButton } from "../@components/TabBar/StatisticButton/index"
import { OverviewButton } from "../@components/TabBar/OverviewButton/index"

const Tab = createMaterialTopTabNavigator()

export function AppRouter(){
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle:{
                borderRadius: 30,
                height: 50,
                maxWidth: 350,
                marginLeft: 200,                  
            },
            tabBarIndicatorStyle:{
                backgroundColor: '#FFC01E',
                height: 50,
                borderRadius: 30,
            },
            tabBarAndroidRipple: { borderless: false },
        }}>
            <Tab.Screen 
                name= "Overview" 
                component={Overview}
                options={{ 
                    tabBarLabel:({focused}) => (
                        <OverviewButton focused={focused}/>
                    ),
                    tabBarIcon: () => null,
                }}
            />
            <Tab.Screen 
                name= "Statistic" 
                component={Statistic}
                options={{
                    tabBarLabel:({focused}) => (
                        <StatisticButton focused={focused}/>
                    ),
                    tabBarIcon: () => null,
                }}
            />
        </Tab.Navigator>
    )
}