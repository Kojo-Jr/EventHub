import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SubHeader = ({ name, backgroundColor }) => {
  return (
    <View
      className="flex-1 flex-row"
      style={{
        marginLeft: wp(3),
        // top: wp(1),
        gap: wp(2)
        // borderWidth: 2,
        // borderColor: "red"
      }}
    >
      {/* Sports */}
      <TouchableOpacity
        className="flex-row items-center justify-center rounded-2xl space-x-2"
        style={{
          width: wp(25),

          height: wp(10),
          padding: wp(1.5),
          backgroundColor: backgroundColor
        }}
      >
        {/* <MaterialIcons name="filter-list" size={20} color="white" /> */}
        <Text
          style={{ fontSize: wp(4), padding: wp(1) }}
          className="text-white"
        >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubHeader;
