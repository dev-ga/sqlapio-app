import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  } from "react-native";

  import { useEffect, useState } from "react";

  import AntDesign from '@expo/vector-icons/AntDesign';
  
  export function BottonIntro() {
  
    return (
        <TouchableOpacity
                // onPress={() => navigation.navigate('Budget')}
                style={{
                    position: 'absolute',
                    bottom:50,
                    alignSelf: 'center',
                    zIndex:1,
                    width:60,
                    height:60,
                    backgroundColor:'#fff',
                    borderRadius:50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                >
                    <AntDesign name="arrowright" size={25} color="black" />
        </TouchableOpacity>
    );
  }
  