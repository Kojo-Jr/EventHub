import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import ProtectedStackNavigator from "./Protected/ProtectedStack";
import AuthStackNavigator from "./Authentication/AuthStackNavigator";

const Stack = createStackNavigator();

const RootNavigation = () => {
  const [user, setUser] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="ProtectedStack"
            component={ProtectedStackNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="AuthStack"
            component={AuthStackNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
