import React from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";
import { SafeArea } from "../../../Components/utility/safe-area.component";
import styled from "styled-components/native";
import { RestaurantInfoCard } from "../Components/restaurant-info.component";
import { Spacer } from "../../../Components/spacer/spacer.component";

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

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar style={{ borderRadius: 0 }} />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </RestaurantListContainer>
  </SafeArea>
);
