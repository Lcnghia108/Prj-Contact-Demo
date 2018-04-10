import React from "react";
import { StackNavigator } from "react-navigation";
import { Button, Text } from "react-native";

export default class ProfileScreen extends React.Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Text> Thông tin </Text>
            </View>
        );
    }
}
