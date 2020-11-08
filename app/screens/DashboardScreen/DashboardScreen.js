import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { getSensorData } from 'lumin-app/app/services/ApiService';
import styles from './DashboardScreen.styles';

export default function DashboardScreen(props) {

	const [sensorData, setSensorData] = useState({});

	useEffect(() => {
		fetchSensorData();

		const polling = setInterval(fetchSensorData, 5000);

		return () => {
			clearInterval(polling);	
		} 
	}, []);

	const fetchSensorData = async () => {
		const accessToken = await AsyncStorage.getItem('@accessToken');
		let result = await getSensorData({
			"Authorization": `Bearer ${accessToken}`,
		});
		setSensorData(result.data);		
	}

	const logout = async () => {
		await AsyncStorage.setItem('@accessToken', '');
		props.navigation.navigate('Login');
	}

	return (
		<View style={styles.container}>
			<View style={styles.textContainer}>
				<Text style={styles.sensorText}>Temperatura: </Text>
				<Text style={styles.sensorText}>{Math.round(sensorData.temperature) || '-'} °C</Text>
			</View>
			<TouchableOpacity 
				style={styles.button}
				onPress={logout}
			>
				<Text style={styles.btnText}>Cerrar Sesión</Text>
			</TouchableOpacity>
		</View>
	)
}