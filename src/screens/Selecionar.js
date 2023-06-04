import React, { useState } from "react";
import { View, text, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import DatePicker from "react-native-date-picker";
import Bolinhas from "../components/Bolinhas";

const Selecionar = () => {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <View style={styles.imageContainer}>
          <Bolinhas bolaAtual={0}/>
        </View>
        <Text style={styles.textBold}>Selecione a hora que             </Text>
        <Text style={styles.textBold}>acorda                           </Text>
        <Text style={styles.text}>Os lembretes começarão depois </Text>
        <Text style={styles.textNoMargin}>deste horário.</Text>
      </View>
      <View style={styles.containerDate}>


        <DatePicker
          style={styles.datepick }

          date={date}
          onDateChange={setDate}
          mode="time"

        ></DatePicker>



      </View>
      <View>
        <TouchableOpacity><Text>clique</Text></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white"
  },
  imageContainer: {
    paddingTop:90,
    marginBottom:50,
    alignItems: "center"
  },
  containerText: {
    padding: 20
  },
  containerDate:{
    flex:1,
    justifyContent:"flex-start"
  },
  image: {
    resizeMode: "contain",
    alignItems: "center",
    paddingBottom: 50
  },
  textBold: {

    fontFamily: "Roboto",
    fontSize: 25,
    color: "#000",
    fontWeight: "800"

  },
  text: {
    fontFamily: "Roboto",
    fontSize: 17,
    marginTop: 10,
  },
  textNoMargin: {
    fontFamily: "Roboto",
    fontSize: 17,
  },
  datepick: {
    width: 300,
    height:200
  }
})



export default Selecionar;