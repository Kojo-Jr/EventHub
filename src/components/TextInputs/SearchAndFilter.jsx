import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SearchAndFilter = () => {
  return (
    <View
      style={{ padding: wp(5), bottom: wp(5) }}
      className="flex-1 flex-row justify-between items-center"
    >
      <View>
        <Ionicons name="search-outline" size={24} color="white" />
      </View>
      <View style={{ right: wp(19) }}>
        <TextInput
          style={{ fontSize: wp(5), fontWeight: "300" }}
          className="text-white"
          placeholder="Search..."
        />
      </View>

      {/* Filter */}
      <TouchableOpacity
        className="flex-row items-center justify-center bg-blue-400 rounded-full space-x-2"
        style={{ width: wp(24), height: wp(8), padding: wp(1) }}
      >
        <MaterialIcons name="filter-list" size={20} color="white" />
        <Text style={{ fontSize: wp(4) }} className="text-white">
          Filter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchAndFilter;
