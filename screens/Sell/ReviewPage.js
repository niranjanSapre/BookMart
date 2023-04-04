import { StyleSheet } from "react-native";
import React, { useLayoutEffect } from "react";
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
  Image,
  VStack,
  HStack,
  ScrollView,
} from "native-base";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

export default function ReviewPage() {
  const navigation = useNavigation();
  const route = useRoute();
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
  const genre = route.params.genre;
  // const arraysplit = (genre) => {
  //   let text = "";
  //   for (let item in genre) {
  //     if (item == genre.length - 1) {
  //       text += genre[item];
  //     } else {
  //       text += genre[item] + ", ";
  //     }
  //   }
  //   console.log(genre.length);
  //   return text;
  // };

  return (
    <NativeBaseProvider>
      <View backgroundColor={"#ffffff"} flex={1}>
        <View top={50}>
          <Center>
            <Progress.Bar progress={1.0} width={350} color={"#ED7966"} />
          </Center>
        </View>

        <View style={styles.edit}>
          {/* <Text fontFamily="Poppins">Edit</Text> */}
          <AntDesign
            name="edit"
            size={24}
            color="black"
            onPress={() => navigation.navigate("ISBNPage")}
          />
        </View>

        <Text style={styles.reviewText} fontFamily="Poppins">
          Review
        </Text>

        <View style={styles.review}>
          <VStack space={4}>
            <Text fontFamily="Poppins">ISBN - {route.params.isbnNumber}</Text>
            <Text fontFamily="Poppins">
              Book Name - {route.params.bookName}
            </Text>
            <Text fontFamily="Poppins">Pages - {route.params.pages}</Text>
            <Text fontFamily="Poppins">Medium - {route.params.medium}</Text>
            <Text fontFamily="Poppins">
              Author Name -{route.params.authorName}
            </Text>
            <Text fontFamily="Poppins">
              Genre - {route.params.genre}
            </Text>
            <Text fontFamily="Poppins">Price -</Text>
            <Text fontFamily="Poppins">Preview Images </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <HStack space={2}>
                <Image
                  source={{ uri: route.params.fcover }}
                  alt="Alternate text"
                  style={{ width: 90, height: 120 }}
                  marginTop={1}
                  marginLeft={2}
                />
                <Image
                  source={{ uri: route.params.bcover }}
                  alt="Alternate text"
                  style={{ width: 90, height: 120 }}
                  marginTop={1}
                  marginLeft={2}
                />
                <Image
                  source={{ uri: route.params.Page1 }}
                  alt="Alternate text"
                  style={{ width: 90, height: 120 }}
                  marginTop={1}
                  marginLeft={2}
                />
                <Image
                  source={{ uri: route.params.Page2 }}
                  alt="Alternate text"
                  style={{ width: 90, height: 120 }}
                  marginTop={1}
                  marginLeft={2}
                />
                <Image
                  source={{ uri: route.params.Page3 }}
                  alt="Alternate text"
                  style={{ width: 90, height: 120 }}
                  marginTop={1}
                  marginLeft={2}
                />
              </HStack>
            </ScrollView>
          </VStack>
        </View>

        <Button
          style={styles.next}
          backgroundColor="#ED7966"
          //onPress={() => navigation.navigate("UploadPhotos")}
        >
          <Text fontFamily="Poppins" fontSize={24} color="#ffffff">
            Post
          </Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}
const styles = StyleSheet.create({
  edit: {
    top: 70,
    marginLeft: 330,
  },
  review: {
    marginTop: responsiveHeight(15),
    padding: 20,
  },
  reviewText: {
    fontSize: responsiveFontSize(3.5),
    fontWeight: 400,
    lineHeight: 36,
    width: responsiveWidth(100),
    left: 20,
    top: responsiveHeight(13),
  },
  next: {
    position: "absolute",
    width: responsiveWidth(90),
    height: responsiveHeight(8),
    marginTop: responsiveHeight(93),
    marginRight: 20,
    marginLeft: 20,
  },
});
