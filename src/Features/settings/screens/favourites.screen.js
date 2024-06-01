import { useContext } from "react";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../Components/utility/safe-area.component";
import { Text } from "react-native";
import styled from "styled-components";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const FavouritesScreen = () => {
  const { favourites } = useContext(FavouritesContext);
  return favourites.length ? null : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
