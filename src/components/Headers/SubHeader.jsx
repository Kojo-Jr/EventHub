import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SubHeader = ({ name, backgroundColor }) => {
  return (
    <View
      className="flex-1 flex-row"
      style={{
        marginLeft: wp(5),
        // top: wp(1),
        gap: wp(2)
      }}
    >
      {/* Sports */}
      <TouchableOpacity
        className="flex-row items-center justify-center rounded-2xl space-x-2"
        style={{
          width: "auto",
          height: wp(10),
          padding: wp(1),
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

      {/* music
      <TouchableOpacity
        className="flex-row items-center justify-center bg-orange-400 rounded-3xl space-x-2"
        style={{ width: wp(29), height: wp(10), padding: wp(1) }}
      >
        <Feather name="music" size={24} color="white" />
        <Text style={{ fontSize: wp(4) }} className="text-white">
          Music
        </Text>
      </TouchableOpacity> */}

      {/* Food
      <TouchableOpacity
        className="flex-row items-center justify-center bg-green-400 rounded-3xl space-x-2"
        style={{ width: wp(29), height: wp(10), padding: wp(1) }}
      >
        <Ionicons name="fast-food" size={24} color="white" />
        <Text style={{ fontSize: wp(4) }} className="text-white">
          Food
        </Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default SubHeader;
