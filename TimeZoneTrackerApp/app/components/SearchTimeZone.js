import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const SearchTimeZone = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query);
      setQuery('');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Search Time Zone"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
};

export default SearchTimeZone;