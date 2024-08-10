import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

const MainScreen = () => {
  const [username, setUsername] = useState("");
  const [username2, setUsername2] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUsernameChange = (text) => {
    setUsername(text);
  };
  const handleUsername2Change = (text) => {
    setUsername2(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Alert.alert(
        "Password Mismatch",
        "Password and Confirm Password do not match",
        [{ text: "OK" }]
      );
      return;
    }

    console.log(username, password);
    console.log(username + " " + password);
  };

  return (
    <View className="flex-1 items-center justify-center bg-cyan-500">
      <View>
        <TextInput
          style={{
            borderRadius: 15,
            borderWidth: 0.5,
            height: 35,
            width: 250,
            marginBottom: 15
          }}
          value={username}
          onChangeText={handleUsernameChange}
          placeholder="  Username"
        />
        {username.length > 10 && (
          <TextInput
            style={{
              borderRadius: 15,
              borderWidth: 0.5,
              height: 35,
              width: 250,
              marginBottom: 15
            }}
            value={username2}
            onChangeText={handleUsername2Change}
            placeholder="  Username 2"
          />
        )}
        <TextInput
          style={{
            borderRadius: 15,
            borderWidth: 0.5,
            height: 35,
            width: 250,
            marginBottom: 15
          }}
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="  Password"
          secureTextEntry={true}
        />
        <TextInput
          style={{
            borderRadius: 15,
            borderWidth: 0.5,
            height: 35,
            width: 250,
            marginBottom: 15
          }}
          value={confirmPassword}
          onChangeText={handleConfirmPasswordChange}
          placeholder="  Confirm Password"
          secureTextEntry={true}
        />
        <View>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </View>
  );
};

export default MainScreen;
