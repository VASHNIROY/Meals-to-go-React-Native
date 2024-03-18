import { mocks } from "./mock";
import { camelize } from "camelize";

export const RestaurantsRequest = (location = "37.7749295,-122.4194155") => {
  console.log(mocks);
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  console.log(mappedResults);
  return camelize(mappedResults);
};

RestaurantsRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {
    console.log(transformedResponse);
  })

  .catch((err) => {
    console.log("error");
  });