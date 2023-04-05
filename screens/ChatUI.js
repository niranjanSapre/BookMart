import { StyleSheet, Modal, Alert, Pressable, FlatList } from "react-native";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import React, { useLayoutEffect, useState, useCallback, useEffect } from "react";
//import { MaterialCommunityIcons } from "@expo/vector-icons";
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
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
//import { background } from "native-base/lib/typescript/theme/styled-system";
import { setStatusBarBackgroundColor } from "expo-status-bar";
export default function ChatUI() {
  //const route = useRoute();
    const navigation = useNavigation();
    const [messages, setMessages] = useState([]);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true,
        });
    }, []);
  //   const [loaded] = useFonts({
  //     Poppins: require("../assets/fonts/Poppins-Regular.ttf"),
  // });
  // if (!loaded) {
  //     return null;
  // }
    // useEffect(() => {
    //   navigation.setOptions({
    //     title: route.params.userName,
    //   });
    // }, [route.params.userName, navigation]);
   
    

    useEffect(() => {
      setMessages([
        {
          _id: 1,
          text: 'Book Mart',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://plus.unsplash.com/premium_photo-1677151193419-9be7a26c02cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
          },
        },
      ])
    }, [])
  
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])
     const renderBubble=(props)=>{
        return(
        <Bubble
        {...props}
        wrapperStyle={{
            right:{
                backgroundColor:"#ed7966"
            }
        }}
        textStyle={{
            right:{
                color:"#ffffff"
            }
        }}
        />
        )
     }
     const renderSend=(props)=>{
        return(
            <Send {...props}>
                <View>
                    <MaterialCommunityIcons name="send-circle" size={32} color={"#ed7966"} style={{marginBottom:5, marginRight:5}}/>
                </View>
            </Send>
        )
     }
     const scrollToBottomComponent=()=>{
        return(
            <FontAwesome name="angle-double-down" size={22} color={"black"}/>
        )
     }
  return (
    <NativeBaseProvider>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend  
      renderSend={renderSend}
      scrollToBottom={true}
      
      isTyping
      //minComposerHeight={10}
      keyboardShouldPersistTaps="never"
     placeholder="Message"
      scrollToBottomComponent={scrollToBottomComponent}
    />
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({})