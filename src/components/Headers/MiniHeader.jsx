import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const MiniHeader = ({ title, navigationText }) => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row items-center justify-between">
      <Text style={Styles.navigationTitle} className="font-medium">
        {title}
      </Text>

      <Pressable
        onPress={() => {
          navigation.navigate("All Events", {
            screen: "Upcoming Events"
          });
        }}
      >
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
