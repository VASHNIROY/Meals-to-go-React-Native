import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import Maps from "../../Features/maps/screens/map.screen";
import { SafeArea } from "../../Components/utility/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { SettingsNavigator } from "./settings.navigator.js";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CartScreen = () => {
  return (
    <SafeArea style={{ justifyContent: "center", alignItems: "center" }}>
      <Text>No Cart Items</Text>
    </SafeArea>
  );
};

export const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={{ headerShown: false }}
    tabBarOptions={{
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen
      name="Home"
      component={RestaurantsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}
    />

    <Tab.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="cart" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Map"
      component={Maps}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="map" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome name="user-circle" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
