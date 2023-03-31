import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Voice from "@react-native-voice/voice";

export default function Wishlist() {
  let [started, setStarted] = useState(false);
  let [results, setResults] = useState([]);

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startSpeechToText = async () => {
    await Voice.start("en-NZ");
    setStarted(true);
  };
  const stopSpeechToText = async () => {
    await Voice.stop();
    setStarted(false);
  };
  const onSpeechResults = (result) => {
    setResults(result.value);
  };
  const onSpeechError = (error) => {
    console.log(error);
  };
  return (
    <View>
      {!started ? (
        <Button title="Start Speech to text" onPress={startSpeechToText} />
      ) : undefined}
      {started ? (
        <Button title="Stop Speech to text" onPress={stopSpeechToText} />
      ) : undefined}
      {results.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
