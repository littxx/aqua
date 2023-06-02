import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {

    const navega = useNavigation()

    const proximaTela = () => {
        navega.navigate("Solicitar")
    }


    const [modal, setModal] = useState(false);

    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };


    return (
        <View style={styles.container}>

            <View  style={styles.centerContainer}>
                <Image style={styles.imageContainer} source={require("../assets/img/Aguinha.png")} />
                <Text style={styles.textBold}>Bem-vindo(a) </Text>
                <Text style={styles.textBold}>ao seu diário de água!           </Text>
                <Text style={styles.textNormal}>Este aplicativo foi projetado para ajudá-lo a anotar a água consumida.</Text>
                <Text style={styles.textNormal}>Caso você tenha salvo seus dados anteriormente, o aplicativo permite que você restaure seus dados.</Text>
            </View>

            
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.botaoRestaurar} onPress={openModal}>
                    <Text style={styles.textWhite}>Restaurar dados</Text>
                </TouchableOpacity>

                <Modal visible={modal} onRequestClose={closeModal} transparent>
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}> 

                        <Text style={styles.modalText}>Armazenamento local</Text>
                        <Text style={styles.modalText}>Conta do Google</Text>

                        <TouchableOpacity onPress={closeModal} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Confirmar</Text>
                        </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

                <TouchableOpacity style={styles.botaoPrimeiro} onPress={proximaTela}>
                    <Text style={styles.textWhite}>Primeiro acesso</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "flex-start",
        marginTop:190,
        marginHorizontal:35
    },
    bottomContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom:20
    },
    imageContainer: {
        alignItems: 'flex-start',
        marginLeft:5
      },

    textNormal:{
        marginTop:10,        
        marginHorizontal:10,
        color:"#565656",
        fontSize:16.5
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
    modalButton: {
        marginTop: 10,
    },

    

    botaoRestaurar:{
        backgroundColor:"#0C3864",
        paddingVertical:15,
        paddingHorizontal:120,
        borderRadius:40,
        
        
    },
    botaoPrimeiro:{
        backgroundColor:"#1566B7",
        paddingVertical:14,
        paddingHorizontal:120,
        borderRadius:40,
        margin:10,
        
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
      },
      modalContent: {
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
      },
      modalText: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: "center",
        color:"black"
      },
      modalButton: {
        backgroundColor: "#1566B7",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 10,
      },
      modalButtonText: {
        color: "#fff",
        fontSize: 16,
      },
});

export default Welcome;
