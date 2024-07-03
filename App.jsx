import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/Home/Main/MainScreen";
import SplashScreen from "./src/screens/Auth/SplashScreen/SplashScreen";
import SignIn from "./src/screens/Auth/SignIn/SignIn";
import SignUp from "./src/screens/Auth/SignUp/SignUp";
import Verification from "./src/screens/Auth/Verification/Verification";
import ResetPassword from "./src/screens/Auth/ResetPassword/ResetPassword";
import Map from "./src/screens/Map/Map";

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

const SignUpStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const VerificationStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Verification"
      component={Verification}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const ResetStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Reset"
      component={ResetPassword}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

const MapStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Map" component={Map} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Reset Password">
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
        <Stack.Screen
          name="Sign Up"
          component={SignUpStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Verify"
          component={VerificationStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Reset Password"
          component={ResetStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={MapStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
