import React, { useLayoutEffect } from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";
import {
  NativeBaseProvider,
  Image,
  Box,
  Text,
  View,
  Stack,
  Input,
  HStack,
  ScrollView,
  Pressable,
} from "native-base";
import { useFonts } from "expo-font";
import {
  Alchemist,
  Novel,
  Biography,
  Fantasy,
  Fiction,
  Mystery,
  Mythology,
  Narrative,
  Romance,
  ScienceFiction,
  SelfHelp,
  Thriller,
} from "../assets";

export default function HomeScreen() {
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
        <View marginTop={10} left={-60}>
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
        <View
          height={83}
          borderWidth={1}
          padding={2}
          borderRadius={25}
          left={5}
          top={"5"}
          width={"90%"}
          bgColor={"#F5CAC2"}
          opacity={0.8}
          borderColor={"#ED7966"}
        >
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            borderRadius={20}
          >
            <Image
              marginRight={2}
              rounded={70}
              position={"relative"}
              //left={"10"}
              borderWidth={2}
              borderColor={"#000000"}
              height={65}
              width={65}
              source={Novel}
              alt="Alternate Text"
            />
            <Image
              marginRight={2}
              rounded={70}
              position={"relative"}
              //left={"10"}
              borderWidth={2}
              borderColor={"#000000"}
              height={65}
              width={65}
              source={Biography}
              alt="Alternate Text"
            />
            <Image
              borderWidth={2}
              borderColor={"#000000"}
              marginRight={2}
              rounded={70}
              position={"relative"}
              //left={"100"}
              //top={"5"}
              height={65}
              width={65}
              source={Fantasy}
              alt="Alternate Text"
            />
            <Image
              borderWidth={2}
              borderColor={"#000000"}
              marginRight={2}
              rounded={70}
              position={"relative"}
              //left={"100"}
              //top={"5"}
              height={65}
              width={65}
              source={Fiction}
              alt="Alternate Text"
            />
            <Image
              borderWidth={2}
              borderColor={"#000000"}
              marginRight={2}
              rounded={70}
              position={"relative"}
              //left={"100"}
              //top={"5"}
              height={65}
              width={65}
              source={Mystery}
              alt="Alternate Text"
            />
            <Image
              borderWidth={2}
              borderColor={"#000000"}
              rounded={70}
              marginRight={2}
              position={"relative"}
              //left={"100"}
              //top={"5"}
              height={65}
              width={65}
              source={Mythology}
              alt="Alternate Text"
            />
            <Image
              borderWidth={2}
              borderColor={"#000000"}
              rounded={70}
              position={"relative"}
              //left={"100"}
              //top={"5"}
              height={65}
              marginRight={2}
              width={65}
              source={Narrative}
              alt="Alternate Text"
            />
            <Image
              borderWidth={2}
              borderColor={"#000000"}
              rounded={70}
              position={"relative"}
              //left={"100"}
              //top={"5"}
              height={65}
              marginRight={2}
              width={65}
              source={Romance}
              alt="Alternate Text"
            />
            <Image
              borderWidth={2}
              borderColor={"#000000"}
              rounded={70}
              position={"relative"}
              //left={"100"}
              //top={"5"}
              marginRight={2}
              height={65}
              width={65}
              source={ScienceFiction}
              alt="Alternate Text"
            />
            <Image
              borderWidth={2}
              borderColor={"#000000"}
              rounded={70}
              position={"relative"}
              //left={"100"}
              //top={"5"}
              height={65}
              marginRight={2}
              width={65}
              source={SelfHelp}
              alt="Alternate Text"
            />
            <Image
              borderWidth={2}
              borderColor={"#000000"}
              rounded={70}
              position={"relative"}
              //left={"100"}
              //top={"5"}
              height={65}
              width={65}
              marginRight={2}
              source={Thriller}
              alt="Alternate Text"
            />
          </ScrollView>
        </View>
        <View top={8} marginTop={0}>
          <ScrollView maxHeight={responsiveHeight(72)}>
            <View top={-35}>
              <Text
                //textAlign="center"
                fontSize={responsiveFontSize(2.5)}
                fontWeight={400}
                lineHeight={36}
                width={responsiveWidth(100)}
                //marginTop={30}
                marginLeft={3}
                top={responsiveHeight(5)}
                fontFamily="Poppins"
              >
                Recommended Books
              </Text>
              <Box>
                <Pressable onPress={() => navigation.navigate("Buy1")}>
                  <Box
                    //borderWidth={1}
                    padding={2}
                    marginTop={39.5}
                    left={5}
                    width={"90%"}
                    height={"209"}
                    borderColor={"black"}
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

                          <Text
                            //textAlign="center"

                            marginTop={2}
                            fontSize={responsiveFontSize(1.8)}
                            fontFamily="Poppins"
                          >
                            Alchemist
                          </Text>
                          <Text
                            fontSize={responsiveFontSize(1.8)}
                            fontFamily="Poppins"
                          >
                            Price - 180$
                          </Text>
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
                          <Text
                            //textAlign="center"
                            marginTop={2}
                            fontSize={responsiveFontSize(1.8)}
                            fontFamily="Poppins"
                          >
                            Alchemist
                          </Text>
                          <Text
                            fontSize={responsiveFontSize(1.8)}
                            fontFamily="Poppins"
                          >
                            Price - 180$
                          </Text>
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
                          <Text
                            //textAlign="center"
                            marginTop={2}
                            fontSize={responsiveFontSize(1.8)}
                            fontFamily="Poppins"
                          >
                            Alchemist
                          </Text>
                          <Text
                            fontSize={responsiveFontSize(1.8)}
                            fontFamily="Poppins"
                          >
                            Price - 180$
                          </Text>
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
                          <Text
                            //textAlign="center"
                            marginTop={2}
                            fontSize={responsiveFontSize(1.8)}
                            fontFamily="Poppins"
                          >
                            Alchemist
                          </Text>
                          <Text
                            fontSize={responsiveFontSize(1.8)}
                            fontFamily="Poppins"
                          >
                            Price - 180$
                          </Text>
                        </View>
                      </ScrollView>
                    </HStack>
                  </Box>
                </Pressable>
              </Box>
            </View>
            <View top={-35}>
              <Text
                //textAlign="center"
                fontSize={responsiveFontSize(2.5)}
                fontWeight={400}
                lineHeight={36}
                width={responsiveWidth(100)}
                marginTop={5}
                marginLeft={3}
                //top={responsiveHeight(5)}
                fontFamily="Poppins"
              >
                Top Picks
              </Text>
              <Box>
                <Box
                  //borderWidth={1}
                  padding={2}
                  //marginTop={1}
                  left={5}
                  width={"90%"}
                  height={"209"}
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
                        <Text
                          //textAlign="center"
                          marginTop={2}
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Alchemist
                        </Text>
                        <Text
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Price - 180$
                        </Text>
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
                        <Text
                          //textAlign="center"
                          marginTop={2}
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Alchemist
                        </Text>
                        <Text
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Price - 180$
                        </Text>
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
                        <Text
                          //textAlign="center"
                          marginTop={2}
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Alchemist
                        </Text>
                        <Text
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Price - 180$
                        </Text>
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
                        <Text
                          //textAlign="center"
                          marginTop={2}
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Alchemist
                        </Text>
                        <Text
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Price - 180$
                        </Text>
                      </View>
                    </ScrollView>
                  </HStack>
                </Box>
              </Box>
            </View>
            <View top={-35}>
              <Text
                //textAlign="center"
                fontSize={responsiveFontSize(2.5)}
                fontWeight={400}
                lineHeight={36}
                width={responsiveWidth(100)}
                marginTop={5}
                marginLeft={3}
                //top={responsiveHeight(3)}
                fontFamily="Poppins"
              >
                Top Weekly Picks
              </Text>
              <Box>
                <Box
                  //borderWidth={1}
                  padding={2}
                  //marginTop={39.5}
                  left={5}
                  width={"90%"}
                  height={"209"}
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
                        <Text
                          //textAlign="center"
                          marginTop={2}
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Alchemist
                        </Text>
                        <Text
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Price - 180$
                        </Text>
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
                        <Text
                          //textAlign="center"
                          marginTop={2}
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Alchemist
                        </Text>
                        <Text
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Price - 180$
                        </Text>
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
                        <Text
                          //textAlign="center"
                          marginTop={2}
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Alchemist
                        </Text>
                        <Text
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Price - 180$
                        </Text>
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
                        <Text
                          //textAlign="center"
                          marginTop={2}
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Alchemist
                        </Text>
                        <Text
                          fontSize={responsiveFontSize(1.8)}
                          fontFamily="Poppins"
                        >
                          Price - 180$
                        </Text>
                      </View>
                    </ScrollView>
                  </HStack>
                </Box>
              </Box>
            </View>
          </ScrollView>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
