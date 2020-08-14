import React, { Component } from 'react';
import { StatusBar, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import Image from 'react-native-remote-svg'

import API from './api'

const renderItem = ({ item }) => {
    console.log('test', item.name,item.capital,item.flag)
    return (
        <>
            <Text style={styles.title}>name: {item.name}</Text>
            <Text style={styles.title}>capital: {item.capital}</Text>
            <Image
                source={{ uri: item.flag }}
                style={{ marginLeft: 10, height: 100, width: 300,  resizeMode: 'contain'  }} 
                resizeMode="contain"
                resizeMethod="resize"
            />
        </>    
    ) 
};

export default class Index extends Component {
    constructor(state){
        super(state)

        this.state = {
            countries : []
        }
    }

    componentDidMount(){
        API.getCountries().then(list => {
            this.setState({
                countries : list.slice(0, 10)
            })
        })        
    }

    render(){
        return (
            <ScrollView style={styles.container}>
                <Text>zer</Text>                
                <FlatList
                    data={this.state.countries}
                    renderItem={renderItem}
                    keyExtractor={item => item.alpha3Code}
                />
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
});