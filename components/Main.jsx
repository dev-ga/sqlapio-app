import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ViewBase,
  ViewComponent,
  SafeAreaView
} from "react-native";

import { useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";

import image from "../assets/fondo3.jpg";

import { BottonIntro } from "./buttons/BottonIntro";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export function Main() {

  // const [userId, setUserId] = useState([]);

  // useEffect(() => {
  //   getDataUser();
  // }, []);

  // async function getDataUser() {
  //   const response = await fetch("http://192.168.128.30:8080/user/1");
  //   const data = await response.json();
  //   console.log(data  );
  //   setUserId(data);

  // }

  return (
    <NavigationContainer>
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.title}>Dr(a). Bienvenido a...</Text>
                <Text style={styles.subTitle}>SQLAPIO</Text>
                <BottonIntro />
            </ImageBackground>
        </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    image: {
        flex: 1,
        justifyContent: 'center',
        width: '100%', 
        height: '100%'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    subTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize: 50,
        fontWeight: 'bold',
    }
});
