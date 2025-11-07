import { StyleSheet } from 'react-native';

import { Colors } from './constants/colors';

export const globalStyles = StyleSheet.create({
    text: {
        color: Colors.primaryText,
        fontSize: 16,
    },
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});