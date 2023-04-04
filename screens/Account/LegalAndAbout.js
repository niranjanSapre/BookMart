import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { Profile } from "../../assets";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  VStack,
  HStack,
  Image,
  Box,
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

export default function LegalAndAbout() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [loaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  return (
    <NativeBaseProvider>

      <View backgroundColor={"#ffffff"} flex={1}>
      <View style={styles.img}>

        <View >
          <Text style={styles.SupportText} fontFamily="Poppins">
            About Us
          </Text>
        </View>

        <Text fontFamily="Poppins" style={styles.ParaText}>
          a urna. Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu. a urna. Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu.a urna. Suspendisse sagittis, est nec fermentum molestie, neque enim rhoncus leo pulvinar convallis a eu arcu.a urna.
        </Text>

        <View>
          <Text style={styles.settingText} fontFamily="Poppins">
            Team
          </Text>
        </View>
          {/* <HStack space={4} paddingLeft={3} marginTop={4}></HStack> */}

          <HStack space={1} paddingLeft={0} marginTop={-6}>

            <VStack space={4} paddingLeft={0} marginTop={0}>
              <View>
                <Image
                  source={Profile}
                  alt="Alternate text"
                  height={120}
                  width={120}
                  left={10}
                ></Image>
                <Text style={styles.NameLText} fontFamily="Poppins">
                  Ankit Singh
                </Text>
                <Text fontFamily="Poppins" style={styles.IdLText}>
                  CEO at BookMart
                </Text>
              </View>
            </VStack>

            <VStack space={4} paddingLeft={2} marginTop={0}>
              <View>
                <Image
                  source={Profile}
                  alt="Alternate text"
                  height={120}
                  width={120}
                  left={20}
                ></Image>
                <Text style={styles.NameRText} fontFamily="Poppins">
                  Aditya Pandit
                </Text>
                <Text fontFamily="Poppins" style={styles.IdRText}>
                  CTO at BookMart
                </Text>
              </View>
            </VStack>

          </HStack>

          <HStack space={1} paddingLeft={0} marginTop={1}>
  
            <VStack space={4} paddingLeft={0} marginTop={5}>
             <View>
              <Image
                source={Profile}
                alt="Alternate text"
                height={120}
                width={120}
                left={12}
              ></Image>
                <Text style={styles.NameLText} fontFamily="Poppins">
                  Anuja Ingle
                </Text>
                <Text fontFamily="Poppins" style={styles.IdLText}>
                  CPO at BookMart
                </Text>
              </View>
            </VStack>

            <VStack space={4} paddingLeft={2} marginTop={5}>
              <View>
               <Image
                source={Profile}
                alt="Alternate text"
                height={120}
                width={120}
                left={20}
               ></Image>
                <Text style={styles.NameRText} fontFamily="Poppins">
                  Niranjan Sapre
                </Text>
                <Text fontFamily="Poppins" style={styles.IdRText}>
                  CMO at BookMart
                </Text>
              </View>
            </VStack>

          </HStack>

          </View>

        </View>
    </NativeBaseProvider >
  );
}
 
const styles = StyleSheet.create({
  settingText: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 400,
    lineHeight: 65,
    width: responsiveWidth(100),
    left: 20,
    marginTop:responsiveHeight(1),
  },
  img: {
    marginTop: responsiveHeight(1),
    // justifyContent: "center",
    //alignContent: "center",
    // paddingRight: 50,
    // alignItems: "center",
  },
  SupportText: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 400,
    lineHeight: 30,
    width: responsiveWidth(100),
    left: 20,
    top: responsiveHeight(8),
  },
  ParaText: {
    fontSize: responsiveFontSize(2),
    fontWeight: 300,
    lineHeight: 22,
    width: responsiveWidth(90),
    left: 20,
    top: responsiveHeight(0.5),
    marginTop: responsiveWidth(18),
  },
  NameLText: {
    fontSize: responsiveFontSize(2),
    lineHeight: 20,
    left: 60,
    top: responsiveHeight(0),
    marginTop: responsiveWidth(1),
  },
  NameRText: {
    fontSize: responsiveFontSize(2),
    lineHeight: 20,
    left: 85,
    top: responsiveHeight(0),
    marginTop: responsiveWidth(1),
  },
  IdLText: {
    fontSize: responsiveFontSize(1.5),
    lineHeight: 15,
    left: 55,
    top: responsiveHeight(1),
    marginTop: responsiveWidth(0),
  },
  IdRText: {
    fontSize: responsiveFontSize(1.5),
    lineHeight: 15,
    left: 90,
    top: responsiveHeight(1),
    marginTop: responsiveWidth(0),
  },
  LoginBtn: {
    width: responsiveWidth(90),
    height: 68,
    marginTop: responsiveHeight(4),
    marginRight: 20,
    marginLeft: 20,
    backgroundColor: "#ED7966",
  },

});