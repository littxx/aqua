import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "../screens/Splash";
import Welcome from "../screens/Welcome";
import Solicitar from "../screens/Solicitar";
import Selecionar from "../screens/Selecionar";


const resume = {
    headerShown: false,
    cardStyle: {
      backgroundColor: 'white',
    },
    cardShadowEnabled: false,
    gestureEnabled: false,
  }

  const Stack = createStackNavigator()

const Navigate = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} options={resume}/>
                <Stack.Screen name="Welcome" component={Welcome} options={resume}/>
                <Stack.Screen name="Solicitar" component={Solicitar} options={resume}/>
                <Stack.Screen name="Selecionar" component={Selecionar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigate;