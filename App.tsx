import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Navigate from "./src/navigate/Navigate";

const App = () => {

  return(
    <SafeAreaProvider style={{flex:1}}>
      <SafeAreaView style={{flex:1}}>
        <Navigate/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App;