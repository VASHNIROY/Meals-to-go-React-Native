import { useContext } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigator } from "./app.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigator } from "./account.navigator";
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <NavigationContainer>
      {isAuthenticated ? <AccountNavigator /> : <AppNavigator />}
    </NavigationContainer>
  );
};
