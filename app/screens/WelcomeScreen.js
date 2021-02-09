import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'

import AppButton from '../components/AppButton';
export default function WelcomeScreen() {
    return (
      <ImageBackground blurRadius={1} style={styles.background} source={require("../assets/background.jpg")}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require('../assets/logo-red.png')} />
          <Text style={styles.tagline}>Sell what you dont need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton title='Login' />
          <AppButton title='register' color='secondary' />
      
        </View>
      </ImageBackground>
        )
}

const styles = StyleSheet.create({
    background:{
        flex:1, //takes entire screen
        justifyContent:'flex-end',//will push buttons to bottom
        alignItems:"center"//will center logo
    },
    loginButton:{
        width:'100%',
        height:70,
        backgroundColor:'#fc5c65'
    },
    logoContainer:{
        position:'absolute',
        top:50,
        alignItems:'center'
    },
    logo:{
        width:100,
        height:100,
    },
    buttonsContainer:{
        padding:20,
        width:'100%'

    },
    tagline:{
        fontSize:20,
        fontWeight:"600",
        paddingVertical:15
    }
})
