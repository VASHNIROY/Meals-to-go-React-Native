import { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { SafeArea } from "../../../Components/utility/safe-area.component";
import { RestaurantInfoCard } from "../Components/restaurant-info.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfaseExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);

  const [dinnerExpanded, setDinnerExpanded] = useState(false);

  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfaseExpanded(!breakfastExpanded)}
        >
          <List.Item title="Eggs Bendict1" />
          <List.Item title="Eggs Bendict2" />

          <List.Item title="Eggs Bendict3" />
        </List.Accordion>
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Eggs Omlette1" />
          <List.Item title="Eggs Omlette2" />
          <List.Item title="Eggs Omlette3" />
        </List.Accordion>
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Eggs Omlette1" />
          <List.Item title="Eggs Omlette2" />
          <List.Item title="Eggs Omlette3" />
        </List.Accordion>
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Eggs Omlette1" />
          <List.Item title="Eggs Omlette2" />
          <List.Item title="Eggs Omlette3" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
