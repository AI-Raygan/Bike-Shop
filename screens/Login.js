import React from "react"
import { View, Text, Image } from 'react-native';
 
export default function Login (){
    return (
        <View style={{flex:1, justifyContent: "center"}}> 
        <Text style={{color: "black"}}>Hi, How are you ? </Text>
        <Image 
        style={{
            width: 200,
            height: 200,
        }}
        source={require("../assets/bike.png")} />
    </View>

    );
}
    
    