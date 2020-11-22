import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function TextComponent(props) {
	return (
		<Text style={{
			fontSize: props.size,
			color: props.color,
			fontFamily: 'Bhavuka',
		}}>
			{props.text}
		</Text>
	)
}

Text.propTypes = {
	size: PropTypes.number,
	text: PropTypes.string,
	color: PropTypes.string,
}

Text.defaultProps = {
	size: 24,
	color: '#000000',
}
