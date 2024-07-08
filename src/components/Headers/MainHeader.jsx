import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Entypo, MaterialIcons } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const MainHeader = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        marginTop: wp(8),
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
      <Pressable
        style={{
          backgroundColor: "#524ce0",
          borderRadius: wp(2),
          padding: wp(1)
        }}
        onPress={() => {
          navigation.navigate("NoNotificationScreen");
        }}
      >
        <MaterialIcons name="notifications-none" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default MainHeader;
