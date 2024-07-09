import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Feather, EvilIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FeaturedCards = ({ featuredImage, name, location }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ViewEventDetails", {
          params: {
            featuredImage,
            name,
            location
          }
        })
      }
      style={{
        width: wp(70),
        height: wp(62),
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
                width: wp(65),
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
              gap: wp(43)
            }}
            className="absolute flex-row"
          >
            <View>
              <Text
                style={{ padding: wp(1) }}
                className="text-red-400 font-semibold bg-[#FFFFFFB2] rounded-xl"
              >
                10th{"\n"}June
              </Text>
            </View>
            <View
              style={{
                height: wp(8)
              }}
              className="bg-[#FFFFFFB2] rounded-xl"
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

        {/* Event Details */}
        <View style={{ gap: wp(2), marginTop: wp(5), alignSelf: "center" }}>
          <View>
            <Text
              style={{
                fontSize: wp(5)
              }}
              className="font-semibold"
            >
              {name}
            </Text>
          </View>
          <View>
            <Image
              source={require("../../../assets/mockImages/Events/attending.png")}
            />
          </View>
          <View className="flex flex-row">
            <EvilIcons name="location" size={24} color="black" />
            <Text>{location}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCards;
