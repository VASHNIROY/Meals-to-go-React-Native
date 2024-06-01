import { useContext } from "react";
import { SafeArea } from "../../../Components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { View, Text, Button } from "react-native";
const list = [
  {
    title: "Appointments",
    icon: "av-timer",
  },
  {
    title: "Trips",
    icon: "flight-takeoff",
  },
];

export const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      {list.map((item, i) => (
        <View style={{ color: "black" }}>
          <Text>{item.title}</Text>
        </View>
      ))}
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()}>
        Logout
      </Button>
    </SafeArea>
  );
};
