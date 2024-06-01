import React, { useState, useContext } from "react";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  AuthInput,
  ErrorContainer,
  Title,
} from "../components/account.styles";
import LottieView from "lottie-react-native";

import { Text } from "react-native";
import { Spacer } from "../../../Components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Button } from "react-native-paper";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error } = useContext(AuthenticationContext);
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={(p) => setPassword(p)}
          />
        </Spacer>
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size="large">
          <Button
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </Button>
        </Spacer>
      </AccountContainer>
      <Spacer size="large">
        <Button mode="contained" onPress={() => navigation.goBack()}>
          Back
        </Button>
      </Spacer>
    </AccountBackground>
  );
};
