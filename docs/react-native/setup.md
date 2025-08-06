# React Native Setup

## Prerequisites

Before you start, make sure you have:

- Node.js (v16 or higher)
- npm or Yarn
- React Native CLI or Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development on macOS)

## Installation

### Option 1: Expo CLI (Recommended for beginners)

```bash
npm install -g @expo/cli
npx create-expo-app MyApp
cd MyApp
npx expo start
```

### Option 2: React Native CLI

```bash
npm install -g @react-native-community/cli
npx react-native@latest init MyApp
cd MyApp
npx react-native start
```

## Project Structure

```
MyApp/
├── android/          # Android-specific code
├── ios/              # iOS-specific code
├── src/              # Your app code
│   ├── components/   # Reusable components
│   ├── screens/      # App screens
│   ├── utils/        # Utility functions
│   └── assets/       # Images, fonts, etc.
├── App.js            # Main app component
└── package.json      # Dependencies
```

## Running Your App

### Development

```bash
# Start Metro bundler
npx react-native start

# Run on Android
npx react-native run-android

# Run on iOS
npx react-native run-ios
```

### Building for Production

```bash
# Android
cd android
./gradlew assembleRelease

# iOS (requires macOS and Xcode)
npx react-native run-ios --configuration Release
```
