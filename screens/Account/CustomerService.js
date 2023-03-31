import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
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

export default function CustomerService() {
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
          <VStack space={4}>
            <Text style={styles.custText} fontFamily="Poppins">
              Customer Service
            </Text>
            <Text fontFamily="Poppins" style={styles.ticketText}>
              Ticket
            </Text>
          </VStack>
        </View>
        <HStack
          space={4}
          style={{ paddingLeft: 8, marginTop: responsiveHeight(12) }}
        >
          <Text
            fontFamily="Poppins"
            //position={"absolute"}
            //left={"8%"}
            top={"3%"}
          >
            Ticket No.
          </Text>
          <View style={styles.InputName}>
            <Input
              width={"90%"}
              fontSize={responsiveFontSize(1.8)}
              fontFamily="Poppins"
              bgColor={"#FAE5DF"}
              borderColor={"#FAE5DF"}
              height={responsiveHeight(5.5)}
              variant="rounded"
              //placeholder="Name"
            />
          </View>
        </HStack>
        <HStack
          space={4}
          style={{ paddingLeft: 8, marginTop: responsiveHeight(3) }}
        >
          <Text
            fontFamily="Poppins"
            //position={"absolute"}
            //left={"8%"}
            top={"3%"}
          >
            Query type
          </Text>
          <View style={styles.InputName}>
            <Input
              width={"90%"}
              fontSize={responsiveFontSize(1.8)}
              fontFamily="Poppins"
              bgColor={"#FAE5DF"}
              borderColor={"#FAE5DF"}
              height={responsiveHeight(5.5)}
              variant="rounded"
              placeholder="Query Type"
            />
          </View>
        </HStack>
        <VStack space={4} paddingLeft={3} marginTop={4}>
          <Text
            fontFamily="Poppins"
            //position={"absolute"}
            //left={"8%"}
            top={"3%"}
          >
            Issue Description
          </Text>
          <View style={styles.InputName}>
            <TextArea
              width={"120%"}
              h={40}
              fontSize={responsiveFontSize(1.8)}
              fontFamily="Poppins"
              bgColor={"#FAE5DF"}
              borderColor={"#FAE5DF"}
              //height={responsiveHeight(27)}
              //variant=""
              rounded={6}
              placeholder="Please enter the detail description about the issue"
            />
          </View>
        </VStack>
        <Button
          style={styles.SubmitBtn}
          //onPress={() => navigation.navigate("EditProfile")}
        >
          <Text fontFamily="Poppins" fontSize={16} color="#ffffff">
            Submit
          </Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  custText: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 400,
    lineHeight: 36,
    width: responsiveWidth(100),
    left: 20,
    top: responsiveHeight(8),
  },
  ticketText: {
    fontSize: responsiveFontSize(3),
    fontWeight: 400,
    lineHeight: 36,
    width: responsiveWidth(100),
    left: 20,
    top: responsiveHeight(8),
  },
  InputName: {
    width: "80%",
    fontSize: responsiveFontSize(1.8),
    height: responsiveHeight(5.5),
  },
  SubmitBtn: {
    opacity: 0.8,
    backgroundColor: "#ED7966",
    width: responsiveWidth(35),
    height: responsiveHeight(5),
    marginTop: responsiveHeight(18),
    marginLeft: responsiveWidth(58),
  },
});
