# React Native Setup

## Prerequisites

Before you start, make sure you have:

- [Node.js](https://nodejs.org/en/download)(v16 or higher)
- npm or Yarn
- React Native CLI or Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development on macOS)

## Expo Command Line Interphase (CLI)

Understanding Expo CLI commands is crucial for efficient and effective development of React Native applications using the Expo ecosystem. The Expo CLI acts as the primary interface for interacting with Expo tools and services, streamlining various aspects of the development workflow.

#### Key reasons to understand Expo CLI commands:

**- Project Initialization and Setup:** Commands like npx expo init allow for quick and easy creation of new Expo projects with pre-configured templates, saving time on initial setup.

**- Development Server Management:** Commands such as npx expo start launch the development server, providing a local environment for running and testing your application during development.

**- Dependency Management:** npx expo install ensures that installed packages are compatible with your project's Expo SDK version, preventing common dependency-related issues.

**- Building and Deployment** When combined with EAS CLI, Expo CLI commands facilitate the process of building native app binaries for various platforms (iOS, Android) and publishing over-the-air updates.

**- Debugging and Troubleshooting:** Expo CLI offers features like instant access to the Hermes debugger and improved native build log formatting, aiding in identifying and resolving issues during development.

**- Continuous Native Generation (CNG):** Understanding how Expo CLI leverages CNG with commands like expo prebuild is essential for managing native projects, especially when integrating custom native modules or third-party libraries.

**- Web Support:** Expo CLI commands enable the development and bundling of web applications alongside native mobile apps, leveraging Metro for web support and features like static site generation with Expo Router.

**- Enhanced Developer Experience:** Built-in features like environment variable support, file-based routing with Expo Router, and first-class TypeScript support contribute to a smoother and more productive development experience.

## Expo cli commands

Start a server for developing your app:

```bash
npx expo start.
```

Generate the native Android and iOS directories for your project:
```bash
npx expo prebuild.
```

Build and run the native apps locally:

```bash
# for ios
npx expo run:ios 
```

```bash
# For Android
npx expo run:android
```

Install and update packages that work with the version of react-native in your project:

```bash
npx expo install <package-name>
```

**note:** npx expo can be used with npx react-native simultaneously.

**To get all Expo Commands**

```bash
npx expo -h
#Or 
npx expo --help
```

**To run expo command:**

```bash
npx expo <command>
```

## Option 1: Expo CLI (Recommended for beginners)


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
