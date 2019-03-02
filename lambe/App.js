import React, {Component} from 'react'
import Header from './src/components/Header'
import Post from './src/components/Post'
import {View, Text} from 'react-native'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')}/>
      </View>
    )
  }
}

