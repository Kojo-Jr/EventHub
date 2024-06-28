import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Feather, EvilIcons } from "@expo/vector-icons";

const FeaturedUpcomingEvents = ({ featuredImage, name, location }) => {
  return (
    <TouchableOpacity
      style={{
        width: wp(75),
        height: wp(65),
        backgroundColor: "white",
        marginTop: wp(2),
        marginRight: wp(5)
      }}
      className="rounded-2xl"
    >
      <View className="p-2">
        <View>
          <TouchableOpacity>
            <Image
              style={{
                width: wp(70),
                height: wp(30),
                borderRadius: wp(2),
                resizeMode: "cover"
              }}
              source={featuredImage}
            />
          </TouchableOpacity>

          <View
            style={{
              padding: wp(2),
              gap: wp(48)
            }}
            className="absolute flex-row"
          >
            <View>
              <Text
                style={{ padding: wp(1) }}
                className="text-red-400 font-medium bg-[#FAFAFA] rounded-xl"
              >
                10th{"\n"}June
              </Text>
            </View>
            <View
              style={{
                height: wp(8)
              }}
              className="bg-[#FAFAFA] rounded-xl"
            >
              <Feather
                name="bookmark"
                size={24}
                color="red"
                style={{
                  padding: wp(1)
                }}
              />
            </View>
          </View>
        </View>

        {/* Event Name */}
        <View style={{ marginTop: wp(5) }} className="items-center">
          <Text
            style={{
              fontSize: wp(5)
            }}
            className="font-semibold"
          >
            {name}
          </Text>
        </View>
        <View
          style={{
            marginTop: wp(13)
          }}
          className="flex flex-row justify-center"
        >
          <EvilIcons name="location" size={24} color="black" />
          <Text>{location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedUpcomingEvents;
