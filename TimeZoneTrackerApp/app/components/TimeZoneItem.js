import React from 'react';
import { View, Text } from 'react-native';

const TimeZoneItem = ({ timeZone }) => {
  return (
    <View>
      <Text>{timeZone.name}</Text>
      <Text>{timeZone.currentTime}</Text>
    </View>
  );
};

export default TimeZoneItem;