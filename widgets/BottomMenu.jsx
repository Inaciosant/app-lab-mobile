import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { Home, Barbell, Users, BarChart2 } from 'lucide-react-native'; 

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

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
    <StyledView className="flex-row bg-white pt-4 pb-6 rounded-t-2xl shadow-lg" style={{ shadowColor: '#000', shadowOffset: { width: 0, height: -2 }, shadowOpacity: 0.1, shadowRadius: 5, elevation: 10 }}>
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

        const color = isFocused ? '#0A0A0A' : '#4B5563'; 

        return (
          <StyledTouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            className="flex-1 items-center justify-center"
          >
            {routeIcons[route.name] ? routeIcons[route.name](color) : null}
            <StyledText style={{ color }} className={`mt-1 text-xs ${isFocused ? 'font-semibold' : 'font-normal'}`}>
              {label}
            </StyledText>
          </StyledTouchableOpacity>
        );
      })}
    </StyledView>
  );
};

export default BottomMenu;
