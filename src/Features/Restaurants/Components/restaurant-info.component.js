import React from "react";
import { Image } from "react-native";
import { Spacer } from "../../../Components/spacer/spacer.component.js";
import { Texttypo } from "../../../Components/typography/text.component.js";
import StarSvg from "../../../../assets/star.js";
import OpenSvg from "../../../../assets/open.js";

import {
  RestaurantCard,
  RestaurantCardCover,
  Address,
  Info,
  Rating,
  Section,
  SectionEnd,
} from "./restaurant-info-card.styles.js";
import { Favourite } from "../../../Components/favourites/favourite.component.js";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    vicinity,
    placeId,
    rating,
    isClosedTemporarily,
  } = restaurant;
  console.log("restaurant image", restaurant);

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover
        key={name}
        source={{
          uri: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
        }}
      />
      <Info>
        <Texttypo variant="label">{name}</Texttypo>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <StarSvg key={`star-${placeId}-${i}`} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Texttypo variant="error">CLOSED TEMPORARILY</Texttypo>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <OpenSvg width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              {" "}
              <Image
                style={{
                  width: 15,
                  height: 15,
                }}
                source={{ uri: icon }}
              />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </RestaurantCard>
  );
};
