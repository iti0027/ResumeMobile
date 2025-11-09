import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const academicsStyle = StyleSheet.create({
    section:{
        marginBottom: 24,
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    title:{
        fontSize: 20,
        alignItems: 'center',
        marginBottom: 8,
        marginLeft: 8,
    },
    text:{
        fontSize: 16,
        color: Colors.primaryText,
        marginLeft: 4,
        
    },
    subtext:{
        fontSize: 14,
        color: Colors.secondaryText,
        marginLeft: 4,
    }
});