import { StyleSheet, ViewBase } from "react-native";
import {
  NativeBaseProvider,
  Button,
  Center,
  Box,
  ScrollView,
  Text,
  View,
  Image,
} from "native-base";
import { Alchemist } from "../../assets";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { HStack, VStack } from "native-base";

export default function OrderDetails() {
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
      <View backgroundColor="#ffffff" flex={1}>
        <View style={{ marginTop: responsiveHeight(5), paddingLeft: 8 }}>
          <Text fontFamily="Poppins" fontSize={24}>
            Order Details
          </Text>
        </View>
        <View style={styles.container}>
          <HStack space={150}>
            <VStack space={2}>
              <Text fontFamily="Poppins">Book Name:</Text>
              <Text fontFamily="Poppins">Seller: </Text>
              <Text fontFamily="Poppins">Genre- </Text>
              <Text fontFamily="Poppins">ISBN-</Text>
              <Text fontFamily="Poppins">Price-</Text>
              <Text fontFamily="Poppins">Book condition-</Text>
            </VStack>
            <Image
              top={4}
              position={"relative"}
              borderWidth={2}
              borderColor={"#000000"}
              source={Alchemist}
              alt="Alternate Text"
            />
          </HStack>
        </View>
        <View paddingLeft={4} top={responsiveHeight(2)}>
          <Box style={styles.rectangle}>
            <View
              alignItems={"center"}
              top={4}
              paddingRight={responsiveWidth(70)}
            >
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 15,
                  backgroundColor: "green",
                }}
              ></View>
              <View
                style={{ width: 2, height: 75, backgroundColor: "black" }}
              ></View>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 15,
                  backgroundColor: "blue",
                }}
              ></View>
            </View>
            <View>
              <Text style={styles.orderText} fontFamily="Poppins">
                Ordered
              </Text>
              <Text style={styles.outText} fontFamily="Poppins">
                Out for Delivery
              </Text>
            </View>
          </Box>
        </View>
        <View paddingLeft={4} top={responsiveHeight(4)}>
          <Box style={styles.rectangle2}>
            <Text fontFamily="Poppins" opacity={0.5} left={1}>
              Shipping Details
            </Text>
            <Text style={styles.buyerName} fontFamily="Poppins">
              Niranjan Sapre
            </Text>
            <Text fontFamily="Poppins" left={2} top={2}>
              a urna. Suspendisse sagittis, est nec fermentum molestie, neque
              enim rhoncus leo pulvinar convallis a eu arcu.
            </Text>
            <Text fontFamily="Poppins" left={2} top={2}>
              Mobile No. 9503345208
            </Text>
          </Box>
        </View>
        <View marginTop={responsiveHeight(23.5)}>
          <Button.Group
            isAttached
            mx={{
              base: "auto",
              md: 0,
            }}
            size="60"
            //borderWidth={2}
          >
            <Button
              backgroundColor={"#f5f5f5"}
              width={responsiveWidth(50)}
              borderWidth={2}
              onPress={() => navigation.navigate("Support")}
            >
              <HStack>
                <Text color={"black"} fontFamily="Poppins" fontSize={22}>
                  Need Help
                </Text>
                <AntDesign name={"question"} size={24} color={"black"} />
              </HStack>
            </Button>
            <Button
              //variant="outline"
              backgroundColor={"#f5f5f5"}
              width={responsiveWidth(50)}
              borderWidth={2}
              // onPress={() => navigation.navigate("OrderSummary")}
            >
              <Text color={"black"} fontFamily="Poppins" fontSize={22}>
                Cancel
              </Text>
            </Button>
          </Button.Group>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(3),
    paddingLeft: 8,
  },
  rectangle: {
    height: 150,
    width: 350,
    borderWidth: 1,
    //backgroundColor: "salmon",
    position: "relative",
    //zIndex: 99,
  },
  rectangle2: {
    height: 150,
    width: 350,
    borderWidth: 1,
    //backgroundColor: "salmon",
    position: "relative",
    zIndex: 99,
  },
  orderText: {
    fontSize: responsiveFontSize(2.5),
    //fontWeight: 400,
    //lineHeight: 36,
    //width: responsiveWidth(100),
    left: 60,
    top: responsiveHeight(-12.3),
  },
  outText: {
    fontSize: responsiveFontSize(2.5),
    left: 60,
    top: responsiveHeight(-3),
  },
  buyerName: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 400,
    left: 4,
    top: 4,
  },
});