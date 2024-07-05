import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Entypo, EvilIcons, Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlashList } from "@shopify/flash-list";
import { events } from "../../mockData/allEvents.data";

const AllEvents = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Home");
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

        {/* Events Contents */}
        <View className="flex-grow flex-row">
          <FlashList
            data={events}
            renderItem={({ item }) => {
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
                          source={item.featuredImage}
                        />
                      </View>
                      {/* Details */}
                      <View
                        style={Styles.textContainer}
                        // className="text-justify"
                      >
                        <Text className="text-blue-500 text-base">
                          {item.date}
                        </Text>
                        <Text
                          style={Styles.textTitle}
                          className="font-semibold text-base"
                        >
                          {item.name}
                        </Text>
                        <View className="flex flex-row mt-2">
                          <EvilIcons name="location" size={24} color="black" />
                          <Text className="text-[#747688]">
                            {item.location}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              );
            }}
            estimatedItemSize={200}
            showsVerticalScrollIndicator={false}
          />
        </View>
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
