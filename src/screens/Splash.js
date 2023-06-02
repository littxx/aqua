import React,{useEffect} from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Splash = () => {
    
    const navega = useNavigation();


    useEffect(()=>{
        setTimeout(()=>{
            navega.navigate("Welcome")
        }, 700)
    },[])
    
    
    
    
    return(
        <View style={styles.container}>

            <View style={styles.center}>
              <Image source={require("../assets/img/DiarioAgua.png")} />
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#1566B7",
    },
    center:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})

export default Splash;