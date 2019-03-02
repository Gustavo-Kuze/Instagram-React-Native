import React, { Component } from 'react'
import Header from './src/components/Header'
import Post from './src/components/Post'
import { View } from 'react-native'

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Joana Elena Silva',
      comment: 'Excelente Foto!'
    },
    {
      nickname: 'Rafael dos Santos',
      comment: 'Nossa que LIXO!!!'
    }
    ]
    return (
      <View style={{ flex: 1 }}>
        <Header />
        <Post image={require('./assets/imgs/fence.jpg')}
          comments={comments} />
      </View>
    )
  }
}

