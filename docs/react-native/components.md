# Core Components and APIs

React Native provides a number of built-in Core Components ready for you to use in your app. You can find them all in the left sidebar (or menu above, if you are on a narrow screen). If you're not sure where to get started, take a look at the following categories:

- Basic Components
- User Interface
- List Views
- Android-specific
- iOS-specific
- Others

## Basic Components

### View and Text

**View** The most fundamental component for building a UI. 

**Text:** A component for displaying text.

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

**TextInput:** A component for inputting text into the app via a keyboard.

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

## Lists Views

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

### SectionList

Like FlatList, but for sectioned lists.

## User interface

These common user interface controls will render on any platform.

### Button

A basic button component for handling touches that should render nicely on any platform.

```jsx
import React from 'react';
import { View, Text, Button,  Alert } from 'react-native';

const ButtonExample = () => {
  const handlePress = () => {
    Alert.alert('Button pressed!');
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Press Me" onPress={handlePress} />
    
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

### Switch

Renders a boolean input  -- toggle on or off 


## Android-Specific

Many of the following components provide wrappers for commonly used Android classes.

### BackHandler

Detect hardware button presses for back navigation.

### DrawerLayoutAndroid

Renders a DrawerLayout on Android.

### PermissionsAndroid 

Provides access to the permissions model introduced in Android M.

### ToastAndroid

Create an Android Toast alert.

## iOS-Specific

### ActionSheetIOS

 API to display an iOS action sheet or share sheet.

## Others

These components may be useful for certain applications. For an exhaustive list of components and APIs, check out the sidebar to the left (or menu above, if you are on a narrow screen).

### ActivityIndicator 

Displays a circular loading indicator.

### Alert 

 Launches an alert dialog with the specified title and message.

### Animated

A library for creating fluid, powerful animations that are easy to build and maintain.

### Dimensions 

Provides an interface for getting device dimensions.

### KeyboardAvoidingView 

 Provides a view that moves out of the way of the virtual keyboard automatically.

### Linking

Provides a general interface to interact with both incoming and outgoing app links.

### Modal 

Provides a simple way to present content above an enclosing view.

### PixelRatio 

 Provides access to the device pixel density.

### RefreshControl

This component is used inside a ScrollView to add pull to refresh functionality.

### StatusBar 

Component to control the app status bar.


[Docs](https://reactnative.dev/docs/components-and-apis)