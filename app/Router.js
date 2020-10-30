import React from 'react';

import LoginScreen from 'lumin-app/app/screens/LoginScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Router () {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={LoginScreen} />
			</Stack.Navigator>
	    </NavigationContainer>
	);
}