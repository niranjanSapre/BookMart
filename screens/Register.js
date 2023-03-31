import React, { useLayoutEffect } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
} from "native-base";
import { useFonts } from "expo-font";
import { bml, Name, Phone, Mail, Password, Cpassword } from "../assets";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
export default function Register() {
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
  return (
    <NativeBaseProvider>
      <View backgroundColor={"#ffffff"} flex={1}>
        {/* Circle View */}
        <View>
          <Circle
            position={"absolute"}
            width={331}
            height={322}
            left={-117}
            top={-111}
            backgroundColor={"#ED7966"}
            opacity={0.7}
          />
          <Circle
            position={"absolute"}
            width={169}
            height={167}
            left={107}
            top={-54}
            backgroundColor={"#FAE5DF"}
            opacity={0.6}
          />
          <Circle
            position={"absolute"}
            width={88}
            height={85}
            left={-40}
            top={169}
            backgroundColor={"#F5CAC2"}
            opacity={0.87}
          />
        </View>
        {/* <View backgroundColor={"black"}>
          <Image
            position={"absolute"}
            width={60}
            height={70}
            left={responsiveWidth(80)}
            top={8}
            source={bml}
            alt="Alternate Text"
          />
        </View> */}
        <View top={responsiveHeight(32)}>
          <Text
            textAlign="center"
            fontSize={responsiveFontSize(3)}
            fontWeight={400}
            //lineHeight={36}
            width={responsiveWidth(100)}
            //marginTop={30}
            //top={responsiveHeight(29)}
            fontFamily="Poppins"
          >
            Hello! Welcome Onboard!
          </Text>
          <Text
            textAlign="center"
            fontSize={responsiveFontSize(2)}
            fontWeight={400}
            lineHeight={36}
            width={responsiveWidth(100)}
            //marginTop={0.2}
            //top={responsiveHeight(29)}
            fontFamily="Poppins"
          >
            Let's get you register to BookMart
          </Text>
        </View>
        {/* Input View for Registeration */}
        <View top={responsiveHeight(35)}>
          <Stack space={2} w="70%" maxW="300px" mx={20}>
            <HStack>
              <MaterialCommunityIcons
                name="account"
                size={28}
                color={"black"}
                position={"absolute"}
                left={"-20%"}
                top={"17%"}
                source={Name}
                alt="Alternate Text"
              />
              <Input
                width={"100%"}
                fontSize={responsiveFontSize(1.8)}
                fontFamily="Poppins"
                bgColor={"#FAE5DF"}
                borderColor={"#FAE5DF"}
                height={responsiveHeight(5.5)}
                variant="rounded"
                placeholder="Enter your full name"
              />
            </HStack>
            <HStack>
              <MaterialIcons
                name="call"
                size={28}
                color={"black"}
                position={"absolute"}
                left={"-20%"}
                top={"17%"}
                source={Phone}
                alt="Alternate Text"
              />
              <Input
                width={"100%"}
                fontSize={responsiveFontSize(1.8)}
                fontFamily="Poppins"
                bgColor={"#FAE5DF"}
                borderColor={"#FAE5DF"}
                height={responsiveHeight(5.5)}
                variant="rounded"
                placeholder="Enter your Mobile Number"
              />
            </HStack>
            <HStack>
              <MaterialCommunityIcons
                name="email"
                size={28}
                color={"black"}
                position={"absolute"}
                left={"-20%"}
                top={"17%"}
                source={Mail}
                alt="Alternate Text"
              />
              <Input
                width={"100%"}
                fontSize={responsiveFontSize(1.8)}
                fontFamily="Poppins"
                bgColor={"#FAE5DF"}
                borderColor={"#FAE5DF"}
                height={responsiveHeight(5.5)}
                variant="rounded"
                placeholder="Enter your email"
              />
            </HStack>
            <HStack>
              <MaterialIcons
                name="lock"
                size={28}
                color={"black"}
                position={"absolute"}
                left={"-20%"}
                top={"17%"}
                source={Password}
                alt="Alternate Text"
              />
              <Input
                width={"100%"}
                fontSize={responsiveFontSize(1.8)}
                fontFamily="Poppins"
                bgColor={"#FAE5DF"}
                borderColor={"#FAE5DF"}
                height={responsiveHeight(5.5)}
                variant="rounded"
                placeholder="Enter password"
              />
            </HStack>
            <HStack>
              <MaterialCommunityIcons
                name="lock-check"
                size={28}
                color={"black"}
                position={"absolute"}
                left={"-20%"}
                top={"17%"}
                source={Cpassword}
                alt="Alternate Text"
              />
              <Input
                width={"100%"}
                fontSize={responsiveFontSize(1.8)}
                fontFamily="Poppins"
                bgColor={"#FAE5DF"}
                borderColor={"#FAE5DF"}
                height={responsiveHeight(5.5)}
                variant="rounded"
                placeholder="Confirm password"
              />
            </HStack>
          </Stack>
        </View>
        <View top={responsiveHeight(40)}>
          <HStack space={1}>
            <Text style={styles.Accounttxt} fontFamily="Poppins">
              Already have a account?
            </Text>
            <Button
              backgroundColor={"#ffffff"}
              left={responsiveWidth(-33)}
              top={responsiveHeight(-0.5)}
              onPress={() => navigation.navigate("Login")}
            >
              <Text fontFamily="Poppins" color="#ED7966">
                Sign in
              </Text>
            </Button>
          </HStack>
        </View>
        <Button
          //alignItems="center"
          //position="fixed"
          width={responsiveWidth(90)}
          height={68}
          top={responsiveHeight(48)}
          marginRight={20}
          marginLeft={responsiveWidth(5)}
          backgroundColor="#ED7966"
          onPress={() => navigation.navigate("Login")}
        >
          <Text fontFamily="Poppins" fontSize={24} color="#ffffff">
            Register
          </Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
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
});
