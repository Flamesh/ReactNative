import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const menus = ['home', 'search', 'calendar', 'user'];

export default class BottomTab extends Component {
  render() {
    return (
      <View style={styles.bottoms}>
        {menus.map((e) => {
          return (
            <TouchableOpacity key={e}>
              <Icon name={e} size={30}/>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    bottoms: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        paddingHorizontal: 30,
    }
});
