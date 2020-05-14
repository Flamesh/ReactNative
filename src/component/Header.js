import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const W = Dimensions.get('window').width;

export default class BottomTab extends Component {
  render() {
    return (
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.LinearGradient}
        colors={['#5D0E7F', '#7A007E', '#9C007F']}>
        <View style={styles.line} />
        <View style={[styles.line, {top: 120, left: -200}]} />
        <View style={[styles.line, {top: 180, left: -130}]} />
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  LinearGradient: {
    height: (W * 3) / 9,
  },
  line: {
    position: 'absolute',
    width: W,
    height: 40,
    top: 100,
    left: -300,
    backgroundColor: 'rgba(255,255,255,0.1)',
    transform: [
      {
        rotate: '-35deg',
      },
    ],
    borderRadius: 60,
  },
});
