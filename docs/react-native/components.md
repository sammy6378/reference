# React Native Components

## Basic Components

### Text and View

```jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Text style={styles.subtitle}>Welcome to React Native</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
```

### Button and TouchableOpacity

```jsx
import React from 'react';
import { View, Text, Button, TouchableOpacity, Alert } from 'react-native';

const ButtonExample = () => {
  const handlePress = () => {
    Alert.alert('Button pressed!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Press Me" onPress={handlePress} />
      
      <TouchableOpacity 
        style={styles.customButton}
        onPress={handlePress}
      >
        <Text style={styles.buttonText}>Custom Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
```

### TextInput

```jsx
import React, { useState } from 'react';
import { View, TextInput, Text } from 'react-native';

const InputExample = () => {
  const [text, setText] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={styles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={setText}
      />
      <Text>You entered: {text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
```

## Lists

### FlatList

```jsx
import React from 'react';
import { FlatList, View, Text } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

const ListExample = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});
```
