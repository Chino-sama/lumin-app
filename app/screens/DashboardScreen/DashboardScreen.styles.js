import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 16,
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginBottom: 16,
	},

	button: {
		backgroundColor: '#2681f2',
		alignItems: 'center',
		borderRadius: 5,
		marginTop: 64,
		padding: 8
	},

	icons: {
		marginHorizontal: 32
	},

	section: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
	},

	slider: {
		flex: 1, 
		height: 40, 
		marginHorizontal: 16
	},

	divider: {
		borderBottomWidth: 1,
		borderBottomColor: '#858585',
		marginBottom: 32,
		marginTop: 16,
	},

	sensorText: {
		fontSize: 20,
		marginRight: 10,
		fontFamily: 'Bhavuka'
	},

	textContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingBottom: 8,
		marginBottom: 24
	},

	btnText: {
		color: '#fff'
	}
});