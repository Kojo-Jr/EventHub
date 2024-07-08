import { View, Text, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const ViewEventScreen = ({ route }) => {
  const { featuredImage, location, name } = route.params.params;
  //   const params = route.params;
  return (
    <View className="flex-1">
      <StatusBar style="auto" />
      {/* Banner */}
      <View>
        <Image
          style={{
            height: wp(80)
          }}
          source={featuredImage}
        />
        <View className="absolute">
          <View className="flex flex-row justify-between">
            <Text className="text-white">Events</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewEventScreen;
