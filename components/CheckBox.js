import Checkbox from 'expo-checkbox';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View>
      <View>
        <Checkbox value={isChecked} onValueChange={setChecked} />
      </View>
    </View>
  );
}
