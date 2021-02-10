import React from 'react'
import { View, Text } from 'react-native'
import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import { StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

export default function AccountScreen() {
    return (
       <Screen>
           <View style={styles.container}>
           <ListItem
           title="William Guinuaudie"
           subTitle="william.guinaudie@gmail.com"
           image={require('../assets/william.jpg')}/>
           </View>
           <View style={styles.container}>
               <FlatList/>

           </View>
       </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    }
})

