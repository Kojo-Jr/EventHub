import {
  View,
  Text,
  TextInput,
  FlatList,
  ImageBackground,
  Image
} from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  EvilIcons
} from "@expo/vector-icons";
import SubHeader from "../../components/Headers/SubHeader";
import { eventCategories } from "../../mockData/eventsCategories.data";
import { styled } from "nativewind";

const Map = () => {
  return (
    // Map Container
    <View
      style={{
        flex: 1,
        gap: wp(5)
      }}
    >
      {/* <ImageBackground
        source={require("../../../assets/mockImages/MapImage/map.jpg")}
        resizeMode="contain"
      /> */}
      {/* Map Header and map Icon */}
      <View style={{ marginTop: wp(10), padding: wp(5) }}>
        <View className="flex-row space-x-4">
          <View>
            <TextInput
              style={{
                backgroundColor: "white",
                width: wp(75),
                height: wp(10),
                borderRadius: wp(2),
                padding: wp(1)
              }}
              placeholder="Find events..."
            />
          </View>

          {/* Insert map icon */}
          <View
            style={{
              height: wp(10),
              borderRadius: wp(2)
            }}
            className="bg-white w-8 items-center justify-center"
          >
            <MaterialIcons name="my-location" size={24} color="blue" />
          </View>
        </View>
      </View>

      {/* import subheader components from  */}
      <View>
        <FlatList
          data={eventCategories}
          renderItem={({ item }) => {
            return (
              <SubHeader
                name={item.name}
                backgroundColor={item.backgroundColor}
              />
            );
          }}
          keyExtractor={(item, id) => id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/*Event View Location */}
      <View
        style={{
          marginTop: wp(3),
          width: wp(95),
          padding: wp(5),
          position: "absolute",
          bottom: 0
        }}
        className="flex" // flex is not needed
      >
        <View className="bg-white flex-row items-center rounded-3xl">
          <View className="p-2">
            <Image
              style={{
                // resizeMode: "cover",
                width: wp(18),
                height: wp(24)
              }}
              className="bg-white rounded-2xl"
              source={require("../../../assets/mockImages/Events/Mask Group.png")}
            />
          </View>

          <View style={{ marginBottom: wp(5), padding: wp(2) }}>
            {/* Date and BookMark or Favourite */}
            <View className="flex-row justify-between">
              <View>
                <Text className="text-blue-600">Wed, Apr 28, 5:30pm</Text>
              </View>
              <View>
                <MaterialCommunityIcons name="bookmark" size={18} color="red" />
              </View>
            </View>

            <View>
              <Text className="font-bold text-l">
                Jo Malone London's Mother's Day{"\n"}Presents
              </Text>
            </View>

            {/* Location */}
            <View style={{ top: wp(4) }} className="flex flex-row">
              <EvilIcons name="location" size={24} color="black" />
              <Text>Radius Gallery-Santa Cruz, CA</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Map;
