import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Image,
  StyleSheet
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const UpComingEvents = () => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="auto" />
      <View style={{ marginTop: wp(10) }}>
        {/* Header and Header Navigation Icon */}
        <View
          style={Styles.headerNavigation}
          className="flex flex-row items-center justify-between"
        >
          <View className="flex flex-row items-center space-x-2">
            <Pressable
              onPress={() => {
                navigation.navigate("HomeStack");
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            <Text className="text-black font-semibold text-xl tracking-wide ">
              Events
            </Text>
          </View>

          <View>
            <Entypo name="dots-three-vertical" size={21} color="black" />
          </View>
        </View>

        {/* Upcoming and Past Events header */}
        <View className="items-center">
          <View
            style={Styles.eventsTitle}
            className=" flex-row  justify-center items-center space-x-8 bg-[#00000007] rounded-full"
          >
            <TouchableOpacity
              style={Styles.upcoming}
              className="rounded-full items-center"
            >
              <Text className="text-[#5669FF] text-base">Upcoming</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-base text-[#9B9B9B]">Past Events</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* No Upcoming Events */}
        <View
          style={Styles.noUpcomingText}
          className="items-center justify-center"
        >
          <View>
            <Image
              source={require("../../../assets/mockImages/Events/calendar.png")}
            />
          </View>
          <View>
            <Text className="font-semibold text-xl">No Upcoming Event</Text>
          </View>
          <View>
            <Text className="text-center">
              Lorem ipsum dolor sit amet,{"\n"} consectetur
            </Text>
          </View>
        </View>

        {/* Explore Events Button */}
        <TouchableOpacity
          style={Styles.exploreEventsButton}
          className=" bg-[#5669FF] rounded-2xl"
          onPress={() => {
            navigation.navigate("AllEvents");
          }}
        >
          <View className="flex-row space-x-10 items-center justify-center">
            <View className="ml-5 ">
              <Text className="text-lg text-white font-medium">
                Explore Events
              </Text>
            </View>
            <View>
              <Image
                source={require("../../../assets/mockImages/Events/arrow.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpComingEvents;

const Styles = StyleSheet.create({
  headerNavigation: {
    padding: wp(2)
  },
  eventsTitle: {
    padding: wp(3),
    width: wp(65)
  },
  upcoming: {
    backgroundColor: "white",
    padding: wp(1),
    width: wp(25)
  },
  noUpcomingText: {
    marginTop: wp(30),
    gap: wp(3)
  },
  exploreEventsButton: {
    marginTop: wp(40),
    width: wp(60),
    height: wp(16),
    padding: wp(5),
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});
