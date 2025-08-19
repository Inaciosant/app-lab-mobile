// widgets/BottomMenu.js
import React from 'react';
import { XStack, YStack, Text } from 'tamagui';
import { Home, Barbell, Users, BarChart2 } from 'lucide-react-native';

const routeIcons = {
  Home: (color) => <Home color={color} size={24} />,
  Workouts: (color) => <Barbell color={color} size={24} />,
  Athletes: (color) => <Users color={color} size={24} />,
  Stats: (color) => <BarChart2 color={color} size={24} />,
};

const routeLabels = {
  Home: 'Home',
  Workouts: 'Workouts',
  Athletes: 'Athletes',
  Stats: 'Stats',
};

const BottomMenu = ({ state, descriptors, navigation }) => {
  return (

    <XStack
      backgroundColor="$background"
      paddingTop="$4"
      paddingBottom="$6"
      borderTopLeftRadius="$8"
      borderTopRightRadius="$8"
      elevation="$4"
      shadowColor="#000" 
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = routeLabels[route.name] || options.tabBarLabel || options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const color = isFocused ? '$color' : '$color10';

        return (
         
          <YStack
            key={route.key}
            flex={1}
            alignItems="center"
            justifyContent="center"
            onPress={onPress}
            onLongPress={onLongPress}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
          >
            {routeIcons[route.name] ? routeIcons[route.name](isFocused ? '#0A0A0A' : '#4B5563') : null}
            <Text
              color={color}
              marginTop="$1.5"
              fontSize="$1" 
              fontWeight={isFocused ? '600' : '400'} 
            >
              {label}
            </Text>
          </YStack>
        );
      })}
    </XStack>
  );
};

export default BottomMenu;