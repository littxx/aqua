import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

const Bolinhas = (props) => {

    const [bola, setBola] = useState(props.bolaAtual)
    const totalBolas = 4

    const renderizarBolas = () => {

        const ponto = []

        for (let i = 0; i <= totalBolas; i++) {
            ponto.push(
                <View
                    key={i}
                    style={[
                        styles.pontos, i === bola ? styles.ativando : null
                    ]}

                />
            )
        }

        return ponto
    }


    return(
        <View style={styles.container}>
             <View style={styles.container}>{renderizarBolas()}</View>
        </View>
    )




}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'center',
        alignItems:"center"
    },
    pontos:{
        width:10,
        height:10,
        borderRadius:5,
        backgroundColor:"#8C8C8C",
        marginHorizontal:5,
    },

    ativando:{
        width:15,
        height:15,
        borderRadius:7.5,
        backgroundColor:"#0C3864"
    },
})




export default Bolinhas