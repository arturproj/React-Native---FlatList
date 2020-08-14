import React, { Component } from 'react';
import { StatusBar, StyleSheet, SafeAreaView, FlatList, Text, ScrollView } from 'react-native';

import API from './api'

const renderItem = ({ item }) => {
    //console.log('test', item)
    return (
        <>
            <Text style={styles.title}>"{item.name} {'-'} {item.capital}"</Text>
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
                countries : list.slice(0, 100)
            })
            //console.log("success",this.state.countries.length)
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