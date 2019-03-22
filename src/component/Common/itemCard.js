import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import home from '../../images/home.jpeg';
import experience from '../../images/experiences.jpeg';
import restaurant from '../../images/restaurant.jpeg';
import parlor from '../../images/parlor.jpeg';
import aibnb from '../../images/airbnb.png';

export const ItemCard = ({ displayImage, title, info, price }) => (
    <TouchableOpacity style={styles.itemContainer}>
        <Image style={styles.expImage} source={displayImage}/>
        <View style={styles.expName}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={styles.infoText}>{info}</Text>
            <Text style={styles.priceText}>{price}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    itemContainer: {
        width: '40%',
        flexGrow: 1,
        height: 200,
        marginBottom: 10,
    },
    expImage: {
        width: '40%',
        flex: 2
    },
    expName: {
        flex: 1,
        paddingTop: 10,
    },
    titleText: {
        fontSize: 10,
        textTransform: 'uppercase'
    },
    infoText: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold'
    },
    priceText: {
        fontSize: 14
    }
})