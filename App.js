import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { Navigation } from "./src/Infrastructure/navigation";
import { theme } from "./src/Infrastructure/theme";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
// import { initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// const firebaseConfig = {
//   apiKey: "AIzaSyDHjKJKDAFftzc2sXzPZBpMQCTPDG1yatA",
//   authDomain: "meals-to-go-react-native-fb465.firebaseapp.com",
//   projectId: "meals-to-go-react-native-fb465",
//   storageBucket: "meals-to-go-react-native-fb465.appspot.com",
//   messagingSenderId: "827275959325",
//   appId: "1:827275959325:web:3c731abcc5ad57c85efaf4",
// };

// const app = initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
