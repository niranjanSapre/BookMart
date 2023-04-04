import { StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useLayoutEffect } from "react";


import {
    VStack,
    HStack,
    Image,
    Text,
    View,
    NativeBaseProvider,
    Button,
    Input,
    TextArea,
  } from "native-base";
  import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize,
  } from "react-native-responsive-dimensions";

export default function Support() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

    return (
      <NativeBaseProvider>
        <View backgroundColor={"#ffffff"} flex={1}>
          <View >
            <Text style={styles.SupportText} fontFamily="Poppins">
              BookMart Support
            </Text>
          </View>
         
            <Text fontFamily="Poppins" style={styles.ParaText}>
            a urna. Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu. a urna. Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu.a urna. Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu.a urna. Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu.a urna. Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu.a urna. Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu.AAAAA
</Text>     
       
    </View>
    </NativeBaseProvider>

);
}

const styles = StyleSheet.create({
SupportText: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 400,
    lineHeight: 36,
    width: responsiveWidth(100),
    left: 20,
    top: responsiveHeight(8),
  },
  ParaText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 300,
    lineHeight: 20,
    width: responsiveWidth(90),
    left: 20,
    top: responsiveHeight(6),
    marginTop:responsiveWidth(18),
  },
});