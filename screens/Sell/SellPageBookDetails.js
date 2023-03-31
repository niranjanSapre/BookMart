import {
  ActivityIndicator,
  StyleSheet,
  Modal,
  Alert,
  Pressable,
  Keyboard,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import React, { useLayoutEffect, useState, useEffect } from "react";
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
  TextArea,
  Box,
} from "native-base";
import { useFonts } from "expo-font";
import * as Progress from "react-native-progress";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import { flexbox } from "native-base/lib/typescript/theme/styled-system";

export default function SellPageBookDetails() {
  const navigation = useNavigation();
  const [userBookData, setUserBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("9781542033831");

  const route = useRoute();

  const [bookName, setBookName] = useState(" ");
  const [pages, setPages] = useState(" ");
  const [medium, setMedium] = useState(" ");
  //const [genre, setGenre] = useState("");
  const [authorName, setAuthorName] = useState(" ");
  const [genre, setGenre] = useState(" ");
  const [modalVisible, setModalVisible] = useState(false);

  //const [isbnNumber, setisbnNumber] = useState("");
  const send = () => {
    if (genre === "" || bookName === "" || pages === "" || medium === "" || authorName === "") {
      setModalVisible(true);
      return;
    }
    navigation.navigate("UploadPhotos", {
      isbnNumber: route.params.isbnNumber,
      bookName: bookName,
      pages: userBookData.items[0].volumeInfo.pageCount.toString(),
      medium: userBookData.items[0].volumeInfo.language,
      authorName: userBookData.items[0].volumeInfo.authors[0],
      genre: route.params.genre,
    });
    //console.log(route.params.isbn);
  };
  //Google Book API to fetch book details ${route.params.isbnNumber}
  const getApiData = async () => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${text}&key=AIzaSyDzFRk5Btsx9RgtSCH_RvUR1RF3fIAn_ZM`
      );
      const myData = await res.json();
      setUserBookData(myData);
      setIsLoading(false);
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);
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
        {isLoading ? (
          <View style={styles.loader}>
            <ActivityIndicator size="large" color="#ED7966" />
          </View>
        ) : (
          <View>
            <View top={50}>
              <Center>
                <Progress.Bar progress={0.48} width={350} color={"#ED7966"} />
              </Center>
            </View>
            <View>
              <Text style={styles.genreText} fontFamily="Poppins">
                Book Details
              </Text>
            </View>

            <Stack space={5} w="80%" maxW="300px" mx={20}>
              <HStack
                space={2}
                top={responsiveHeight(15)}
                left={responsiveWidth(-15)}
              >
                <View style={styles.ISBNTxt}>
                  <Text fontFamily="Poppins">ISBN - </Text>
                </View>
                <View style={styles.ISBNSearch}>
                  <Input
                    fontFamily="Poppins"
                    bgColor={"#FAE5DF"}
                    borderColor={"#FAE5DF"}
                    variant="rounded"
                    placeholder="Enter ISBN"
                    value={text}
                  />
                </View>
              </HStack>
              <HStack
                space={2}
                top={responsiveHeight(15)}
                left={responsiveWidth(-15)}
              >
                <View style={styles.ISBNTxt}>
                  <Text fontFamily="Poppins">Book Name -</Text>
                </View>
                <View style={styles.BNSearch}>
                  <Input
                    fontFamily="Poppins"
                    bgColor={"#FAE5DF"}
                    borderColor={"#FAE5DF"}
                    variant="rounded"
                    placeholder="Enter Book Name"
                    defaultValue={userBookData.items[0].volumeInfo.title}
                    onChangeText={(name) => setBookName(name)}
                  />
                </View>
              </HStack>
              <HStack
                space={2}
                top={responsiveHeight(15)}
                left={responsiveWidth(-15)}
              >
                <View style={styles.ISBNTxt}>
                  <Text fontFamily="Poppins">Pages -</Text>
                </View>
                <View style={styles.PgSearch}>
                  <Input
                    fontFamily="Poppins"
                    bgColor={"#FAE5DF"}
                    borderColor={"#FAE5DF"}
                    variant="rounded"
                    defaultValue={userBookData.items[0].volumeInfo.pageCount.toString()}
                    onChangeText={(name) => setPages(name)}
                  />
                </View>
                <View style={styles.ISBNTxt}>
                  <Text fontFamily="Poppins">Medium -</Text>
                </View>
                <View style={styles.MSearch}>
                  <Input
                    fontFamily="Poppins"
                    bgColor={"#FAE5DF"}
                    borderColor={"#FAE5DF"}
                    variant="rounded"
                    defaultValue={userBookData.items[0].volumeInfo.language}
                    onChangeText={(name) => setMedium(name)}
                  />
                </View>
              </HStack>
              <HStack
                space={2}
                top={responsiveHeight(15)}
                left={responsiveWidth(-15)}
              >
                <View style={styles.ISBNTxt}>
                  <Text fontFamily="Poppins">Author Name -</Text>
                </View>
                <View style={styles.AuthorSearch}>
                  <Input
                    fontFamily="Poppins"
                    bgColor={"#FAE5DF"}
                    borderColor={"#FAE5DF"}
                    variant="rounded"
                    placeholder="Enter Author Name"
                    defaultValue={userBookData.items[0].volumeInfo.authors[0]}
                    onChangeText={(name) => setAuthorName(name)}
                  />
                </View>
              </HStack>
              <HStack
                space={2}
                top={responsiveHeight(15)}
                left={responsiveWidth(-15)}
              >
                <View style={styles.ISBNTxt}>
                  <Text fontFamily="Poppins">Genre -</Text>
                </View>
                <View style={styles.GenreSearch}>
                  <Input
                    fontFamily="Poppins"
                    bgColor={"#FAE5DF"}
                    borderColor={"#FAE5DF"}
                    variant="rounded"
                    placeholder="Enter Genre"
                    defaultValue={userBookData.items[0].volumeInfo.categories[0]}
                    onChangeText={(name) => setGenre(name)}
                  />
                </View>
              </HStack>
              <View top={responsiveHeight(12) } right={responsiveWidth(17)}>
                <VStack space={4}  paddingLeft={2} marginTop={4}>
                  <View style={styles.ISBNTxt}>
                    <Text fontFamily="Poppins">
                      About Book - 
                    </Text>
                  </View>
                  <View style={styles.InputName}>
                    <TextArea
                      width={"120%"}
                      h={40}
                      fontSize={responsiveFontSize(1.6)}
                      fontFamily="Poppins"
                      bgColor={"#FAE5DF"}
                      borderColor={"#FAE5DF"}
                      rounded={6}
                      defaultValue={userBookData.items[0].volumeInfo.description}
                      placeholder="Please enter the detail description about the issue"
                      />
                  </View>
                </VStack>
              </View>
            </Stack>
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
                        Please Enter All The Fields
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
            <Button
              style={styles.next}
              backgroundColor="#ED7966"
              onPress={send}
            >
              <Text fontFamily="Poppins" fontSize={24} color="#ffffff">
                Next
              </Text>
            </Button>
          </View>
        )}
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  loader: {
    minHeight: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  next: {
    position: "absolute",
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    marginTop: responsiveHeight(93),
    marginRight: 20,
    marginLeft: 20,
  },
  genreText: {
    //textAlign:"left",
    fontSize: responsiveFontSize(3.5),
    fontWeight: 400,
    lineHeight: 36,
    width: responsiveWidth(100),
    //marginTop:20,
    left: 20,
    top: responsiveHeight(13),
  },
  ISBNSearch: {
    width: responsiveWidth(73),
    fontSize: responsiveFontSize(1.8),
    opacity: 0.7,
    height: responsiveHeight(5.5),
  },
  BNSearch: {
    width: responsiveWidth(60),
    fontSize: responsiveFontSize(1.8),
    opacity: 0.7,
    height: responsiveHeight(5.5),
  },
  PgSearch: {
    width: responsiveWidth(20),
    fontSize: responsiveFontSize(1.8),
    opacity: 0.7,
    height: responsiveHeight(5.5),
  },
  MSearch: {
    width: responsiveWidth(26.5),
    fontSize: responsiveFontSize(1.8),
    opacity: 0.7,
    height: responsiveHeight(5.5),
  },
  AuthorSearch: {
    width: responsiveWidth(56),
    fontSize: responsiveFontSize(1.8),
    opacity: 0.7,
    height: responsiveHeight(5.5),
  },
  GenreSearch: {
    width: responsiveWidth(71),
    fontSize: responsiveFontSize(1.8),
    opacity: 0.7,
    height: responsiveHeight(5.5),
  },
  ISBNTxt: {
    fontSize: responsiveFontSize(1.5),
    fontWeight: 400,
    lineHeight: 36,
    top: responsiveHeight(1.5),
  },
  container: {
    //opacity: 0.6,
    flex: 1,
    backgroundColor: "#FFFFFF95",
    alignItems: "center",
    justifyContent: "center",
  },
  InputName: {
    width: responsiveWidth(71),
    fontSize: responsiveFontSize(1.5),
    lineHeight: 36,
    height: responsiveHeight(5.5),
    opacity: 0.7
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
