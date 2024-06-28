import { View, Text } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MiniHeader = ({ title, navigationText }) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <Text
        style={{
          fontSize: wp(5)
        }}
        className="font-medium"
      >
        {title}
      </Text>

      <Text
        style={{
          fontSize: wp(4)
        }}
      >
        {navigationText}
      </Text>
    </View>
  );
};

export default MiniHeader;
