import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Capture() {
  return (
    <View>
      <Text>Capture</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

// import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
// import { Camera, CameraType } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";
// import { useState, useEffect, useRef, useLayoutEffect } from "react";
// import Button from "../../src/components/Button";
// import { useNavigation } from "@react-navigation/native";

// export default function Capture() {
//   const navigation = useNavigation();
//   useLayoutEffect(() => {
//     navigation.setOptions({
//       headerShown: false,
//     });
//   }, []);
//   const [hasCameraPermission, setHasCameraPermission] = useState(null);
//   const [image, setImage] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);
//   const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
//   const cameraRef = useRef(null);
//   useEffect(() => {
//     (async () => {
//       MediaLibrary.requestPermissionsAsync();
//       const cameraStatus = await Camera.requestCameraPermissionsAsync();
//       setHasCameraPermission(cameraStatus.status === "granted");
//     })();
//   }, []);
//   const takePicture = async () => {
//     if (cameraRef) {
//       try {
//         const data = await cameraRef.current.takePictureAsync();
//         console.log(data);
//         setImage(data.uri);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };
//   const saveImage = async () => {
//     if (image) {
//       try {
//         await MediaLibrary.createAssetAsync(image);
//         alert("Picture Save! :)");
//         setImage(null);
//       } catch (e) {
//         console.log(e);
//       }
//     }
//   };
//   if (hasCameraPermission === false) {
//     return <Text>No Access to Camera</Text>;
//   }
//   return (
//     <View style={styles.container}>
//       {!image ? (
//         <Camera
//           style={styles.camera}
//           type={type}
//           flashMode={flash}
//           ref={cameraRef}
//         >
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               paddingHorizontal: 30,
//             }}
//           >
//             <Button
//               icon={"retweet"}
//               onPress={() => {
//                 setType(
//                   type === CameraType.back ? CameraType.front : CameraType.back
//                 );
//               }}
//             />
//             <Button
//               icon={"flash"}
//               color={
//                 flash === Camera.Constants.FlashMode.off ? "gray" : "yellow"
//               }
//               onPress={() => {
//                 setFlash(
//                   flash === Camera.Constants.FlashMode.off
//                     ? Camera.Constants.FlashMode.on
//                     : Camera.Constants.FlashMode.off
//                 );
//               }}
//             />
//           </View>
//         </Camera>
//       ) : (
//         <Image source={{ uri: image }} style={styles.camera} />
//       )}
//       <View>
//         {image ? (
//           <View
//             style={{
//               flexDirection: "row",
//               justifyContent: "space-between",
//               paddingHorizontal: 50,
//             }}
//           >
//             <Button
//               title={"Retake"}
//               icon="retweet"
//               onPress={() => setImage(null)}
//             />
//             <Button title={"Save"} icon="check" onPress={saveImage} />
//           </View>
//         ) : (
//           <Button
//             title={"take a picture"}
//             icon="camera"
//             onPress={takePicture}
//           />
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     marginTop: 30,
//     justifyContent: "center",
//   },
//   camera: {
//     flex: 1,
//     borderRadius: 20,
//   },
// });
