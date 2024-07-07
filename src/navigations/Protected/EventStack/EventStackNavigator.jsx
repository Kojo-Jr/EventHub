import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import UpComingEvents from "../../../screens/Event/UpComingEvents";
import AllEvents from "../../../screens/Event/AllEvents";

const EventStack = createStackNavigator();

const EventStackNavigator = () => {
  return (
    <EventStack.Navigator>
      <EventStack.Screen
        name="AllEvents"
        component={AllEvents}
        options={{ headerShown: false }}
      />
      <EventStack.Screen
        name="UpcomingEvents"
        component={UpComingEvents}
        options={{ headerShown: false }}
      />
    </EventStack.Navigator>
  );
};

export default EventStackNavigator;
