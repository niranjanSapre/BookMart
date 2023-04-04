import { FlatList, StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Alchemist } from "../../assets";
import {
  VStack,
  HStack,
  Avatar,
  Spacer,
  Box,
  Heading,
  Image,
  Text,
  View,
  NativeBaseProvider,
  Button,
  Input,
  TextArea,
  ScrollView,
} from "native-base";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

export default function PostedProduct() {
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

  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Aafreen Khan",
      timeStamp: "12:47 PM",
      postedon: " 29/09/2000",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujitha Mathur",
      timeStamp: "11:11 PM",
      postedon: " 29/09/2000",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      postedon: " 29/09/2000",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      postedon: " 29/09/2000",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    // {
    //   id: "28694a0f-3da1-471f-bd96-142456e29d72",
    //   fullName: "Alchemist",
    //   //timeStamp: "12:47 PM",
    //   recentText: "Novel",
    //   postedon: " 29/09/2000",
    //   avatarUrl:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    // },
  ];
  return (
    <NativeBaseProvider>
      <View backgroundColor={"#ffffff"} flex={1}>
        <Text style={styles.custText} fontFamily="Poppins">
          Posted Product
        </Text>

        <Box top={20} flex={1}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.50",
                }}
                borderColor="muted.800"
                pl={["0", "4"]}
                pr={["0", "5"]}
                py="2"
              >
                <HStack space={[2, 3]} justifyContent="space-between">
                  {/* <Avatar
                    size="48px"
                    source={{
                      uri: item.avatarUrl,
                    }}
                  /> */}
                  <Image
                    //top={4}
                    position={"relative"}
                    borderWidth={2}
                    borderColor={"#000000"}
                    source={Alchemist}
                    alt="Alternate Text"
                  />
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.fullName}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      Genre- {item.recentText}
                    </Text>
                    <Text
                      color="coolGray.600"
                      _dark={{
                        color: "warmGray.200",
                      }}
                    >
                      Posted on- {item.postedon}
                    </Text>
                    {/* <Spacer /> */}
                  </VStack>
                  <Spacer />
                  <VStack space={responsiveHeight(8)}>
                    <Text left={responsiveWidth(15)}>
                      <View style={styles.edit}>
                        <AntDesign
                          name="edit"
                          size={24}
                          color="black"
                          onPress={() => navigation.navigate("ISBNPage")}
                        />
                      </View>

                      {/* {item.timeStamp} */}
                    </Text>
                    <Button
                      width={responsiveWidth(24)}
                      backgroundColor="blue.500"
                      left={-12}
                      //onPress={() => navigation.navigate("Login")}
                    >
                      <Text fontFamily="Poppins" fontSize={15} color="#ffffff">
                        Sold Out
                      </Text>
                    </Button>
                  </VStack>
                </HStack>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        </Box>
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
});