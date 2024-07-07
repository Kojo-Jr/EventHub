import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Entypo, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { events } from "../../mockData/allEvents.data";
import EventsCard from "../../components/Cards/EventsCard";

const AllEvents = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("HomeStack");
  };

  return (
    <View className="bg-[#fafafa] flex-1">
      <StatusBar style="auto" />
      <View style={{ marginTop: wp(10) }}>
        {/* Header and Header Navigation Icon */}
        <View
          style={Styles.headerNavigation}
          className="flex flex-row items-center justify-between"
        >
          <View className="flex flex-row items-center space-x-2">
            <Pressable onPress={handlePress}>
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            <Text className="text-black font-semibold text-xl tracking-wide ">
              Events
            </Text>
          </View>

          <View className="flex flex-row space-x-3">
            <Feather name="search" size={24} color="black" />
            <Entypo name="dots-three-vertical" size={21} color="black" />
          </View>
        </View>
      </View>
      {/* Events Contents */}
      <View className="flex-grow">
        <FlashList
          data={events}
          renderItem={({ item }) => {
            return (
              <EventsCard
                date={item.date}
                featuredImage={item.featuredImage}
                name={item.name}
                location={item.location}
              />
            );
          }}
          estimatedItemSize={80}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default AllEvents;

const Styles = StyleSheet.create({
  headerNavigation: {
    padding: wp(2)
  },
  eventsContainer: {
    marginTop: wp(3)
  },
  eventsDetailsContainer: {
    padding: wp(5),
    width: wp(90)
  },
  image: {
    width: wp(20),
    height: wp(20),
    resizeMode: "cover"
  },
  textContainer: {
    marginLeft: wp(2)
  },
  textTitle: { width: wp(60) }
});
