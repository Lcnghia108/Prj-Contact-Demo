import React from "react";
import { StackNavigator } from "react-navigation";
import { Button, Text } from "react-native";
import ProfileScreen from "./Profile";

//export const App = StackNavigator({
//    Home: { screen: HomeScreen },
//    Profile: { screen: ProfileScreen }
//});
export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation.navigate;
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "flex-start"
                }}
            >
                <Text> Danh sách liên hệ </Text>
                <Button
                    title="Lưu Chí Nghĩa"
                    onPress={() => navigate("Profile")}
                />
            </View>
        );
    }
}
