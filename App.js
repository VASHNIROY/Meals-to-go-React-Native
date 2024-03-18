import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/Features/Restaurants/Screens/restaurants.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/Infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { SafeArea } from "./src/Components/utility/safe-area.component";
import { Ionicons } from "@expo/vector-icons";

import { RestaurantsRequest } from "./src/services/restaurants/restaurant.serivce";

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

function Settings() {
  return (
    <SafeArea>
      <div>Settings</div>
    </SafeArea>
  );
}

function Map() {
  return (
    <SafeArea>
      <div>Map</div>
    </SafeArea>
  );
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

export default function App() {
  let [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  let [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={createScreenOptions}
            tabBarOptions={{
              activeTintColor: "tomato",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Home" component={RestaurantsScreen} />
            <Tab.Screen name="map" component={Map} />

            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
        <RestaurantsRequest />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
