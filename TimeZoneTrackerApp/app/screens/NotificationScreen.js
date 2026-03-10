import React, { useState } from 'react';
import { View } from 'react-native';
import NotificationSettings from '../components/NotificationSettings';

const NotificationScreen = () => {
  const [timeZones, setTimeZones] = useState([
    { id: 1, name: 'New York', currentTime: new Date().toLocaleTimeString() },
    { id: 2, name: 'London', currentTime: new Date().toLocaleTimeString() }
  ]);

  const toggleNotification = (id, isEnabled) => {
    console.log(`Notifications for ${id} are ${isEnabled ? 'enabled' : 'disabled'}`);
  };

  return (
    <View>
      {timeZones.map((tz) => (
        <NotificationSettings key={tz.id} timeZone={tz} onToggle={toggleNotification} />
      ))}
    </View>
  );
};

export default NotificationScreen;