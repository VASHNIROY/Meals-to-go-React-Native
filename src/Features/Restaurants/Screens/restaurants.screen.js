import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfo } from "../Components/restaurant-info.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.AndroidSafeAreaView}>
    <View style={styles.searchBarContainer}>
      <Searchbar
        style={styles.searchBar}
        placeholder="What do you wanna search ?"
      />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  AndroidSafeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchBarContainer: {
    padding: 16,
  },
  searchBar: {
    borderRadius: 0,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
