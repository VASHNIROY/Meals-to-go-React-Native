import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { SafeArea } from "../../../Components/utility/safe-area.component";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../Components/restaurant-info.component";
import { Spacer } from "../../../Components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar style={{ borderRadius: 0 }} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => {
            console.log("items", item);
            return <RestaurantInfoCard restaurant={item} />;
          }}
          keyExtractor={(item) => item.name}
        />
      </RestaurantListContainer>
    </SafeArea>
  );
};
