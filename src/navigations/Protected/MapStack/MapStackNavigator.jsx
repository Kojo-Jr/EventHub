import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Map from "../../../screens/Map/Map";

const MapStack = createStackNavigator();

const MapStackNavigator = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen
        name="Map"
        component={Map}
        options={{ headerShown: false }}
      />
    </MapStack.Navigator>
  );
};

export default MapStackNavigator;
