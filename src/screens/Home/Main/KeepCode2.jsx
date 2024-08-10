import { View, Text, Platform } from "react-native";
import React from "react";

const MainScreen = () => {
  const platform = Platform.OS;

  console.log("Platform:", Platform.OS);
  return (
    <View
      style={{
        marginTop: platform !== "ios" && 20
      }}
      className="flex-1 items-center justify-center bg-cyan-500"
    >
      <Text>MainScreen</Text>
    </View>
  );
};

export default MainScreen;
