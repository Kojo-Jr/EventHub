import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import SearchAndFilter from "../../../components/TextInputs/SearchAndFilter";
import { FlashList } from "@shopify/flash-list";
import { events } from "../../../mockData/allEvents.data";
import { EventsCard } from "../../../components/Cards";

const Search = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-[#FAFAFA]">
      <StatusBar style="auto" />
      <View style={{ padding: wp(2) }}>
        <View
          style={{ marginTop: wp(10) }}
          className="flex flex-row items-center space-x-2"
        >
          <Pressable
            onPress={() => {
              navigation.navigate("HomeScreen");
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </Pressable>
          <Text className="text-black font-semibold text-xl tracking-wide ">
            Search
          </Text>
        </View>
      </View>

      {/* import SearchAndFilter component */}
      <View
        style={{
          marginTop: wp(5),
          height: wp(11)
        }}
      >
        <SearchAndFilter
          iconColor={"#5D56FF"}
          placeholderTextColor={"#000000"}
        />
      </View>

      {/* import events and render through flashlist */}
      <View style={Styles.nearbyEventsList}>
        <FlashList
          data={events}
          renderItem={({ item }) => (
            <EventsCard
              date={item.date}
              featuredImage={item.featuredImage}
              name={item.name}
              location={item.location}
            />
          )}
          estimatedItemSize={200}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Search;

const Styles = StyleSheet.create({
  nearbyEventsList: {
    flexGrow: 1,
    flexDirection: "column"
  }
});
