import AsyncStorage from '@react-native-async-storage/async-storage';

export const savePreferences = async (preferences) => {
  try {
    await AsyncStorage.setItem('userPreferences', JSON.stringify(preferences));
  } catch (error) {
    console.error('Error saving preferences', error);
  }
};

export const loadPreferences = async () => {
  try {
    const preferences = await AsyncStorage.getItem('userPreferences');
    return preferences ? JSON.parse(preferences) : {};
  } catch (error) {
    console.error('Error loading preferences', error);
    return {};
  }
};