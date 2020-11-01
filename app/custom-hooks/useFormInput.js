import { 
	useState,  
} from 'react';

export default function useFormInput (initialValue='') {
	const [value, setValue] = useState(initialValue);

	function handleChange(val) {
		setValue(val);
	}

	return {
		value,
		onChangeText: handleChange
	}
}