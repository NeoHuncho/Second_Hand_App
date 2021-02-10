import React,{useState} from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

const Initialmessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/william.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/william.jpg"),
  },
];

export default function MessagesScreen() {
    const [messages,setMessages]= useState(Initialmessages)
    const [refreshing,setRefreshing]=useState(false);

    const handleDelete= message =>{
        setMessages(messages.filter(m=> m.id !==message.id))
    }

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("pressed", item)}
            renderRightActions={()=>
            <ListItemDeleteAction 
            onPress={()=>handleDelete(item)}/>}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={()=>{
            setMessages([{
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../assets/william.jpg"),
              }])}}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
