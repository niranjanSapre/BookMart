import React, { useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Surface } from "react-native-paper";

export default function Browse() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const { width } = useWindowDimensions();

  const pickImages = async () => {
    // No permissions request is necessary for launching the image library
    setIsLoading(true);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // allowsEditing: true,
      allowsMultipleSelection: true,
      selectionLimit: 4,
      aspect: [4, 3],
      quality: 1,
    });
    setIsLoading(false);
    //console.log(result);
    if (!result.canceled) {
      setImages(
        result.assets[0].uri ? [result.assets[0].uri] : result.selected
      );
    }
  };

  return (
    <View>
      {/* <Text> Cover photo</Text>
      <Surface>
        <Image source={{ uri: "" }} style={{ width: 150, height: 150 }} />
      </Surface> */}
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Surface>
            <Image
              source={{ uri: item.uri }}
              style={{ width: 150, height: 150 }}
            />
          </Surface>
        )}
        numColumns={2}
        keyExtractor={(item) => item.uri}
        contentContainerStyle={{ marginVertical: 50, paddingBottom: 100 }}
        ListHeaderComponent={
          isLoading ? (
            <View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Loading...
              </Text>
              <ActivityIndicator size={"large"} />
            </View>
          ) : (
            <Button title="Pick images" onPress={pickImages} />
          )
        }
      />
    </View>
  );
}
