import { Text } from "react-native";
import { OverviewContainer } from "./styles";
import { format } from 'date-fns'
import { ptBR } from "date-fns/locale";

export function Overview(){
    const day = new Date().getDay()
    const monthName = format(new Date(), 'MMMM', {locale: ptBR})

    return(
        <OverviewContainer>
            <View style={styles.fundoTitle}>
                <Text style={styles.title}>
                    {dia} de {mes}, hoje
                </Text>
            </View>
        </OverviewContainer>
    )
}