import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../../screens/Auth/SplashScreen/SplashScreen";
import SignIn from "../../screens/Auth/SignIn/SignIn";
import SignUp from "../../screens/Auth/SignUp/SignUp";
import Verification from "../../screens/Auth/Verification/Verification";
import ResetPassword from "../../screens/Auth/ResetPassword/ResetPassword";

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />

      {/* Signin Screen */}
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />

      {/* Sign Up Stack */}
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />

      {/* Verification Stack */}
      <AuthStack.Screen
        name="Verification"
        component={Verification}
        options={{ headerShown: false }}
      />

      <AuthStack.Screen
        name="Reset"
        component={ResetPassword}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
