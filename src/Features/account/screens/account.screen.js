import { Button } from "react-native-paper";
import { View } from "react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
} from "../components/account.styles";
import LottieView from "lottie-react-native";

import { Spacer } from "../../../Components/spacer/spacer.component";
export const AccountScreen = ({ navigation }) => {
  return (
    <AccountBackground>
      <AccountCover />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "flex-start",
        }}
      ></View>
      <LottieView
        key="animation"
        autoPlay
        loop
        resizeMode="cover"
        style={{
          width: 300,
          height: 100,
        }}
        source={require("../../../../assets/watermelon.json")}
      />
      <AccountContainer>
        <Button
          icon="lock-open-outline"
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Button>
        <Spacer size="large">
          <Button
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </Button>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  );
};
