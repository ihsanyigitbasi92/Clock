import React, { useState } from 'react';
import { View, Switch, Text } from 'react-native';

const NotificationSettings = ({ timeZone, onToggle }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    onToggle(timeZone.id, !isEnabled);
  };

  return (
    <View>
      <Text>{`Notifications for ${timeZone.name}`}</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default NotificationSettings;