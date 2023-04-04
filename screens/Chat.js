import { StyleSheet, Modal, Alert, Pressable, FlatList
 } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
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

const Messages=[
  {
    id:'1',
    userName:'Ankit Singh',
    userImg:require('../assets/images/Profile.png'),
    messageTime:'4 mins ago',
    messageText:'Hello',
  },
  {
    id:'2',
    userName:'Aditya Pandit',
    userImg:require('../assets/images/Profile.png'),
    messageTime:'8 mins ago',
    messageText:'Hello',
  },
  {
    id:'3',
    userName:'Anuja Ingle',
    userImg:require('../assets/images/Profile.png'),
    messageTime:'1 min ago',
    messageText:'Hello',
  }
]

export default function Chat() {
    const navigation = useNavigation();
useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
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
          <View>
            <FlatList
            data={Messages}
            keyExtractor={item=>item.id}
            renderItem={({item})=>(
              <View>
                <Text>
                  {item.userName}
                </Text>
                </View>
            )}
            />
          </View>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    Circle1: {
        position: "absolute",
        width: 331,
        height: 322,
        left: -117,
        top: -111,
        backgroundColor: "#ED7966",
        opacity: 0.7,
    },
    Circle2: {
        position: "absolute",
        width: 169,
        height: 167,
        left: 107,
        top: -54,
        backgroundColor: "#FAE5DF",
        opacity: 0.6,
    },
    Circle3: {
        position: "absolute",
        width: 88,
        height: 85,
        left: -40,
        top: 169,
        backgroundColor: "#F5CAC2",
        opacity: 0.87,
    },
    ForgetPassword: {
        top: responsiveHeight(21),
        textAlign: "right",
        //alignContent: "center",
        right: responsiveWidth(8),
    },
    LoginText: {
        textAlign: "center",
        fontSize: responsiveFontSize(3),
        fontWeight: 400,
        lineHeight: 36,
        width: responsiveWidth(100),
        marginTop: 30,
        top: responsiveHeight(26),
        fontFamily: "Poppins",
    },
    InputEmail: {
        width: "100%",
        fontSize: responsiveFontSize(1.8),

        height: responsiveHeight(5.5),
    },
    Accounttxt: {
        textAlign: "center",
        fontSize: responsiveFontSize(1.8),
        fontWeight: 400,
        lineHeight: 36,
        width: responsiveWidth(100),
        //marginTop: 0.2,
        left: -20,
        //height={0}
        //marginRight={responsiveWidth(9)}
        //top: responsiveHeight(2.5),
    },
    container: {
        //opacity: 0.6,
        flex: 1,
        backgroundColor: "#FFFFFF95",
        alignItems: "center",
        justifyContent: "center",
    },
    InputName: {
        width: responsiveWidth(71),
        fontSize: responsiveFontSize(1.5),
        lineHeight: 36,
        paddingTop: 10,
        //height: responsiveHeight(),
        opacity: 0.7,
    },
    modalView: {
        //opacity: 0.95,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        top: responsiveHeight(2),
        width: responsiveWidth(35),
        height: responsiveHeight(4),
        borderRadius: 5,
        padding: 4,
        elevation: 12,
    },
    buttonClose: {
        backgroundColor: "#ED7966",
    },
    modalText: {
        //marginBotttom: 15,
        textAlign: "center",
        fontWeight: "bold",
    },
    okText: {
        textAlign: "center",
        color: "white",
    },
});
