import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../../../screens/Profile/Profile";

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
