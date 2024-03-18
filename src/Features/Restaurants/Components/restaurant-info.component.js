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

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Texttypo variant="label">{name}</Texttypo>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <StarSvg width={20} height={20} />
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
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
