import { StyleSheet, Modal, Alert, Pressable } from "react-native";

import React, { useLayoutEffect, useState } from "react";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { Foundation } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  NativeBaseProvider,
  Text,
  View,
  Image,
  Button,
  Stack,
  VStack,
  HStack,
  Input,
  ScrollView,
} from "native-base";
import { useFonts } from "expo-font";
import { Alchemist } from "../../assets";

export default function GenreFilter() {
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
        <View marginTop={responsiveHeight(5)} left={-60}>
          <Stack space={2} w="80%" maxW="300px" mx={20}>
            <HStack space={2.5}>
              <Input
                width={"105%"}
                fontSize={responsiveFontSize(1.8)}
                fontFamily="Poppins"
                bgColor={"#FAE5DF"}
                borderColor={"#ed7966"}
                height={responsiveHeight(5.5)}
                variant="rounded"
                placeholder="Search Novels, Comic, Biography,.."
                defaultValue="Novel"
              />
              <FontAwesome
                marginTop={responsiveHeight(1.2)}
                name="microphone"
                size={responsiveFontSize(3)}
                color="black"
              />
            </HStack>
          </Stack>
        </View>
        <ScrollView marginTop={responsiveHeight(3)}>
          <View>
            <VStack>
              <HStack>
                <View style={styles.container1}>
                  <View top={responsiveHeight(2)}>
                    <Image
                      //position={"relative"}
                      left={2}
                      borderWidth={2}
                      borderColor={"#000000"}
                      source={Alchemist}
                      alt="Alternate Text"
                    />
                    <View top={2}>
                      <Text fontFamily="Poppins" left={2}>
                        Alchemist
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Genre-Novel
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Price- $55
                      </Text>
                    </View>
                    <Button
                      style={styles.buyBtn}
                      //onPress={() => navigation.navigate("EditProfile")}
                    >
                      <Text fontFamily="Poppins" fontSize={14}>
                        Buy Now
                      </Text>
                    </Button>
                  </View>
                </View>
                <View style={styles.container2}>
                  <View top={responsiveHeight(2)}>
                    <Image
                      //position={"relative"}
                      left={2}
                      borderWidth={2}
                      borderColor={"#000000"}
                      source={Alchemist}
                      alt="Alternate Text"
                    />
                    <View top={2}>
                      <Text fontFamily="Poppins" left={2}>
                        Alchemist
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Genre-Novel
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Price- $55
                      </Text>
                    </View>
                    <Button
                      style={styles.buyBtn}
                      //onPress={() => navigation.navigate("EditProfile")}
                    >
                      <Text fontFamily="Poppins" fontSize={14}>
                        Buy Now
                      </Text>
                    </Button>
                  </View>
                </View>
              </HStack>
              <HStack>
                <View style={styles.container1}>
                  <View top={responsiveHeight(2)}>
                    <Image
                      //position={"relative"}
                      left={2}
                      borderWidth={2}
                      borderColor={"#000000"}
                      source={Alchemist}
                      alt="Alternate Text"
                    />
                    <View top={2}>
                      <Text fontFamily="Poppins" left={2}>
                        Alchemist
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Genre-Novel
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Price- $55
                      </Text>
                    </View>
                    <Button
                      style={styles.buyBtn}
                      //onPress={() => navigation.navigate("EditProfile")}
                    >
                      <Text fontFamily="Poppins" fontSize={14}>
                        Buy Now
                      </Text>
                    </Button>
                  </View>
                </View>
                <View style={styles.container2}>
                  <View top={responsiveHeight(2)}>
                    <Image
                      //position={"relative"}
                      left={2}
                      borderWidth={2}
                      borderColor={"#000000"}
                      source={Alchemist}
                      alt="Alternate Text"
                    />
                    <View top={2}>
                      <Text fontFamily="Poppins" left={2}>
                        Alchemist
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Genre-Novel
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Price- $55
                      </Text>
                    </View>
                    <Button
                      style={styles.buyBtn}
                      //onPress={() => navigation.navigate("EditProfile")}
                    >
                      <Text fontFamily="Poppins" fontSize={14}>
                        Buy Now
                      </Text>
                    </Button>
                  </View>
                </View>
              </HStack>
              <HStack>
                <View style={styles.container3}>
                  <View top={responsiveHeight(2)}>
                    <Image
                      //position={"relative"}
                      left={2}
                      borderWidth={2}
                      borderColor={"#000000"}
                      source={Alchemist}
                      alt="Alternate Text"
                    />
                    <View top={2}>
                      <Text fontFamily="Poppins" left={2}>
                        Alchemist
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Genre-Novel
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Price- $55
                      </Text>
                    </View>
                    <Button
                      style={styles.buyBtn}
                      //onPress={() => navigation.navigate("EditProfile")}
                    >
                      <Text fontFamily="Poppins" fontSize={14}>
                        Buy Now
                      </Text>
                    </Button>
                  </View>
                </View>
                <View style={styles.container4}>
                  <View top={responsiveHeight(2)}>
                    <Image
                      //position={"relative"}
                      left={2}
                      borderWidth={2}
                      borderColor={"#000000"}
                      source={Alchemist}
                      alt="Alternate Text"
                    />
                    <View top={2}>
                      <Text fontFamily="Poppins" left={2}>
                        Alchemist
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Genre-Novel
                      </Text>
                      <Text fontFamily="Poppins" left={2}>
                        Price- $55
                      </Text>
                    </View>
                    <Button
                      style={styles.buyBtn}
                      //onPress={() => navigation.navigate("EditProfile")}
                    >
                      <Text fontFamily="Poppins" fontSize={14}>
                        Buy Now
                      </Text>
                    </Button>
                  </View>
                </View>
              </HStack>
            </VStack>
          </View>
        </ScrollView>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  novelText: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 400,
    lineHeight: 36,
    width: responsiveWidth(100),
    left: 20,
    top: responsiveHeight(8),
  },
  container1: {
    // top: responsiveHeight(10),
    alignContent: "center",
    alignItems: "center",
    marginLeft: responsiveWidth(3),
    width: 180,
    height: 300,
    borderWidth: 1.5,
    borderBottomWidth: 0,
  },
  container2: {
    //top: responsiveHeight(10),
    alignContent: "center",
    alignItems: "center",
    width: 180,
    height: 300,
    borderWidth: 1.5,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  container3: {
    // top: responsiveHeight(10),
    alignContent: "center",
    alignItems: "center",
    marginLeft: responsiveWidth(3),
    width: 180,
    height: 300,
    borderWidth: 1.5,
    // borderBottomWidth: 0,
  },
  container4: {
    //top: responsiveHeight(10),
    alignContent: "center",
    alignItems: "center",
    width: 180,
    height: 300,
    borderWidth: 1.5,
    borderLeftWidth: 0,
    //borderBottomWidth: 0,
  },

  buyBtn: {
    //opacity: 0.8,
    backgroundColor: "#ED7966",
    width: responsiveWidth(35),
    height: responsiveHeight(5),
    borderWidth: 1,
    top: responsiveHeight(3),
    // marginLeft: responsiveWidth(58),
  },
});