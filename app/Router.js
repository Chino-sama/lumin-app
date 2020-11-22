import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import LoginScreen from 'lumin-app/app/screens/LoginScreen';
import DashboardScreen from 'lumin-app/app/screens/DashboardScreen';

import Text from 'lumin-app/app/components/Text';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function Router () {

	const [token, setToken] = useState('');
	
	useEffect(() => {
		getToken();
	}, []);

	const getToken = async () => {
		const savedToken = await AsyncStorage.getItem('@accessToken');
		setToken(savedToken);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
			        	backgroundColor: '#000000',
			        },
				}}
			>
				{!token ? 
					<Stack.Screen 
						name="Login" 
						component={LoginScreen}
						options={{
							headerShown: false,
						}}
					/> : 
					<Stack.Screen 
						name="Dashboard" 
						component={DashboardScreen} 
						options={{
							headerTitle: props => <Text text='Hikari' color='#FFFFFF' size={24}/>,
							headerLeft: props => null,
						}}
					/>
				}
			</Stack.Navigator>
	    </NavigationContainer>
	);
}