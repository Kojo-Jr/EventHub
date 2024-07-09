import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable
} from "react-native";
import React from "react";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const SearchAndFilter = ({ iconColor, placeholderTextColor }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{ padding: wp(5), bottom: wp(5) }}
      className="flex-row items-center justify-between"
    >
      <Pressable
        onPress={() => {
          navigation.navigate("SearchScreen");
        }}
      >
        <Ionicons name="search-outline" size={24} color={iconColor} />
      </Pressable>
      <View style={{ right: wp(19) }}>
        <TextInput
          style={{ fontSize: wp(5), fontWeight: "300" }}
          className="text-white"
          placeholder="Search..."
          placeholderTextColor={placeholderTextColor}
        />
      </View>

      {/* Filter */}
      <TouchableOpacity
        className="flex-row items-center justify-center bg-[#5D56F3] rounded-3xl space-x-2"
        style={{ width: wp(23), height: wp(9), padding: wp(1) }}
      >
        <View className="bg-[#cdcdcf3c] rounded-full p-0.5">
          <MaterialIcons name="filter-list" size={20} color="white" />
        </View>

        <Text style={{ fontSize: wp(4) }} className="text-white">
          Filter
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchAndFilter;
