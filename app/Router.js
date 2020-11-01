import React from 'react';

import LoginScreen from 'lumin-app/app/screens/LoginScreen';
import DashboardScreen from 'lumin-app/app/screens/DashboardScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Router () {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Dashboard" component={DashboardScreen} />
			</Stack.Navigator>
	    </NavigationContainer>
	);
}