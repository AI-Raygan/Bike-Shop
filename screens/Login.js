import React from "react"
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {AntDesign} from '@expo/vector-icons'
 
export default function Login (){
    return (
        <View style={{flex:1, justifyContent: "center" , alignItems: "center" , backgroundColor: "white"}}> 
        <Image 
        style={{
            width: 200,
            height: 200,
            borderRadius: 20,
            marginBottom: 60,
            transform: [{rotate: '-45deg'}]
        }}
        source={require("../assets/bike.png")} />
        <Text style={{color: "rgba(0,0,0,0.7)", fontSize: 24, }}>
            Welcome to
             </Text>
        <Text style={{color: "black", fontSize: 28, fontWeight: "700"}}>
           Power Bike Shop
             </Text>

        <TouchableOpacity 
            style={{
                borderRadius: 6,
                backgroundColor: "#e3e3e3", 
                padding: 14,
                paddingHorizontal: 90,
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center"
                
                }}>
            <AntDesign name="google" size={24} color="rgb(256, 100, 10)" />
            <Text style={{fontSize: 12, marginLeft: 8}}>Login with Gmail</Text> 
        </TouchableOpacity>

        <TouchableOpacity 
            style={{
                borderRadius: 6,
                backgroundColor: "black", 
                padding: 14,
                paddingHorizontal: 90,
                marginTop: 20,
                flexDirection: "row",
                alignItems: "center"
                
                }}>
        
            <AntDesign name="apple1" size={24} color="white" />
            <Text style={{fontSize: 12, color: "white", marginLeft: 8}}>Login with Apple</Text> 
        </TouchableOpacity>
            
         <TouchableOpacity>
            <Text style={{fontSize: 12, marginTop: 10, color: "grey", fontWeight: "400", marginLeft: 8}}>Not a member?  <Text style={{color:"rgb(232,110,45)", fontWeight: "500"}}>Sign up</Text></Text> 
        </TouchableOpacity>   

   
    </View>

    );
}
    
    