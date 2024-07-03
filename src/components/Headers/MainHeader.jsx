import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const MainHeader = () => {
  return (
    <View
      style={{
        marginTop: wp(15),
        padding: wp(5)
      }}
      className="flex-row justify-between"
    >
      {/* Menu */}
      <View>
        <Feather name="menu" size={24} color="white" />
      </View>

      {/* Location */}
      <View>
        <Text className="text-white">Current Location</Text>
      </View>

      {/* Notifs */}
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
