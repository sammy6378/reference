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
A container for other components, similar to a `<div>` in HTML.

```bash
import { View } from 'react-native';

<View style={{ padding: 20, backgroundColor: 'lightblue' }}>
  {/* Child components go here */}
</View>
```

**Text:** A component for displaying text.
Allows user input via keyboard.


```bash
import { Text } from 'react-native';

<Text style={{ fontSize: 18 }}>Hello, world!</Text>
```

Props

- numberOfLines: Limits lines of text.
- ellipsizeMode: Controls how text is truncated.

```bash
<Text numberOfLines={1} ellipsizeMode="tail">
  This is a very long sentence that will be truncated.
</Text>
```

#### More code sample

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
### Pressable

- onPress: Triggered when pressed.
- onLongPress: Triggered on long press.
- disabled: Disables interaction.
- android_ripple: Adds ripple effect on Android.

```jsx
<Pressable
  onPress={() => alert('Pressed')}
  android_ripple={{ color: 'gray' }}
>
  <Text>Tap Me</Text>
</Pressable>
```

### TouchableOpacity

```jsx
import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';

const ButtonExample = () => {
  const handlePress = () => {
    Alert.alert('Button pressed!');
  };

  return (
    <View style={{ padding: 20 }}>
      
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

props

- value: Controlled input value.
- onChangeText: Callback when text changes.
- placeholder: Hint text.
- secureTextEntry: Hides input (e.g., for passwords).
- keyboardType: Type of keyboard (numeric, email-address, etc

```jsx
<TextInput
  value={name}
  onChangeText={setName}
  placeholder="Enter your name"
  secureTextEntry={false}
  keyboardType="default"
/>
```

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

### Image

Renders an image from a URL or local file.

props

- source: Required. URI or local image.
- resizeMode: How image scales (cover, contain, etc.).
- onLoad, onError: Event handlers.

```bash
import { Image } from 'react-native';

<Image
  source={{ uri: 'https://example.com/image.png' }}
  style={{ width: 100, height: 100 }}
  resizeMode="contain"
  onLoad={() => console.log('Image loaded')}
/>
```

### ScrowView

- horizontal: Enables horizontal scrolling.
- showsVerticalScrollIndicator: Show/hide scroll bar.
- onScroll: Scroll event handler.

```jsx
<ScrollView horizontal showsVerticalScrollIndicator={false}>
  <Text>Scrollable content</Text>
</ScrollView>
```

### StyleSheet

Defines styles for components.

```bash
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'white',
  },
```
## Lists Views

### FlatList

📦 What Is FlatList?
Efficiently renders large lists.
FlatList is a performant React Native component designed to render large lists of data. Unlike ScrollView, which renders everything at once, FlatList virtualizes the list—only rendering items that are visible on screen. This makes it ideal for long or dynamic lists.

🧠 Key Props Explained

- data - Array of items to display

- renderItem - Function that returns the UI for each item

- keyExtractor - Function to generate unique keys for each item

- horizontal - Enables horizontal scrolling

- numColumns - Displays items in a grid format

- ListHeaderComponent - Adds a header above the list

- ListFooterComponent - Adds a footer below the list

- ItemSeparatorComponent - Adds a separator between items

- ListEmptyComponent - Renders when the list is empty

- onRefresh & refreshing - Enables pull-to-refresh functionality

- extraData - Triggers re-render when external state changes

```bash
<FlatList
  data={[{ id: '1', name: 'Item 1' }]}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={item => item.id}
/>
```

```jsx
import { FlatList, Text } from 'react-native';

const data = [{ key: 'Item 1' }, { key: 'Item 2' }];

<FlatList
  data={data}
  renderItem={({ item }) => <Text>{item.key}</Text>}
/>
```

```jsx
import { FlatList, Text, View } from 'react-native';

const data = [
  { id: '1', title: 'Web Development' },
  { id: '2', title: 'App Design' },
  { id: '3', title: 'Consulting' },
];

const renderItem = ({ item }) => (
  <View style={{ padding: 20 }}>
    <Text>{item.title}</Text>
  </View>
);

<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={item => item.id}
/>

```

🖼️ Grid Layout Example

```jsx
<FlatList
  data={data}
  renderItem={renderItem}
  keyExtractor={item => item.id}
  numColumns={2}
  columnWrapperStyle={{ justifyContent: 'space-between' }}
/>
```

**🚀 Performance Tips**

- Use initialNumToRender to control how many items load initially.

- Use maxToRenderPerBatch to limit rendering per frame.

- Use removeClippedSubviews on Android to boost performance.

- Use getItemLayout if item height is fixed for faster scroll-to-index.

**🧰 When to Use FlatList vs ScrollView**

Short, static content - ScrollView  

Long, dynamic lists - FlatList 

Sectioned lists - SectionList 

### SectionList

Renders grouped data with section headers.
Like FlatList, but for sectioned lists.

- sections: Array of sections.
- renderItem: Render each item.
- renderSectionHeader: Render section header.
- keyExtractor: Unique key.

```bash
<SectionList
  sections={[{ title: 'Fruits', data: ['Apple', 'Banana'] }]}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text>{section.title}</Text>}
  keyExtractor={(item, index) => index.toString()}
/>
```

```jsx
import { SectionList, Text } from 'react-native';

const sections = [
  { title: 'Fruits', data: ['Apple', 'Banana'] },
  { title: 'Vegetables', data: ['Carrot', 'Spinach'] },
];

<SectionList
  sections={sections}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>}
/>
```

## User interface

These common user interface controls will render on any platform.

### Button

A basic button component for handling touches that should render nicely on any platform.

- title: Button label.
- onPress: Action on tap.
- disabled: Disable button.
- color: Button color (Android only).

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

Renders a boolean input. Toggle between on/off  state

- value: Boolean state.
- onValueChange: Callback when toggled.
- disabled: Disable switch.
- trackColor, thumbColor: Custom colors.

```bash
<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  trackColor={{ false: 'gray', true: 'green' }}
  thumbColor={isEnabled ? 'white' : 'black'}
/>
```

```jsx
import { Switch } from 'react-native';
import { useState } from 'react';

const [isEnabled, setIsEnabled] = useState(false);

<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
/>
```


## Android-Specific

Many of the following components provide wrappers for commonly used Android classes.

### BackHandler

Detect hardware button presses for back navigation and
Handles it.

```jsx
import { BackHandler } from 'react-native';

BackHandler.addEventListener('hardwareBackPress', () => {
  alert('Back button pressed!');
  return true;
});
```

### DrawerLayoutAndroid

Renders a DrawerLayout on Android or simply
Implements drawer navigation.

```jsx
import { DrawerLayoutAndroid, Text } from 'react-native';

<DrawerLayoutAndroid
  drawerWidth={300}
  drawerPosition="left"
  renderNavigationView={() => <Text>Drawer Content</Text>}
>
  <Text>Main Content</Text>
</DrawerLayoutAndroid>
```

### PermissionsAndroid 

Provides access to the permissions model introduced in Android M.
Requests runtime permissions.

```jsx
import { PermissionsAndroid } from 'react-native';

const requestCameraPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA
  );
  if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    alert('Camera permission granted');
  }
};
```

### ToastAndroid

Create an Android Toast alert.
Displays native toast messages.

```jsx
import { ToastAndroid } from 'react-native';

ToastAndroid.show('Hello from Android!', ToastAndroid.SHORT);
```

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