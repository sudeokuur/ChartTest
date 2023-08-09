import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const validateData = (data) => {
  const MIN_VALUE = 0;
  const MAX_VALUE = 100;
  const validatedData = data.datasets[0].data.map((value) =>
    Math.min(MAX_VALUE, Math.max(MIN_VALUE, value))
  );

  return {
    ...data,
    datasets: [
      {
        ...data.datasets[0],
        data: validatedData,
      },
    ],
  };
};

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43, 10],
      color: () => `rgba(255, 0, 0, 1)`,
      strokeWidth: 2,
    },
  ],
};

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
};

const screenWidth = Dimensions.get('window').width;

const LineChartComponent: React.FC = () => {
  const validatedData = validateData(data);

  return (
    <View testID="line-chart-wrapper">
        <LineChart
        testID="line-chart"
        data={validatedData}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
    </View>
  );
};

export default LineChartComponent;
