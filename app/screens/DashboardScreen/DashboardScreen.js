import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { getSensorData } from 'lumin-app/app/services/ApiService';

export default function DashboardScreen() {

	const [sensorData, setSensorData] = useState({});

	useEffect(() => {
		fetchSensorData();

		const polling = setInterval(fetchSensorData, 15000);

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

	return (
		<View>
			<Text>Temperatura: {Math.round(sensorData.temperature) || '-'} °C</Text>
		</View>
	)
}