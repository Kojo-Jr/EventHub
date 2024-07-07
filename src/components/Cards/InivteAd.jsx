import { View, Text, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const InivteAd = () => {
  return (
    <TouchableOpacity
      style={{
        width: wp(94),
        height: wp(35),
        alignSelf: "center"
      }}
      className="bg-cyan-200 rounded-2xl"
    >
      <View style={{ padding: wp(5) }} className="flex-row">
        <View>
          <Text className="font-medium text-lg">Invite your friends</Text>
          <Text>Get $20 for ticket</Text>

          <Pressable
            style={{ width: wp(17), marginTop: wp(5) }}
            className="bg-cyan-300 items-center rounded-xl"
          >
            <Text style={{ padding: wp(2), color: "white" }}>INVITE</Text>
          </Pressable>
          {/* <Button style={{ width: wp(10) }} title="Invite" /> */}
        </View>
      </View>
      <View style={{ position: "absolute", right: wp(0), top: wp(2.5) }}>
        <Image
          style={{
            width: wp(45),
            height: wp(35)
            // resizeMode: "cover"
          }}
          source={require("../../../assets/mockImages/Ads/invite.png")}
        />
      </View>
    </TouchableOpacity>
  );
};

export default InivteAd;
