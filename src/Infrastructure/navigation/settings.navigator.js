import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { FavouritesScreen } from "../../Features/settings/screens/favourites.screen";
import { Settings } from "../../Features/settings/screens/settings.screen";

const SettingsStack = createStackNavigator();
export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      headerMode="screen"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
      <SettingsStack.Screen
        options={{ header: () => null }}
        name="Settings"
        component={Settings}
      />
    </SettingsStack.Navigator>
  );
};
