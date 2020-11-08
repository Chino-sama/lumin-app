import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 32,
		justifyContent: 'space-between',
	},

	input: {
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#000000',
		padding: 8,
		marginVertical: 8
	},

	logo: {
		width: 107,
		alignSelf: 'center',
		marginVertical: 32
	},

	button: {
		backgroundColor: '#000',
		alignItems: 'center',
		borderRadius: 5,
		marginVertical: 8,
		padding: 14,
	},

	btnText: {
		color: '#fff',
		fontSize: 24,
		fontFamily: 'Bhavuka',
	}
});