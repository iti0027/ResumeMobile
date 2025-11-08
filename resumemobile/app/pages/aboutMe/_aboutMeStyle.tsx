import { Dimensions, StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

export const aboutMeStyle = StyleSheet.create({
    text:{
        marginTop: 8,
        fontSize: 16,
        textAlign: 'center',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 50,
        width: '100%'
    },
    item:{
        alignItems: 'center',
        width: '45%',
        flexDirection: 'column',
    },
    name: {
        fontWeight: 'bold',
        color: Colors.secondaryText,
    },
    myselfImage:{
        width: 100,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#ccc',
    },
    safiraImage:{
        width: 100,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#ccc',
    },
    perolaImage:{
        width: 100,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#ccc',
    },
    agathaImage:{
        width: 100,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#ccc',
    }
});     