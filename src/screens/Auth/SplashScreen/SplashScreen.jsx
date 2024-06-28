import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={Style.SplashScreen}>
      <Image
        source={require("../../../../assets/mockImages/Onboarding/SplashScreen.png")}
      />
    </View>
  );
};

export default SplashScreen;

const Style = StyleSheet.create({
  SplashScreen: {
    // marginTop: wp(50),
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
