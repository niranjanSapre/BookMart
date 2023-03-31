import { StyleSheet, Modal, Alert, Pressable } from "react-native";

import React, { useLayoutEffect, useState } from "react";
import {
  NativeBaseProvider,
  Button,
  Center,
  Text,
  View,
  Stack,
  Input,
  HStack,
} from "native-base";
import { useFonts } from "expo-font";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export default function GlobalModal() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
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
      {" "}
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
                  Please Enter ISBN
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
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
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
