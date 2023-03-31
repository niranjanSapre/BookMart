import { NativeBaseProvider, Text, View, Button, Center } from "native-base";
import { StyleSheet, Modal, Alert, Pressable } from "react-native";
import { useFonts } from "expo-font";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import DropDownPicker from "react-native-dropdown-picker";
export default function SellPageGenre() {
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentValue, setCurrentValue] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  const send = () => {
    if (currentValue.length === 0) {
      setModalVisible(true);
      return;
    }
    navigation.navigate("ISBNPage", {
      genre: currentValue,
    });
    //console.log(currentValue);
  };
  const [loaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }

  const items = [
    { label: "Sci-fi", value: "Science-Fiction" },
    { label: "Mythology", value: "Mythology " },
    { label: "Novel", value: "Novel" },
    { label: "Poetry", value: "Poetry" },
    { label: "Fantasy", value: "Fantasy " },
    { label: "Horror", value: "Horror" },
    { label: "Narrative", value: "Narrative" },
    { label: "Adventures", value: "Adventures" },
    { label: "Mystery", value: "Mystery" },
    { label: "Biography", value: "Biography" },
    { label: "Thriller", value: "Thriller" },
    { label: "Romance", value: "Romance" },
    { label: "Self-Help", value: "Self-Help" },
  ];

  return (
    <NativeBaseProvider>
      <View backgroundColor={"#ffffff"} flex={1}>
        <View top={50}>
          <Center>
            <Progress.Bar progress={0.14} width={350} color={"#ED7966"} />
          </Center>
        </View>
        <View>
          <Text style={styles.isbnText} fontFamily="Poppins">
            Select Book Genre
          </Text>
        </View>
        <View style={styles.dropdown}>
          <DropDownPicker
            itemStyle={{ fontFamily: "Poppins" }}
            items={items}
            open={isOpen}
            setOpen={() => setIsOpen(!isOpen)}
            value={currentValue}
            setValue={(val) => setCurrentValue(val)}
            maxHeight={550}
            autoScroll={true}
            placeholder="Select Your Genre"
            //placeholderStyle={{ fontWeight: "bold", fontSize: 16 }}
            showTickIcon={true}
            showArrowIcon={true}
            disableBorderRadius={false}
            theme="LIGHT"
            multiple={true}
            min={1}
            max={5}
            mode="BADGE"
            badgeColors={["#ED7966"]}
            badgeDotColors={["white"]}
            badgeTextStyle={{ color: "white" }}
          />
        </View>

        <View style={styles.tooltip} left={35}>
          <View style={styles.container} backgroundColor={"amber.300"}>
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
                    Please Select Book Genre
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text fontFamily={"Poppins"} style={styles.okText}>
                      ok
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
          </View>
        </View>

        <Button style={styles.next} backgroundColor="#ED7966" onPress={send}>
          <Text fontFamily="Poppins" fontSize={24} color="#ffffff">
            Next
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
    //elevation: 10,
  },
  isbnText: {
    //textAlign:"left",
    fontSize: responsiveFontSize(3.5),
    fontWeight: 400,
    lineHeight: 36,
    width: responsiveWidth(100),
    //marginTop:20,
    left: 20,
    top: responsiveHeight(13),
  },
  dropdown: {
    padding: 30,
    top: responsiveHeight(12),
  },
  container: {
    //opacity: 0.6,
    flex: 1,
    backgroundColor: "#FFFFFF95",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    //opacity: 0.95,
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
