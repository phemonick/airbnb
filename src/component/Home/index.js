import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, FlatList, Image, ImageBackground } from 'react-native';
import { SearchBar, ItemCard } from '../Common';
import home from '../../images/home.jpeg';
import experience from '../../images/experiences.jpeg';
import restaurant from '../../images/restaurant.jpeg';
import parlor from '../../images/parlor.jpeg';
import aibnb from '../../images/airbnb.png';

const { width } = Dimensions.get('window');

const display = [{id: 1, image: home, name: 'Homes'}, {id: 2, image: experience, name: 'Experiences'}, {id: 3, image: restaurant, name: 'Restaurants'} ]

export default class Home extends Component {

    state = {
        offset: 0,
        scrollPosition: 'up'
    }

    renderDisplay = ({item}) => {
        console.log('************', item)
        return (
            
            <TouchableOpacity style={styles.experiences}>
                <Image style={styles.expImage} source={item.image}/>
                <View style={styles.expName}>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    
    scroll = (event) => {
       let currentOffset = event.nativeEvent.contentOffset.y;
       console.log('************', currentOffset);
       let direction = currentOffset > this.state.offset ? 'down' : 'up';
       this.setState({
           ...this.state, scrollPosition: direction, offset: currentOffset
       })
    }
    


    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <SearchBar />
                </View>
                
                <View style={styles.topContainer}>
                    <View style={[styles.topBtn, {display: this.state.scrollPosition === 'up' ? '': 'none'}]}>
                        <TouchableOpacity style={styles.primBtn}>
                            <Text>Dates</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.primBtn}>
                            <Text>Guests</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView 
                        onScroll ={this.scroll}
                    >
                        <Text style={styles.textHeading}> What Can we help you find, P?</Text>
                        <View style={styles.listContainer}>
                            <FlatList
                                data={display}
                                horizontal={true}
                                keyExtractor={display.id}
                                renderItem={this.renderDisplay}
                            />
                        </View>

                         <Text style={styles.textHeading}>Introducing Airbnb Plus</Text>
                         <Text>A new selection of homes verified for quality & comfort</Text>
                         <ImageBackground source={parlor} style={styles.parlor}>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                                <Image source={aibnb} />
                                <Text style={styles.plus}>Plus</Text>
                            </View>
                            <TouchableOpacity style={{backgroundColor: '#fff', padding: 10}}>
                                <Text style={styles.btnText}>Explore Home ></Text>
                            </TouchableOpacity>

                         </ImageBackground>

                         <Text style={styles.textHeading}>Homes around the world</Text>

                         <View style={styles.itemsCards}>
                             <ItemCard 
                                title='entire house - fujieda'
                                displayImage={home}
                                info='charming traditional house(easy to ...)'
                                price='$78per night'
                             />

                             <ItemCard 
                                title='entire house - fujieda'
                                displayImage={home}
                                info='charming traditional house(easy to ...)'
                                price='$78per night'
                             />

                             <ItemCard 
                                title='entire house - fujieda'
                                displayImage={home}
                                info='charming traditional house(easy to ...)'
                                price='$78per night'
                             />
                         </View>

                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        top: 40,
        position: 'absolute',
        width,
    },
    topContainer: {
        // position: 'absolute',
        // top: 100,
        marginTop: 100,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15
    },
    topBtn: {
        flexDirection: 'row',
        marginBottom: 40
    },
    primBtn: {
        borderWidth: 1,
        padding: 7,
        borderColor: '#ddd',
        borderRadius: 4,
        marginRight: 7
    },
    expImage: {
        width: 140,
        flex: 2
    },
    experiences: {
        marginRight: 15,
        height: 140,
        borderWidth: 1,
        borderColor: '#fff',
        shadowColor: '#ddd',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.95,
        shadowRadius: 2,

    },
    listContainer: {
        marginBottom: 30
    },
    expName: {
        flex: 1,
        paddingTop: 10,
        paddingLeft: 10
    },
    textHeading: {
        fontWeight: 'bold',
        fontSize: 26,
        marginBottom: 20
    },
    parlor: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        textTransform: 'capitalize'
    },
    itemsCards: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    plus: {
        fontSize: 24,
    }
})