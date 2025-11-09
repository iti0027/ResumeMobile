import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const projectStyle = StyleSheet.create({
    title:{
        fontSize: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.background,
    },
    text:{
        fontSize: 16,
        color: Colors.primaryText,
        marginLeft: 4,
        textAlign: 'justify',
    },
});