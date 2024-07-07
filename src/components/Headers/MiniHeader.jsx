import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MiniHeader = ({ title, navigationText, handleNavigation }) => {
  return (
    <View className="flex flex-row items-center justify-between">
      <Text
        style={Styles.navigationTitle}
        className="font-medium tracking-wider"
      >
        {title}
      </Text>

      <Pressable onPress={handleNavigation}>
        <Text style={Styles.navigationText}>{navigationText}</Text>
      </Pressable>
    </View>
  );
};

export default MiniHeader;

const Styles = StyleSheet.create({
  navigationText: {
    fontSize: wp(4)
  },
  navigationTitle: {
    fontSize: wp(5)
  }
});
