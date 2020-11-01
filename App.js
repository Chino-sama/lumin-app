import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Router from 'lumin-app/app/Router';

if(__DEV__) {
	import('lumin-app/config/ReactotronConfig').then(() => console.log('Reactotron Configured'))
}

export default function App() {
	return (
		<View style={styles.container}>
			<Router />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
