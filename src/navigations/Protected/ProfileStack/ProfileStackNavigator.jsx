import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AboutProfile from "../../../screens/Profile/AboutProfile";

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={AboutProfile}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
