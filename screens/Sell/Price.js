import {
  StyleSheet,
  Modal,
  Alert,
  Pressable,
  Switch,
  Checkbox,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
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
  Text,
  View,
  Stack,
  Input,
  HStack,
  VStack,
} from "native-base";
import { useFonts } from "expo-font";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
//import { color } from "native-base/lib/typescript/theme/styled-system";

export default function Price() {
  const navigation = useNavigation();
  const route = useRoute();
  const [viewEnabled, setViewEnabled] = useState("none");
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isbnNumber, setisbnNumber] = useState("");
  const [text, setText] = useState(
    "This Price is based on Your Book Condition"
  );
  const [estPrice, setEstPrice] = useState("");
  //const [isSelected, setSelection] = useState(true);
  const send = () => {
    if (estPrice === "") {
      setText("Please enter price");
      setModalVisible(true);
      return;
    }

    navigation.navigate("ReviewPage", {
      isbnNumber: route.params.isbnNumber,
      bookName: route.params.bookName,
      pages: route.params.pages,
      medium: route.params.medium,
      authorName: route.params.authorName,
      genre: route.params.genre,
      fcover: route.params.fcover,
      bcover: route.params.bcover,
      Page1: route.params.Page1,
      Page2: route.params.Page2,
      Page3: route.params.Page3,
    });
    // console.log(route.params.genre);
  };

  // const handleCheckBox = (isChecked)=>{
  //   if(isChecked==true)
  //   {
  //     setChecked(false);
  //   }
  //   if(isChecked==false)
  //   {
  //     setChecked(true);
  //   }
  // }
  const handleChange = () => {
    if (!isEnabled) {
      setViewEnabled("flex");
    } else {
      setViewEnabled("none");
    }
  };
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
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

  const combinedFunction = () => {
    setText("This Price is based on Your Book Condition");
    setModalVisible(false);
  };

  return (
    <NativeBaseProvider>
      <View backgroundColor={"#ffffff"} flex={1}>
        <View top={50}>
          <Center>
            <Progress.Bar progress={0.8} width={350} color={"#ED7966"} />
          </Center>
        </View>
        <Text style={styles.priceText} fontFamily="Poppins">
          Price
        </Text>

        <View style={styles.tooltip} left={35}>
          <Stack space={2} w="80%" maxW="300px" mx={20}>
            <HStack space={2.5}>
              <View style={styles.container}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onResquestClose={() => {
                    Alert.alert("Modal has been closed");
                  }}
                >
                  <View style={styles.container}>
                    <View style={styles.modalView}>
                      <Text fontFamily={"Poppins"} textAlign="center">
                        {text}
                      </Text>
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => combinedFunction()}
                      >
                        <Text fontFamily={"Poppins"} style={styles.okText}>
                          ok
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
                <Pressable onPress={() => setModalVisible(true)}>
                  <Foundation name="info" size={24} color="#ed7966" />
                </Pressable>
              </View>
              <View style={styles.EstTxt}>
                <Text fontFamily={"Poppins"}>Estimated Price -</Text>
              </View>
              <View>
                <View left={5} style={styles.EstPrice}>
                  <Input
                    fontFamily="Poppins"
                    bgColor={"#FAE5DF"}
                    borderColor={"#FAE5DF"}
                    variant="rounded"
                    onChangeText={(name) => setEstPrice(name)}
                  />
                </View>
              </View>
            </HStack>

            <HStack alignItems="center" space={4}>
              <Text fontSize={responsiveFontSize(1.8)} fontFamily={"Poppins"}>
                {" "}
                I want to set Price
              </Text>
              <Switch
                trackColor={{ true: "#ed7966", false: "lightgrey" }}
                thumbColor={"white"}
                //size="md"
                onValueChange={toggleSwitch}
                value={isEnabled}
                onChange={handleChange}
              />
            </HStack>
            <HStack space={2.5}>
              <View display={viewEnabled} style={styles.EstTxt}>
                <Text fontFamily={"Poppins"}>Desired Price -</Text>
              </View>

              <View display={viewEnabled} style={styles.EstPrice}>
                <Input
                  fontFamily="Poppins"
                  bgColor={"#FAE5DF"}
                  borderColor={"#FAE5DF"}
                  variant="rounded"
                />
              </View>
            </HStack>
            {/* <Checkbox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />
            <Text fontFamily={"Poppins"}>
              I want to list the book for rent also
            </Text> */}
          </Stack>
        </View>

        <Button style={styles.next} backgroundColor="#ED7966" onPress={send}>
          <Text fontFamily="Poppins" fontSize={24} color="#ffffff">
            Review
          </Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  next: {
    position: "absolute",
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    marginTop: responsiveHeight(93),
    marginRight: 20,
    marginLeft: 20,
  },
  priceText: {
    //textAlign:"left",
    fontSize: responsiveFontSize(3.5),
    fontWeight: 400,
    lineHeight: 36,
    width: responsiveWidth(100),
    //marginTop:20,
    left: 20,
    top: responsiveHeight(13),
  },
  tooltip: {
    top: responsiveHeight(16),
    left: responsiveWidth(-15),
  },
  EstTxt: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: 400,
    lineHeight: 36,
    //width:responsiveWidth(100),
    marginRight: -10,
    top: responsiveHeight(1),
  },
  EstPrice: {
    top: responsiveHeight(-0.8),
    width: responsiveWidth(35),
    fontSize: responsiveFontSize(1.8),
    opacity: 0.7,
    height: responsiveHeight(5),
  },
  container: {
    //opacity:0.6,
    flex: 1,
    backgroundColor: "#FFFFFF95",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    //opacity:0.95,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    top: responsiveHeight(2),
    width: responsiveWidth(35),
    height: responsiveHeight(4),
    borderRadius: 5,
    padding: 4,
    elevation: 12,
  },
  buttonClose: {
    backgroundColor: "#ED7966",
  },
  modalText: {
    //marginBotttom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  okText: {
    textAlign: "center",
    color: "white",
  },
});