import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NoNotification = () => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-1">
      <StatusBar style="auto" />
      <View style={{ marginTop: wp(10) }}>
        <View className="flex-row justify-between p-2">
          <View className="flex-row items-center space-x-3">
            <Pressable
              onPress={() => {
                navigation.navigate("HomeScreen");
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
            <Text className="font-medium text-lg">Notification</Text>
          </View>

          <View>
            <Entypo name="dots-three-vertical" size={21} color="black" />
          </View>
        </View>
      </View>

      {/* Insert the no notification image */}
      <View
        style={{ marginTop: wp(40) }}
        className="justify-center items-center self-center"
      >
        <Image
          source={require("../../../../assets/mockImages/Notifications/Nonotifications.png")}
        />
        <Text className="font-normal text-lg">No Notifications!</Text>
      </View>
      <View className="top-5 self-center">
        <Text className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor
        </Text>
      </View>
    </View>
  );
};

export default NoNotification;