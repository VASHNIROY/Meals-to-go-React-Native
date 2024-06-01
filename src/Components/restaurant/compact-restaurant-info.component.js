import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform, Text } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant = {} }) => {
  const ImageComponent = isAndroid ? CompactWebview : CompactImage;
  const imageSource = isAndroid
    ? {
        uri: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      }
    : {
        uri: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
      };

  return (
    <Item>
      <ImageComponent source={imageSource} />
      <Text numberOfLines={3} style={{ textAlign: "center" }}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
