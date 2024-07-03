import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";

const ResetPassword = () => {
  return (
    <View
      style={{
        padding: wp(5),
        flex: 1
      }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: wp(20)
        }}
      >
        {/* Verification Header and SubText */}
        <View style={{ gap: wp(2) }}>
          <View>
            <Text style={{ fontSize: wp(6), fontWeight: "500" }}>
              Reset Password
            </Text>
          </View>

          <View>
            <Text>
              Please enter your email address to {"\n"}request a password reset
            </Text>
          </View>
        </View>

        {/* Verification code boxed */}

        <View
          style={{ marginTop: wp(15), gap: wp(10) }}
          className="flex flex-row justify-center"
        >
          <View>
            <TextInput
              style={{
                width: wp(80),
                height: wp(13),
                borderWidth: wp(0.2),
                borderRadius: wp(2)
              }}
              keyboardType="email-address"
              placeholder=" abc@gmail.com"
            />
          </View>
        </View>

        {/* confirmation button */}
        <TouchableOpacity
          style={{
            marginTop: wp(15),
            alignItems: "center"
          }}
        >
          <View
            style={{
              width: wp(60),
              height: wp(12)
            }}
            className="bg-[#4F86F7] justify-center items-center rounded-2xl"
          >
            <Text className="text-white text-lg p-2">Send</Text>
          </View>
        </TouchableOpacity>

        {/* Resend Code */}
        <View style={{ marginTop: wp(10) }} className="items-center">
          <Text>Re-send Code in 0:20</Text>
        </View>
      </View>
    </View>
  );
};

export default ResetPassword;
