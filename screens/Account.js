import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import {
  NativeBaseProvider,
  VStack,
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
  ScrollView,
  Pressable,
  Icon,
} from "native-base";
import { useFonts } from "expo-font";
import { Profile } from "../assets";

export default function Account() {
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
        <View top={12}>
          <HStack space={responsiveWidth(20)}>
            <Image
              source={Profile}
              alt="Alternate text"
              height={120}
              width={120}
              left={7}
            ></Image>
            <Stack space={4}>
              <Text
                marginTop={responsiveHeight(2)}
                marginLeft={responsiveWidth(6)}
                fontSize={20}
              >
                Hello! Ankit
              </Text>
              <Button
                opacity={0.8}
                backgroundColor="#ED7966"
                width={responsiveWidth(40)}
                height={responsiveHeight(5)}
                onPress={() => navigation.navigate("EditProfile")}
              >
                <Text fontFamily="Poppins" fontSize={15} color="#ffffff">
                  Edit Profile
                </Text>
              </Button>
            </Stack>
          </HStack>
        </View>
        <Button
          position="absolute"
          width={responsiveWidth(95)}
          height={responsiveHeight(8)}
          top={responsiveHeight(26)}
          marginRight={20}
          opacity={0.8}
          marginLeft={responsiveWidth(2.5)}
          rounded={0}
          backgroundColor="#ED7966"
          onPress={() => navigation.navigate("PostedProduct")}
        >
          <HStack space={40}>
            <Text
              fontFamily="Poppins"
              fontSize={22}
              left={responsiveWidth(0)}
              color="#ffffff"
            >
              Posted Product
            </Text>
            <MaterialCommunityIcons
              name="greater-than"
              size={20}
              color="#ffffff"
              top={4.5}
            />
          </HStack>
        </Button>
        <Button
          //position="absolute"
          width={responsiveWidth(95)}
          height={responsiveHeight(8)}
          top={responsiveHeight(22)}
          marginRight={20}
          opacity={0.8}
          marginLeft={responsiveWidth(2.5)}
          rounded={0}
          backgroundColor="#ED7966"
          onPress={() => navigation.navigate("MyOrder")}
        >
          <HStack space={responsiveWidth(50)}>
            <Text
              fontFamily="Poppins"
              fontSize={22}
              left={responsiveWidth(0)}
              color="#ffffff"
            >
              Your Orders
            </Text>
            <MaterialCommunityIcons
              name="greater-than"
              size={20}
              color="#ffffff"
              top={4.5}
            />
          </HStack>
        </Button>
        <Button
          //position="absolute"
          width={responsiveWidth(95)}
          height={responsiveHeight(8)}
          top={responsiveHeight(25)}
          marginRight={20}
          opacity={0.8}
          marginLeft={responsiveWidth(2.5)}
          rounded={0}
          backgroundColor="#ED7966"
          onPress={() => navigation.navigate("Settings")}
        >
          <HStack space={responsiveWidth(60)}>
            <Text
              fontFamily="Poppins"
              fontSize={22}
              left={responsiveWidth(0)}
              color="#ffffff"
            >
              Settings
            </Text>
            <MaterialCommunityIcons
              name="greater-than"
              size={20}
              color="#ffffff"
              top={4.5}
            />
          </HStack>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  acc: {
    top: responsiveHeight(3),
  },
});
