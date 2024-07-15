import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import { Main } from "./components/Main";

export default function App() {

  return (
    <>
    <StatusBar
        animated={true}
        backgroundColor="#61dafb"
      />
      {/* <NavigationContainer>
        <View style={styles.container}> */}
          <Main />
        {/* </View>
      </NavigationContainer> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
