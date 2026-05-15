import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import ServiceSelectionScreen from '../screens/ServiceSelectionScreen';
import DateTimeSelectionScreen from '../screens/DateTimeSelectionScreen';
import BookingConfirmationScreen from '../screens/BookingConfirmationScreen';
import BookingsListScreen from '../screens/BookingsListScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#ffffff' },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{
            title: 'Sign In',
          }}
        />
        <Stack.Screen 
          name="Register" 
          component={RegisterScreen}
          options={{
            title: 'Sign Up',
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            title: 'Home',
            gestureEnabled: false, // Prevent swipe back to login
          }}
        />
        <Stack.Screen 
          name="NewBooking" 
          component={ServiceSelectionScreen}
          options={{
            title: 'New Booking',
          }}
        />
        <Stack.Screen 
          name="DateTimeSelection" 
          component={DateTimeSelectionScreen}
          options={{
            title: 'Select Date & Time',
          }}
        />
        <Stack.Screen 
          name="BookingConfirmation" 
          component={BookingConfirmationScreen}
          options={{
            title: 'Confirm Booking',
          }}
        />
        <Stack.Screen 
          name="BookingsList" 
          component={BookingsListScreen}
          options={{
            title: 'My Bookings',
          }}
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            title: 'Profile',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;