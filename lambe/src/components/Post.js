import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import Autor from './Autor'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.props.image} style={styles.image}/>
        <Autor email="gustavoksilva3@hotmail.com" nickname="Fulano_de_tal"/>
        <Comments comments={this.props.comments}/>
        <AddComment />
      </View>
    )
  }
}

const styles = {
    container: {
        flex: 1
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
}

export default Post