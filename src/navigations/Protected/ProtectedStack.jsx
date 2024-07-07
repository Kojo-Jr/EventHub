import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStackNavigator from "./HomeStack/HomeStackNavigator";
import MapStackNavigator from "./MapStack/MapStackNavigator";
import EventStackNavigator from "./EventStack/EventStackNavigator";
import ProfileStackNavigator from "./ProfileStack/ProfileStackNavigator";

const ProtectedStack = createStackNavigator();

const ProtectedStackNavigator = () => {
  return (
    <ProtectedStack.Navigator initialRouteName="HomeStack">
      <ProtectedStack.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{ headerShown: false }}
      />

      <ProtectedStack.Screen
        name="MapStack"
        component={MapStackNavigator}
        options={{ headerShown: false }}
      />
      <ProtectedStack.Screen
        name="EventStack"
        component={EventStackNavigator}
        options={{ headerShown: false }}
      />
      <ProtectedStack.Screen
        name="ProfileStack"
        component={ProfileStackNavigator}
        options={{ headerShown: false }}
      />
    </ProtectedStack.Navigator>
  );
};

export default ProtectedStackNavigator;
