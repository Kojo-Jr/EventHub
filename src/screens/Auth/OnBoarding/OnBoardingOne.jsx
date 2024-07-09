import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import MainHeader from "../../../components/Headers/MainHeader";
import SearchAndFilter from "../../../components/TextInputs/SearchAndFilter";
import SubHeader from "../../../components/Headers/SubHeader";
import MiniHeader from "../../../components/Headers/MiniHeader";
const OnBoardingOne = () => {
  return (
    <View className="flex-1 bg-[#FAFAFA]">
      <StatusBar style="auto" />
      <View
        style={{
          height: wp(60),
          borderBottomLeftRadius: wp(10),
          borderBottomRightRadius: wp(10)
        }}
        className="bg-blue-700"
      >
        <MainHeader />

        <SearchAndFilter />

        <SubHeader />
      </View>

      <View
        style={{
          marginTop: wp(5),
          padding: wp(5)
        }}
      >
        <MiniHeader title="Upcoming Events" navigationText="See All" />
      </View>
      <View></View>
    </View>
  );
};

export default OnBoardingOne;
