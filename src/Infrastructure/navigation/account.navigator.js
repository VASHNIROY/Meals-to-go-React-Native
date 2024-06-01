import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { AccountScreen } from "../../Features/account/screens/account.screen";
import { LoginScreen } from "../../Features/account/screens/login.screen";
import { RegisterScreen } from "../../Features/account/screens/register.screen";
const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
