# AirMax3D
# 3D Shoe Model Viewer using React Native & Three.js

This is a mobile application built with **React Native** and **Three.js** to display a 3D model of a shoe. The application loads the 3D model of the shoe, applies textures, and allows users to view the shoe with real-time rotation.





## Features
- Renders a 3D shoe model using `OBJLoader` and `MTLLoader`.
- Applies textures like base color, normal map, and roughness.
- Implements real-time 3D rotation of the shoe.
- Utilizes `@react-three/fiber` for Three.js integration in React Native.
- Supports responsive canvas resizing for different screen sizes.

## Usage
- Once the app is running, the shoe model will be displayed on the screen.
- The shoe will rotate automatically on the Y-axis to give a full 360-degree view.

## Dependencies
React Native - A framework for building native apps using React.
Three.js - A JavaScript library for 3D graphics.
@react-three/fiber - React renderer for Three.js.
expo-three - Utility functions for integrating Three.js with Expo.
