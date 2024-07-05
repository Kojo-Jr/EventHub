import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
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
      <TouchableOpacity>
        <Entypo name="menu" size={24} color="white" />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View className="items-center">
          <Text className="text-white">Current Location</Text>
          <Text className="text-white">New York</Text>
        </View>
        {/* <View>
              <Entypo name="triangle-down" size={24} color="white" />
            </View> */}
      </View>

      {/* Notifs */}
      <TouchableOpacity
        style={{
          backgroundColor: "#524ce0",
          borderRadius: wp(2),
          padding: wp(1)
        }}
      >
        <MaterialIcons name="notifications-none" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
