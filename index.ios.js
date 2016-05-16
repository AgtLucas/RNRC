import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native'

class RNRC extends Component {

  constructor () {
    super()
    this.state = {
      color: ''
    }
  }

  componentWillMount () {
    this.randomColor()
  }

  randomColor () {
    let color = '#' + ('000000' + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6)
    this.setState({
      color: color
    })
    return color
  }

  handlerClick () {
    this.randomColor()
  }

  render () {
    let color = this.state.color
    console.log(color)

    let containerStyle = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color
    }

    return (
      <View style={containerStyle}>
        <Text style={styles.welcome}>
          {color}
        </Text>
        <TouchableHighlight onPress={this.handlerClick.bind(this)}>
          <Text style={styles.welcome}>New Color</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})

AppRegistry.registerComponent('RNRC', () => RNRC)
