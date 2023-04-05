import { StyleSheet, Modal, Alert, Pressable, FlatList } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    NativeBaseProvider,
    Button,
    Center,
    Image,
    Box,
    Text,
    Circle,
    View,
    Stack,
    Input,
    HStack,
    KeyboardAvoidingView,
} from "native-base";
import { useFonts } from "expo-font";
import { bml, Mail, Password, Loginimg } from "../assets";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Messages = [
    {
        id: "1",
        userName: "Ankit Singh",
        userImg: require("../assets/images/Profile.png"),
        messageTime: "4 mins ago",
        messageText: "Hello",
    },
    {
        id: "2",
        userName: "Aditya Pandit",
        userImg: require("../assets/images/Profile.png"),
        messageTime: "8 mins ago",
        messageText: "Hello",
    },
    {
        id: "3",
        userName: "Anuja Ingle",
        userImg: require("../assets/images/Profile.png"),
        messageTime: "1 min ago",
        messageText: "Hello",
    },
];

export default function Chat() {
    const route = useRoute();
    const navigation = useNavigation();
    // const send = () => {
    //     navigation.navigate("ChatUI", {
    //       //isbnNumber: route.params.isbnNumber,
    //       userName: {userName},
    //     }
    //     )
    // }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        });
    }, []);
    const [loaded] = useFonts({
        Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
    });
    if (!loaded) {
        return null;
    }

    //Frontend code for page
    return (
        <NativeBaseProvider>
            <View style={styles.container} backgroundColor={"#ffffff"} flex={1}>
                <FlatList
                    data={Messages}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            width={"100%"}
                            onPress={() => navigation.navigate("ChatUI",{userName:item.userName},{userImg:item.userImg})}
                        >
                            <View style={styles.UserInfo}>
                                <View padding-top={15} padding-bottom={15}>
                                    <Image
                                        source={item.userImg}
                                        width={50}
                                        height={50}
                                        top={4}
                                        border-radius={25}
                                        alt="Alternative text"
                                    />
                                </View>
                                <View style={styles.TextSection}>
                                    <View style={styles.UserInfoText}>
                                        <Text
                                            style={styles.UserName}
                                            fontFamily={"Poppins"}
                                        >
                                            {item.userName}
                                        </Text>
                                        <Text
                                            style={styles.PostTime}
                                            fontFamily={"Poppins"}
                                        >
                                            {item.messageTime}
                                        </Text>
                                    </View>
                                    <Text
                                        style={styles.MessageText}
                                        fontFamily={"Poppins"}
                                    >
                                        {item.messageText}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        
                    )}
                />
            </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        //opacity: 0.6,
        //flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: "center",
        //backgroundColor: "ffffff",
    },
    TextSection: {
        flexDirection: "column",
        justifyContent: "center",
        padding: 15,
        paddingLeft: 15,
        marginleft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    UserInfoText: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    UserName: {
        fontSize: 14,
        fontWeight: "bold",
    },
    MessageText: {
        fontSize: 14,
        color: "#333333",
    },
    UserInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    PostTime: {
        fontSize: 12,
        color: "#666",
    },
});
