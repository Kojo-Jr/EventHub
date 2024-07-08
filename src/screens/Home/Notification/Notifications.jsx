import { View, Text, Pressable } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

const Notifications = () => {
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
    </View>
  );
};

export default Notifications;
