import React from 'react';
import { View, Button } from 'react-native';

const RemoveTimeZone = ({ timeZone, onRemove }) => {
  return (
    <View>
      <Button title={`Remove ${timeZone.name}`} onPress={() => onRemove(timeZone.id)} />
    </View>
  );
};

export default RemoveTimeZone;