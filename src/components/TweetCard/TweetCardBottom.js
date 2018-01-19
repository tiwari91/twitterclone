import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { SimpleLineIcons, Entypo } from '@expo/vector-icons';

const ICON_SIZE = 20;

const styles = StyleSheet.create({
  root: {
    height: 40,
    flexDirection: 'row',
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 32,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
    color: '#CAD0D6',
  },
});

const isFavorited = false;

const TweetCardBottom = () => (
  <View style={styles.root}>
    <TouchableOpacity style={styles.buttons}>
      <SimpleLineIcons name="bubble" size={ICON_SIZE} color="#CAD0D6" />
      <Text style={styles.text}>1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttons}>
      <Entypo name="retweet" color="#CAD0D6" size={ICON_SIZE} />
      <Text style={styles.text}>2</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttons}>
      <Entypo
        name="heart"
        color={isFavorited ? 'red' : '#CAD0D6'}
        size={ICON_SIZE}
      />
      <Text style={styles.text}>3</Text>
    </TouchableOpacity>
  </View>
);

export default TweetCardBottom;
