import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { EvilIcons } from "@expo/vector-icons";

const EventsCard = ({ date, featuredImage, name, location }) => {
  return (
    <View style={Styles.eventsContainer}>
      <View className="items-center">
        <View
          style={Styles.eventsDetailsContainer}
          className="bg-white flex flex-row rounded-3xl "
        >
          <View>
            <Image
              style={Styles.image}
              className="rounded-xl justify-center"
              source={featuredImage}
            />
          </View>
          {/* Details */}
          <View
            style={Styles.textContainer}
            // className="text-justify"
          >
            <Text className="text-blue-500 text-base">{date}</Text>
            <Text style={Styles.textTitle} className="font-semibold text-base">
              {name}
            </Text>
            <View className="flex flex-row mt-2">
              <EvilIcons name="location" size={24} color="black" />
              <Text className="text-[#747688]">{location}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default EventsCard;

const Styles = StyleSheet.create({
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
  textTitle: { width: wp(62) }
});
