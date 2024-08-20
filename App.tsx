import {
  Roboto_700Bold,
  Roboto_500Medium,
  Roboto_400Regular,
  Roboto_100Thin,
  useFonts,
} from "@expo-google-fonts/roboto";
import {
  OpenSans_300Light,
  OpenSans_700Bold,
  OpenSans_300Light_Italic,
  OpenSans_400Regular_Italic
} from "@expo-google-fonts/open-sans";
import { Routes } from "./src/routes/index";
import { ScrollView } from "react-native";

export default function App() {
  const [fontloaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_100Thin,
    Roboto_700Bold,
    OpenSans_300Light,
    OpenSans_700Bold,
    OpenSans_300Light_Italic,
    OpenSans_400Regular_Italic,
  });

  if (!fontloaded) {
    return null;
  }

  return (
    
      <Routes />
  );
}
