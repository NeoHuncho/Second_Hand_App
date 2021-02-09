import React from "react";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import {View} from 'react-native'

import Card from '../1stApp/app/components/Card'

export default function App() {
  return (
    <View style={{
      backgroundColor:'#f8f4f4',
      padding:20,
      paddingTop:100
    }}>
      <Card 
      title="Red Jacket for sale"
      subTitle='100$'
      image={require("./app/assets/red_jacket.jpg")}/>
    </View>
  );
}
