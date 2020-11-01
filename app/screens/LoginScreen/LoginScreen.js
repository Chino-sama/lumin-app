import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { apiLogin } from 'lumin-app/app/services/ApiService';
import useFormInput from 'lumin-app/app/custom-hooks/useFormInput';
import styles from './LoginScreen.styles';

export default function LoginScreen(props) {

	const userName = useFormInput();
	const pass = useFormInput();

	const handleSubmit = async () => {
		const result = await apiLogin({
			username: userName.value,
			password: pass.value,
		});
		await AsyncStorage.setItem('@accessToken', result.accessToken);

		props.navigation.navigate('Dashboard');
	};

	return (
		<View style={styles.container}>
			<TextInput 
				{...userName}
				style={styles.input}
				placeholder='Usuario'
				autoCapitalize='none'
			/>
			<TextInput 
				{...pass}
				style={styles.input}
				placeholder='Contraseña'
				autoCapitalize='none'
				secureTextEntry
			/>
			<TouchableOpacity
		        style={styles.button}
		        onPress={handleSubmit}
		    >
	        	<Text>Iniciar Sesión</Text>
	        </TouchableOpacity>
		</View>
	);
}