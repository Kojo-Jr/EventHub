import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Feather
} from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const AboutProfile = () => {
  const navigation = useNavigation();
  return (
    <View className="flex flex-1">
      <StatusBar style="auto" />
      <View style={{ marginTop: wp(10) }}>
        <View className="flex flex-row justify-between p-2">
          <Pressable onPress={() => navigation.navigate("HomeStack")}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <View>
            <Entypo name="dots-three-vertical" size={21} color="black" />
          </View>
        </View>
      </View>

      {/* Profile Image and name */}
      <View
        style={{ marginTop: wp(10) }}
        className="self-center items-center space-y-4"
      >
        <TouchableOpacity>
          <Image
            source={require("../../../assets/mockImages/Profile/profile_image.png")}
          />
        </TouchableOpacity>
        <View>
          <Text className="font-semibold text-2xl">David Sibia</Text>
        </View>
      </View>

      {/* following and followers */}
      <View className="self-center items-center mt-3 flex-row space-x-5">
        <View className="items-center">
          <Text className="font-medium">350</Text>
          <Text>Following</Text>
        </View>
        <View className="h-8 w-0.5 bg-gray-200" />
        <View className="items-center">
          <Text className="font-medium">346</Text>
          <Text>Followers</Text>
        </View>
      </View>

      {/* Follow Button and Messages Button */}
      <View
        style={{ marginTop: wp(9) }}
        className="self-center flex-row  space-x-2"
      >
        {/* Follow button */}
        <TouchableOpacity
          style={{ width: wp(40) }}
          className="bg-[#5669FF] items-center rounded-2xl p-4"
        >
          <View className="flex-row items-center space-x-2">
            <SimpleLineIcons name="user-follow" size={20} color="white" />
            <Text className="text-white text-base">Follow</Text>
          </View>
        </TouchableOpacity>

        {/* Message Button */}
        <TouchableOpacity
          style={{ width: wp(40) }}
          className="border-[#5669FF] border-2 items-center rounded-2xl p-4"
        >
          <View className="flex-row items-center space-x-2">
            <Feather name="message-circle" size={20} color="#5669FF" />
            <Text className="text-[#5669FF] text-base">Messages</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Tab Header */}
      <View
        style={{ marginTop: wp(10) }}
        className="self-center justify-center flex-row space-x-20"
      >
        <View className="border-b-2 border-[#5669FF]">
          <Text className="text-xl text-[#5669FF]">About</Text>
        </View>
        <View>
          <Text className="text-xl text-[#747688]">Event</Text>
        </View>
        <View>
          <Text className="text-xl text-[#747688]">Reviews</Text>
        </View>
      </View>

      {/* About Text */}
      <View className="text-justify p-5">
        <Text className="text-[#3C3E56]">
          Enjoy your favorite dish and a lovely your friends and family and have
          a great time. Food from local food trucks will be available for
          purchase.
        </Text>
        <Text className="text-[#5669FF]">Read more</Text>
      </View>
    </View>
  );
};

export default AboutProfile;
