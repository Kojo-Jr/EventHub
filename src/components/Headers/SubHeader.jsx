import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SubHeader = ({ name, backgroundColor }) => {
  return (
    <View className="flex-1 flex-row" style={Styles.subheaderContainer}>
      {/* Content */}
      <TouchableOpacity
        className="flex-row items-center justify-center rounded-2xl space-x-2"
        style={[Styles.subheaderContent, { backgroundColor }]}
      >
        {/* <MaterialIcons name="filter-list" size={20} color="white" /> */}
        <Text style={Styles.Text} className="text-white">
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubHeader;

const Styles = StyleSheet.create({
  subheaderContainer: {
    marginLeft: wp(3),
    // top: wp(1),
    gap: wp(2)
    // borderWidth: 2,
    // borderColor: "red"
  },
  subheaderContent: {
    width: wp(25),

    height: wp(10),
    padding: wp(1.5)
  },
  Text: { fontSize: wp(4), padding: wp(1) }
});
