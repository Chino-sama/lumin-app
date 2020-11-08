import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Router from 'lumin-app/app/Router';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const customFonts = {
	'Bhavuka': require('lumin-app/assets/fonts/Bhavuka.ttf'),
};

if(__DEV__) {
	import('lumin-app/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function App() {

	const [fontsLoaded, setFontsLoaded] = useState(false);

	useEffect(() => {
		_loadFontsAsync();
	}, []);

	_loadFontsAsync = async () => {
		await Font.loadAsync(customFonts);
		setFontsLoaded(true);
	}

	return fontsLoaded ? (
		<View style={styles.container}>
			<Router />
			<StatusBar style="auto" />
		</View>
	) : <AppLoading />;
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
