import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
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
  Pressable,
} from "native-base";
import { useFonts } from "expo-font";
import { bml, Mail, Password, Loginimg } from "../assets";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Login() {
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
        <View>
          <Circle style={styles.Circle1} />
          <Circle style={styles.Circle2} />
          <Circle style={styles.Circle3} />
        </View>
        <View>
          <Image
            position={"absolute"}
            width={60}
            height={70}
            left={responsiveWidth(80)}
            top={8}
            source={bml}
            alt="Alternate Text"
          />
        </View>
        <View>
          <Box>
            <Text style={styles.LoginText}>Welcome Back!</Text>
            <Center>
              <Image
                position={"absolute"}
                width={220}
                height={230}
                left={responsiveWidth(19)}
                top={responsiveHeight(25)}
                source={Loginimg}
                alt="Alternate Text"
              />
            </Center>
          </Box>
          <View top={responsiveHeight(55)}>
            <Stack space={2} w="70%" maxW="300px" mx={20}>
              <HStack>
                <MaterialCommunityIcons
                  name="account"
                  size={28}
                  color="black"
                  position={"absolute"}
                  left={"-20%"}
                  top={"17%"}
                  source={Mail}
                  alt="Alternate Text"
                />
                <View style={styles.InputEmail}>
                  <Input
                    width={"100%"}
                    fontSize={responsiveFontSize(1.8)}
                    fontFamily="Poppins"
                    bgColor={"#FAE5DF"}
                    borderColor={"#FAE5DF"}
                    height={responsiveHeight(5.5)}
                    variant="rounded"
                    placeholder="Enter Email "
                  />
                </View>
              </HStack>
              <HStack>
                <MaterialIcons
                  name="lock"
                  size={28}
                  color="black"
                  position={"absolute"}
                  left={"-20%"}
                  top={"17%"}
                  source={Password}
                  alt="Alternate Text"
                />
                <View style={styles.InputEmail}>
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
                </View>
              </HStack>
            </Stack>
          </View>
        </View>
        <View top={responsiveHeight(58)}>
          <HStack space={1}>
            <Text style={styles.Accounttxt} fontFamily="Poppins">
              Don't have a account?
            </Text>
            <Button
              backgroundColor={"#ffffff"}
              left={responsiveWidth(-33)}
              top={responsiveHeight(-0.5)}
              onPress={() => navigation.navigate("Register")}
            >
              <Text fontFamily="Poppins" color="#ED7966">
                Sign up
              </Text>
            </Button>
          </HStack>
        </View>
        <Text style={styles.ForgetPassword} fontFamily="Poppins">
          Forget Password?
        </Text>
        <Button
          //alignItems="center"
          //position="fixed"
          width={responsiveWidth(90)}
          height={68}
          top={responsiveHeight(65)}
          marginRight={20}
          marginLeft={responsiveWidth(5)}
          backgroundColor="#ED7966"
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <Text fontFamily="Poppins" fontSize={24} color="#ffffff">
            Login
          </Text>
        </Button>
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
    top: responsiveHeight(58),
    //alignContent: "center",
    right: responsiveWidth(-57),
  },
  LoginText: {
    textAlign: "center",
    fontSize: responsiveFontSize(3),
    fontWeight: 400,
    lineHeight: 36,
    width: responsiveWidth(100),
    marginTop: 30,
    top: responsiveHeight(25),
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
});
