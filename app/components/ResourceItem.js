'use strict';

import React, { Component } from 'react'
import {
  Image,
  Text,
  View
} from 'react-native';

import { resourceStyles } from '../styles';

class ResourceItem extends Component {
  // A single resource for the resources list
  
  render() {
    return (
      <Text style={resourceStyles.listItem}>
        {this.props.resource.name}
      </Text>
    );
  }
}

export default ResourceItem;
