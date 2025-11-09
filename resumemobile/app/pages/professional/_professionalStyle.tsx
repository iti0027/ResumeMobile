import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const professionalStyle = StyleSheet.create({
    scroll:{
        flex: 1,
        backgroundColor: Colors.background,
    },
    container: {
        padding: 16,
    },
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
        fontWeight: 'bold',
        color: Colors.primaryText,
        marginLeft: 8,
    },
    text:{
        fontSize: 16,
        color: Colors.primaryText,
        marginLeft: 4,
        textAlign: 'justify',
    },
    subtext:{
        fontSize: 14,
        color: Colors.secondaryText,
        marginLeft: 4,
    }
});