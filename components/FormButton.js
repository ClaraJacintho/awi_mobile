import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text } from 'react-native';
import {colors, dimensions} from '../styles/base.js';



class FormButton extends React.Component {
    render() {
        const {label, onPress} = this.props;
        return(
            <TouchableOpacity style={styles.containter} onPress={onPress}>
                <Text>{label}</Text>
            </TouchableOpacity>
        )
    }   
}


const styles = StyleSheet.create({
    button: {
        width: dimensions.fullWidth /2,
        color: colors.primary
    },
    text: {
        color: colors.primary
    }
})

export default FormButton;
