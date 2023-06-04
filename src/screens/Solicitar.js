import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Solicitar = () =>{

    const navega = useNavigation();

    const proximaTela = () =>{
        navega.navigate("Selecionar")
    }


    return(
        <View style={styles.container}>
            <View style={styles.centerContainer}>
            
            <Image style={styles.imageContainer} source={require("../assets/img/copinho.png")}/>
            <Text style={styles.textBold}>Vamos personalizar </Text>
            <Text style={styles.textBold}>sua experiência</Text>
            <Text style={styles.textNormal}>Para a recomendação ideal de água para você, é necessário fornecer algumas informações básicas.</Text>
            <Text style={styles.textNormal}>Será usado apenas para calcular a quantidade recomendada de água.</Text>
            
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.botaoComecar} onPress={proximaTela}>
                    <Text style={styles.textWhite}>Começar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:"white"
    },

    centerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: "flex-start",
        marginTop:190,
        marginHorizontal:35
    },

    bottomContainer:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems:"center"
    },

    imageContainer: {
        alignItems: 'flex-start',
        marginLeft:5
      },
      

    textNormal:{
        marginTop:8,        
        marginHorizontal:10,
        color:"#565656",
        fontSize:17
    },

    textBold: {
        
        fontFamily: "Roboto-Bold",
        fontSize:25,
        marginHorizontal:10,
        color:"#000"
    },

    textWhite:{
        color:"white",
        fontSize:15

    },

    botaoComecar:{

        backgroundColor:"#1566B7",
        paddingVertical:14,
        paddingHorizontal:140,
        borderRadius:40,
        margin:10,
        marginBottom:30
        
    },










})

export default Solicitar;