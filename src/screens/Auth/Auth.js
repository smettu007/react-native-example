import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import startTabs from "../MainTabs/startMainTabs";

class AuthScreen extends Component {
  loginHandler = () => {
    startTabs();
  };
  render() {
    return (
      <View>
        <Text> Auth text </Text>
        <Button title="login" onPress={this.loginHandler} />
      </View>
    );
  }
}
export default AuthScreen;
