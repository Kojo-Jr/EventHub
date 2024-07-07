import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileAbout from "../../../screens/Profile/ProfileAbout";

const ProfileStack = createStackNavigator();

const ProfileStackNavigator = () => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileAbout}
        options={{ headerShown: false }}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackNavigator;
