import { StyleSheet } from "react-native";
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
import { useFonts } from "expo-font";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { HStack, VStack } from "native-base";

export default function Buy1() {
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
            Alchemist
          </Text>
        </View>
        <View style={styles.container}>
          <HStack space={150}>
            <VStack space={2}>
              <Text fontFamily="Poppins">Author Name:</Text>
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
        <View>
          <Text
            fontSize={responsiveFontSize(2.5)}
            fontWeight={400}
            lineHeight={36}
            width={responsiveWidth(100)}
            marginTop={5}
            marginLeft={3}
            fontFamily="Poppins"
          >
            Book Images
          </Text>
          <Box>
            <Box
              //borderWidth={1}
              padding={2}
              //marginTop={1}
              left={5}
              width={"90%"}
              height={"180"}
              borderColor={"#000000"}
            >
              <HStack space={5}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <View>
                    <Image
                      marginRight={5}
                      //rounded={70}
                      position={"relative"}
                      //left={"10"}
                      borderWidth={2}
                      borderColor={"#000000"}
                      // height={65}
                      // width={65}
                      source={Alchemist}
                      alt="Alternate Text"
                    />
                  </View>
                  <View>
                    <Image
                      marginRight={5}
                      //rounded={70}
                      position={"relative"}
                      //left={"10"}
                      borderWidth={2}
                      borderColor={"#000000"}
                      // height={65}
                      // width={65}
                      source={Alchemist}
                      alt="Alternate Text"
                    />
                  </View>
                  <View>
                    <Image
                      marginRight={5}
                      //rounded={70}
                      position={"relative"}
                      //left={"10"}
                      borderWidth={2}
                      borderColor={"#000000"}
                      // height={65}
                      // width={65}
                      source={Alchemist}
                      alt="Alternate Text"
                    />
                  </View>
                  <View>
                    <Image
                      marginRight={5}
                      //rounded={70}
                      position={"relative"}
                      //left={"10"}
                      borderWidth={2}
                      borderColor={"#000000"}
                      // height={65}
                      // width={65}
                      source={Alchemist}
                      alt="Alternate Text"
                    />
                  </View>
                </ScrollView>
              </HStack>
            </Box>
          </Box>
        </View>
        {/* Based on Interest */}
        <View>
          <Text
            fontSize={responsiveFontSize(2.5)}
            fontWeight={400}
            lineHeight={36}
            width={responsiveWidth(100)}
            marginTop={5}
            marginLeft={3}
            fontFamily="Poppins"
          >
            Based on Your Interest
          </Text>
          <Box>
            <Box
              //borderWidth={1}
              padding={2}
              //marginTop={1}
              left={5}
              width={"90%"}
              height={"180"}
              borderColor={"#000000"}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View>
                  <Image
                    marginRight={5}
                    //rounded={70}
                    position={"relative"}
                    //left={"10"}
                    borderWidth={2}
                    borderColor={"#000000"}
                    // height={65}
                    // width={65}
                    source={Alchemist}
                    alt="Alternate Text"
                  />
                </View>
                <View>
                  <Image
                    marginRight={5}
                    //rounded={70}
                    position={"relative"}
                    //left={"10"}
                    borderWidth={2}
                    borderColor={"#000000"}
                    // height={65}
                    // width={65}
                    source={Alchemist}
                    alt="Alternate Text"
                  />
                </View>
                <View>
                  <Image
                    marginRight={5}
                    //rounded={70}
                    position={"relative"}
                    //left={"10"}
                    borderWidth={2}
                    borderColor={"#000000"}
                    // height={65}
                    // width={65}
                    source={Alchemist}
                    alt="Alternate Text"
                  />
                </View>
                <View>
                  <Image
                    marginRight={5}
                    //rounded={70}
                    position={"relative"}
                    //left={"10"}
                    borderWidth={2}
                    borderColor={"#000000"}
                    // height={65}
                    // width={65}
                    source={Alchemist}
                    alt="Alternate Text"
                  />
                </View>
              </ScrollView>
            </Box>
          </Box>
        </View>
        <View marginTop={4}>
          <Button.Group
            isAttached
            colorScheme="blue"
            mx={{
              base: "auto",
              md: 0,
            }}
            size="60"
          >
            <Button backgroundColor={"#f5f5f5"} width={responsiveWidth(50)}>
              <HStack space={2}>
                <Text color={"black"} fontFamily="Poppins" fontSize={22}>
                  Chat
                </Text>
                <MaterialIcons
                  name={"chat"}
                  size={24}
                  color={"black"}

                  //paddingLeft={5}
                />
              </HStack>
            </Button>
            <Button
              variant="outline"
              backgroundColor={"#ED7966"}
              width={responsiveWidth(50)}
            >
              <Text color={"#ffffff"} fontFamily="Poppins" fontSize={22}>
                Buy Now
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
});
