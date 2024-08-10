import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign, Ionicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import OnBoardingOne from "../../Auth/OnBoarding/OnBoardingOne";

const ViewEventScreen = ({ route }) => {
  const navigation = useNavigation();

  const { featuredImage, location, name } = route.params.params;
  //   const params = route.params;
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      {/* Banner */}
      <View className="bottom-6 self-center">
        <Image
          style={{
            width: wp(100),
            height: wp(65),
            resizeMode: "cover"
          }}
          source={featuredImage}
        />
        <View
          style={{ marginTop: wp(15), padding: wp(5), gap: wp(45) }}
          className="absolute flex-row items-center "
        >
          <View className="flex-row items-center space-x-2">
            <Pressable onPress={() => navigation.navigate("HomeScreen")}>
              <AntDesign name="arrowleft" size={24} color="white" />
            </Pressable>
            <View>
              <Text className="text-white text-2xl font-medium">
                Event Details
              </Text>
            </View>
          </View>

          {/* Add Bookmark */}
          <TouchableOpacity className="bg-[#FFFFFF4D] p-1 rounded-xl">
            <Ionicons name="bookmark-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        <View
          style={{ bottom: wp(-5) }}
          className=" absolute self-center items-center flex-row  space-x-10  bg-white  p-4 rounded-full "
        >
          <View>
            <Image
              source={require("../../../../assets/mockImages/Events/attending.png")}
            />
          </View>
          <TouchableOpacity className="bg-[#5669FF]  w-20 items-center rounded-2xl">
            <Text className="text-white p-1">Invite</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Event Title */}

      <View style={{ marginTop: wp(7) }} className="self-center">
        <Text className="font-normal text-3xl">{name}</Text>
      </View>

      {/* Date and Location */}
      <View
        style={{
          marginTop: wp(9),
          gap: wp(3),
          marginRight: wp(30)
        }}
        className="flex-row self-center items-center"
      >
        <View className="bg-[#566aff24] p-4 rounded-2xl">
          <AntDesign name="calendar" size={24} color="blue" />
        </View>
        <View className="space-y-1">
          <Text className="text-base font-medium">14 December, 2021</Text>
          <Text className="text-[#747688] text-xs">
            Tuesday, 4:00PM - 9:00PM
          </Text>
        </View>
      </View>

      {/* Location */}
      <View
        style={{ marginTop: wp(9), gap: wp(3), marginRight: wp(25) }}
        className="flex-row self-center items-center"
      >
        <View className="bg-[#566aff24] p-4 rounded-2xl">
          <Entypo name="location-pin" size={24} color="blue" />
        </View>
        <View className="space-y-1">
          <Text className="text-base font-medium">Gala Convention Center</Text>
          <Text className="text-[#747688] text-xs">{location}</Text>
        </View>
      </View>

      {/* Organizer Detai*/}
      <View
        style={{
          marginTop: wp(4),
          padding: wp(7)
        }}
        className="flex-row justify-between items-center"
      >
        <View className="flex-row items-center space-x-3">
          <View>
            <Image
              source={require("../../../../assets/mockImages/Events/OrganizerDp/organizerdp.png")}
            />
          </View>
          <View>
            <Text className="font-medium text-base">Ashfak Sayem</Text>
            <Text className="text-[#706E8F]">Organizer</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{ width: wp(18) }}
          className="bg-[#566aff34] rounded-lg items-center"
        >
          <Text className="text-[#5669FF] p-0.5">Follow</Text>
        </TouchableOpacity>
      </View>

      {/* About Event */}
      <View style={{ padding: wp(5), gap: wp(2) }}>
        <View>
          <Text className="text-xl font-medium">About Event</Text>
        </View>
        <View>
          <Text>
            Enjoy your favorite dishe and a lovely your friends and family and
            have a great time. Food from local food trucks will be available
          </Text>
        </View>
      </View>

      {/* Ticket Button*/}

      <TouchableOpacity className="bg-[#5669FF] rounded-2xl self-center flex-row items-center p-4 space-x-10 mt-3">
        <View className="ml-6">
          <Text className="text-white uppercase font-medium">
            Buy Ticket $120
          </Text>
        </View>
        <View>
          <Image
            source={require("../../../../assets/mockImages/Events/arrow.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ViewEventScreen;
