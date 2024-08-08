import { Text, View, StyleSheet } from "react-native";

export function OverviewButton({focused, size, color}){
    return(
        <View style={[styles.menu, {opacity: focused ? 1 : 0.2}]} >
            <Text style={styles.title}>Estatística</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    menu:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 30,
        height:50,
        marginTop:-38,
    },
    title:{
        fontSize: 16,
        fontFamily: "Roboto_700Bold",
    }
})
