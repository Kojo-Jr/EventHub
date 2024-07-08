import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../../../screens/Home/Main/MainScreen";
import NoNotification from "../../../screens/Home/Notification/NoNotification";
import Notifications from "../../../screens/Home/Notification/Notifications";

const HomeStack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="NotificationScreen"
        component={Notifications}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="NoNotificationScreen"
        component={NoNotification}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
