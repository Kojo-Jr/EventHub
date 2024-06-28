import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/Home/Main/MainScreen";
import SplashScreen from "./src/screens/Auth/SplashScreen/SplashScreen";
import SignIn from "./src/screens/Auth/Login/SignIn";

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="HomeScreen"
      component={MainScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const SignInStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign In">
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash"
          component={AuthStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign In"
          component={SignInStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;