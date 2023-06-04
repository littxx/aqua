import React from "react";
import { Text, TouchableOpacity, View } from "react-native";


const Button = (props) => {


    return(<View>
        <TouchableOpacity>
            <Text>{props.name}</Text>
        </TouchableOpacity>
    </View>)
}


export default Button;