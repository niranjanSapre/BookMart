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
import { SellPage } from "../../assets";

const StartSellingPage = () => {
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
        <View>
          <Center>
            <Image
              position={"absolute"}
              width={250}
              height={250}
              left={responsiveWidth(19)}
              top={responsiveHeight(30)}
              source={SellPage}
              alt="Alternate Text"
            />
          </Center>
        </View>
        <Button
          //alignItems="center"
          //position="fixed"
          width={250}
          height={39}
          top={responsiveHeight(65)}
          marginRight={20}
          marginLeft={responsiveWidth(19)}
          backgroundColor="#ED7966"
          onPress={() => navigation.navigate("SellPageGenre")}
        >
          <Text fontFamily="Poppins" fontSize={14} color="#ffffff">
            Start Selling Now!
          </Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
};

export default StartSellingPage;

const styles = StyleSheet.create({});
