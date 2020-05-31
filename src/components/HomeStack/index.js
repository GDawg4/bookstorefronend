import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../Home';
import HomeDetails from '../HomeDetails';
import TagPage from '../TagPage';

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator>
        <Stack.Screen 
            name="Home" 
            component={Home}
        />
        <Stack.Screen 
            name="HomeDetails" 
            component={HomeDetails} 
            options={{
                headerBackTitle: 'Back',
                headerTitle: null
            }}
        />
        <Stack.Screen
            name="TagPage"
            component={TagPage}
            options={{
                headerBackTitle: 'Back',
                headerTitle: null
            }}
        />
    </Stack.Navigator>
)

export default HomeStack;