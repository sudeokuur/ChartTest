import React from "react";
import { View, StyleSheet } from "react-native";
import LineChartComponent from "./android/app/src/linechartcomponent";

function App(){
  return (
    <View style={{flex:1}}>
      <LineChartComponent/>
    </View>
  );
};

export default App;