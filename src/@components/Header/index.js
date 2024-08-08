import { AntDesign } from "@expo/vector-icons"
import { View, Text, TouchableOpacity } from "react-native"
import { H1, HeaderContainer, HeaderContent, Subtitle, Title } from "./styles"
//Criar os components e verificar o erro de instalação

export function Header(){
    return(
        <HeaderContainer>
            <HeaderContent>
                <View>
                    <Title>Olá, Celice</Title>
                    <Subtitle>Confira as informações do seu consumo</Subtitle>
                </View>
                <TouchableOpacity activeOpacity={0.7} >
                    <AntDesign name="user" size={35} color="#FFF"/>
                </TouchableOpacity>
            </HeaderContent>
        </HeaderContainer>
    )
}