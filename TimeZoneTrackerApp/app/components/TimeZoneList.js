import React from 'react';
import { View, FlatList } from 'react-native';
import TimeZoneItem from './TimeZoneItem';

const TimeZoneList = ({ timeZones }) => {
  return (
    <View>
      <FlatList
        data={timeZones}
        renderItem={({ item }) => <TimeZoneItem timeZone={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TimeZoneList;