import React, { useEffect, useState } from 'react';
import { Animated, Easing, View, Text, TouchableOpacity, Switch } from 'react-native';
import { Slider } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import { getSensorData } from 'lumin-app/app/services/ApiService';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import FanIcon from 'lumin-app/app/icons/fan';
import PaletteIcon from 'lumin-app/app/icons/palette';
import BlindsIcon from 'lumin-app/app/icons/blinds';
import styles from './DashboardScreen.styles';

export default function DashboardScreen(props) {

	const [sensorData, setSensorData] = useState({});
	const [isAuto, setIsAuto] = useState(false);
	const [isFanOn, setFanOn] = useState(false);
	const [areBlindsOpen, setBlindsOpen] = useState(false);
	const [lightIntensity, setLightIntensity] = useState(1);
	const [ledColor, setLedColor] = useState([]);

	useEffect(() => {
		fetchSensorData();

		const polling = setInterval(fetchSensorData, 30000);

		return () => {
			clearInterval(polling);	
		} 
	}, []);

	const fetchSensorData = async () => {
		const accessToken = await AsyncStorage.getItem('@accessToken');
		let result = await getSensorData({
			"Authorization": `Bearer ${accessToken}`,
		});
		setSensorData(result);	
		console.log(result);	
	}

	const onSubmit = async (data) => {

	}

	const logout = async () => {
		await AsyncStorage.setItem('@accessToken', '');
		props.navigation.navigate('Login');
	}

	let rotateValueHolder = new Animated.Value(0);

	const rotateIcon = () => {
		rotateValueHolder.setValue(0);
		Animated.timing(rotateValueHolder, {
			toValue: 1,
			duration: 3000,
			easing: Easing.linear,
			useNativeDriver: false,
		}).start(() => rotateIcon());
	};

	const RotateData = rotateValueHolder.interpolate({
		inputRange: [0, 1],
		outputRange: ['0deg', '360deg'],
	});

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.sensorText}>{isAuto ? 'Auto': 'Manual'}</Text>
				<Switch
					trackColor={{ false: "#fff", true: "#000" }}
			        thumbColor={'#fff'}
			        ios_backgroundColor={isAuto ? '#000': '#fff'}
			        onValueChange={() => setIsAuto(!isAuto)}
			        value={isAuto}
				/>
			</View>
			<View style={styles.section}>
				<Animated.View
					style={{
						transform: [{ rotate: RotateData }],
					}}
				>
					<TouchableOpacity
						activeOpacity={0.6}
						onPress={rotateIcon}
					>
						<FanIcon />
					</TouchableOpacity>
				</Animated.View>
				<TouchableOpacity
					activeOpacity={0.6}
					style={styles.icons}
					onPress={() => {}}
				>
					<PaletteIcon />
				</TouchableOpacity>
				<TouchableOpacity
					activeOpacity={0.6}
					onPress={() => {}}
				>
					<BlindsIcon />
				</TouchableOpacity>
			</View>
			<View style={styles.section}>
				<MaterialCommunityIcons name="lightbulb-outline" size={32} color="#777" />
				<Slider
				    style={styles.slider}
				    minimumValue={0}
				    maximumValue={255}
			        thumbTintColor="#FFF"
				    minimumTrackTintColor="#000"
				    maximumTrackTintColor="#a2a2a2"
				/>
				<MaterialCommunityIcons name="lightbulb-on-outline" size={40} color="black" />
			</View>
			<View style={styles.divider} />
			<View style={styles.textContainer}>
				<Text style={styles.sensorText}>Iluminación </Text>
				<Text style={styles.sensorText}>{Math.round(sensorData.light) || '-'} Lux</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.sensorText}>Temperatura </Text>
				<Text style={styles.sensorText}>{Math.round(sensorData.temperature) || '-'} °C</Text>
			</View>
			{/*<TouchableOpacity 
				style={styles.button}
				onPress={logout}
			>
				<Text style={styles.btnText}>Cerrar Sesión</Text>
			</TouchableOpacity>*/}
		</View>
	)
}