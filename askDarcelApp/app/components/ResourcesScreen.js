import React, { Component } from 'react'
import {
  View,
  Text
} from 'react-native'

import Header from './Header';
import ResourceList from './ResourceList';

// import styles
import styles from '../styles/main';

// Load resources into state when this loads

class ResourcesScreen extends Component {
  render() {
    return (
      <View>
        <Header />
        <Text>Resources</Text>
        <ResourceList />
      </View>
    )
  }
}

export default ResourcesScreen;