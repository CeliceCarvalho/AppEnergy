import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Container, HomeContainer, Title } from './styles';
import { Header } from './src/@components/Header/index';
import { 
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_100Thin,
  useFonts } from '@expo-google-fonts/roboto';
import { Routes } from './src/routes/index';


export default function App() {
  const [ fontloaded ] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_100Thin,
    Roboto_700Bold
  })
  if(!fontloaded){
    return null
  }

  return (
    <Routes/>
  );
}


