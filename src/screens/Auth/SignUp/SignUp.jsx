import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const SignUp = () => {
  return (
    <View className="flex-1 bg-[#FAFAFA]">
      <StatusBar style="auto" />
      <View
        style={{
          marginTop: wp(14)
        }}
      >
        {/* Add Sign in Text and TextInput */}
        <View
          style={{
            padding: wp(5),
            gap: wp(5)
          }}
        >
          <View>
            <Text style={{ fontSize: wp(6), fontWeight: "700" }}>Sign Up</Text>
          </View>
          <View className="space-y-5 items-center">
            <TextInput
              placeholder="abc@gmail.com"
              keyboardType="email-address"
              style={{
                borderWidth: 0.5,
                width: wp("85%"),
                height: wp("15%"),
                borderRadius: wp(2),
                padding: wp(2)
              }}
            />
            <TextInput
              placeholder="Your Password"
              keyboardType="default"
              style={{
                borderWidth: 0.5,
                width: wp("85%"),
                height: wp("15%"),
                borderRadius: wp(2),
                padding: wp(2)
              }}
            />
            <TextInput
              placeholder="Confirm Password"
              keyboardType="default"
              style={{
                borderWidth: 0.5,
                width: wp("85%"),
                height: wp("15%"),
                borderRadius: wp(2),
                padding: wp(2)
              }}
            />
          </View>
          <View className="flex flex-row justify-between">
            <Text>Remember Me</Text>
            <Text>Forgot Password?</Text>
          </View>
        </View>

        {/* SignIn Button */}
        <View style={{ marginTop: wp(5) }} className="items-center">
          <View
            style={{
              width: wp(50)
            }}
          >
            <Button title="Sign In" color="#4F86F7" />
          </View>
        </View>

        {/* Alternative to Sign Im */}
        <View
          style={{
            padding: wp(5),
            marginTop: wp(5)
          }}
          className="items-center"
        >
          {/* OR */}
          <View>
            <Text className="text-xl font-thin">OR</Text>
          </View>

          {/* login in with Google */}
          <TouchableOpacity
            style={{ top: wp(5), width: wp(55), padding: wp(2), gap: wp(2) }}
            className="flex flex-row items-center justify-center bg-white rounded-2xl"
          >
            <View>
              <Image
                style={{
                  width: wp(10),
                  height: wp(10)
                }}
                source={require("../../../../assets/mockImages/Onboarding/google.png")}
              />
            </View>

            <View>
              <Text style={{ fontSize: wp(4) }} className="tracking-wide">
                Login with Google
              </Text>
            </View>
          </TouchableOpacity>

          {/* Login with facebook */}
          <TouchableOpacity
            style={{ top: wp(8), width: wp(55), padding: wp(2), gap: wp(2) }}
            className="flex flex-row items-center justify-center bg-white rounded-2xl"
          >
            <View>
              <Image
                style={{
                  width: wp(10),
                  height: wp(10)
                }}
                source={require("../../../../assets/mockImages/Onboarding/facebook.png")}
              />
            </View>

            <View>
              <Text style={{ fontSize: wp(4) }} className="tracking-wide">
                Login with facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* link to register */}
        <View style={{ marginTop: wp(10) }} className="items-center">
          <Text>Already have an account? Signin</Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
