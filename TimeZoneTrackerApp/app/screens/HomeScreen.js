import React, { useState } from 'react';
import { View } from 'react-native';
import TimeZoneList from '../components/TimeZoneList';
import AddTimeZone from '../components/AddTimeZone';

const HomeScreen = () => {
  const [timeZones, setTimeZones] = useState([]);

  const addTimeZone = (timeZone) => {
    setTimeZones([...timeZones, { id: Date.now(), name: timeZone, currentTime: new Date().toLocaleTimeString() }]);
  };

  return (
    <View>
      <AddTimeZone onAdd={addTimeZone} />
      <TimeZoneList timeZones={timeZones} />
    </View>
  );
};

export default HomeScreen;