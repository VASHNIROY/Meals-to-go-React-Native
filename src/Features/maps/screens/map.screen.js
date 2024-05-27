import React, { useContext, useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { Search } from "../components/search.component";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import styled from "styled-components/native";
import { MapCallout } from "../components/map-callout.component";
import { Platform } from "react-native";
import WebView from "react-native-webview";

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

export default function Maps({ navigation }) {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);
  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;
  const Image = isAndroid ? CompactWebview : CompactImage;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    const latdelta = northeastLat - southwestLat;
    setLatDelta(latdelta);
  }, [location, viewport]);

  return (
    <View style={styles.container}>
      <Search />
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant })
                }
              >
                {/* <MapCallout restaurant={restaurant} /> */}
                <Item>
                  <Image source={{ uri: restaurant.photos[0] }} />

                  <Text center variant="caption" numberOfLines={3}>
                    {restaurant.name}
                  </Text>
                </Item>
              </Callout>
            </Marker>
          );
        })}
      </MapView>
    </View>
  );
}

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
