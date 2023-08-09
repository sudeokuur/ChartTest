import React from 'react';
import { View, StyleSheet } from 'react-native';
import LineChartComponent from '/home/eteration/Desktop/ChartTest/android/app/src/linechartcomponent';


const ChartScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <LineChartComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default ChartScreen;