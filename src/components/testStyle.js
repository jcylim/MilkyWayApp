import { StyleSheet } from 'react-native';

export const colors = {
    black: '#1a1917',
    gray: '#888888',
    background1: 'white',
    background2: '#21D4FD'
};

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1,
        paddingTop: 15
    },
    scrollviewContentContainer: {
        //paddingBottom: 50
    },
    exampleContainer: {
        //marginBottom: 5
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: '#800080',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 10
    },
    sliderContentContainer: {
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    },
    cardsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
