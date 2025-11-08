import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const homeStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.primaryText,
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    description: {
        fontSize: 18,
        color: Colors.secondaryText,
        textAlign: 'center',
        marginBottom: 10,
    },

    text: {
        color: Colors.primaryText,
        fontSize: 16,
        fontWeight: 'bold',
    }

});