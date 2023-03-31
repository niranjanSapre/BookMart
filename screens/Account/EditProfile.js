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

export default function EditProfile() {
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
          <Text style={styles.settingText} fontFamily="Poppins">
            Edit Profile
          </Text>
        </View>
        <View style={styles.img}>
          <Image
            source={Profile}
            alt="Alternate text"
            height={120}
            width={120}
            left={7}
          ></Image>
        </View>
        <HStack space={4} paddingLeft={3} marginTop={4}>
          <Text
            fontFamily="Poppins"
            //position={"absolute"}
            //left={"8%"}
            top={"3%"}
          >
            Name
          </Text>
          <View style={styles.InputName}>
            <Input
              width={"100%"}
              fontSize={responsiveFontSize(1.8)}
              fontFamily="Poppins"
              bgColor={"#FAE5DF"}
              borderColor={"#FAE5DF"}
              height={responsiveHeight(5.5)}
              variant="rounded"
              placeholder="Name"
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
            Address
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
              placeholder="Enter Address"
            />
          </View>
        </VStack>
        <Button
          position="absolute"
          width={responsiveWidth(95)}
          height={responsiveHeight(8)}
          top={responsiveHeight(68)}
          marginRight={20}
          opacity={0.8}
          marginLeft={responsiveWidth(2.5)}
          rounded={0}
          backgroundColor="#ED7966"
          //onPress={() => navigation.navigate("HomeScreen")}
        >
          <HStack space={responsiveWidth(46)}>
            <Text
              fontFamily="Poppins"
              fontSize={22}
              left={responsiveWidth(0)}
              color="#ffffff"
            >
              Change Email
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
          position="absolute"
          width={responsiveWidth(95)}
          height={responsiveHeight(8)}
          top={responsiveHeight(80)}
          marginRight={20}
          opacity={0.8}
          marginLeft={responsiveWidth(2.5)}
          rounded={0}
          backgroundColor="#ED7966"
          //onPress={() => navigation.navigate("HomeScreen")}
        >
          <HStack space={responsiveWidth(34)}>
            <Text
              fontFamily="Poppins"
              fontSize={22}
              left={responsiveWidth(0)}
              color="#ffffff"
            >
              Change Password
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
  settingText: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 400,
    lineHeight: 36,
    width: responsiveWidth(100),
    left: 20,
    top: responsiveHeight(8),
  },
  img: {
    marginTop: responsiveHeight(10),
    //justifyContent: "center",
    //alignContent: "center",
    paddingRight: 50,
    alignItems: "center",
  },
  InputName: {
    width: "80%",
    fontSize: responsiveFontSize(1.8),
    height: responsiveHeight(5.5),
  },
});
