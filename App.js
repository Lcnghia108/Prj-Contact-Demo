import React, { Component } from "react";
import {
    AppRegistry,
    Image,
    Alert,
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./Homes";
import ProfileScreen from "./Homes";
//import App from "./Homes";

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        // Toggle the state every second
        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, 1000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : " ";
        return <Text>{display}</Text>;
    }
}
const styles = StyleSheet.create({
    hello: {
        textAlign: "center",
        color: "#CD3566",
        fontWeight: "400",
        fontSize: 30
    },
    Nhapnhay: {
        color: "blue",
        lineHeight: 30,
        textAlign: "center"
    },
    Fontchu: {
        fontFamily: "Times New Roman"
    }
});
const App = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
});
export default class BlinkApp extends Component {
    constructor(props) {
        super(props);
        this.state = { text: "" };
    }
    buttonFind() {
        Alert.alert(
            "Không tìm thấy",
            "Sản phẩm bạn tìm hiện không có trong hệ thống",
            [
                { text: "Tìm lại", onPress: () => console.log("Refind") },
                { text: "Thoát đi", onPress: () => console.log("Exit app") }
            ],
            { cancelable: false }
        );
    }
    buttonList() {
        App;
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 400,
                    height: 400,
                    backgroundColor: "powderblue"
                }}
            >
                <Text style={[styles.hello, styles.Fontchu]}>
                    WELCOME TO CONTACT
                </Text>
                <Text style={styles.Nhapnhay}> Bắt đầu </Text>
                <Blink text="Danh sách những liên hệ bạn thường liên lạc" />

                <Text style={styles.Nhapnhay}>
                    {" "}
                    Nhập tên người bạn muốn tìm{" "}
                </Text>
                <TextInput
                    style={{ height: 40, width: 200 }}
                    placeholer="Nhập tên người bạn muốn tìm"
                    onChangeText={text => this.setState({ text })}
                />
                <View>
                    <Button
                        onPress={this.buttonFind}
                        title="Tìm kiếm"
                        color="#9CBACD"
                    />
                </View>
                <View>
                    <Button
                        onPress={this.buttonList}
                        title="Danh sách liên hệ"
                        color="#34567D"
                    />
                </View>
            </View>
        );
    }
}
