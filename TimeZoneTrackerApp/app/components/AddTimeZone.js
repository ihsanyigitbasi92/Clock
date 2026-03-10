import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTimeZone = ({ onAdd }) => {
  const [timeZone, setTimeZone] = useState('');

  const handleAdd = () => {
    if (timeZone) {
      onAdd(timeZone);
      setTimeZone('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Time Zone"
        value={timeZone}
        onChangeText={setTimeZone}
      />
      <Button title="Add Time Zone" onPress={handleAdd} />
    </View>
  );
};

export default AddTimeZone;