import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TweetCardHeader from './TweetCardHeader';
import TweetCardBottom from './TweetCardBottom';

const text =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae et culpa illum consequuntur veritatis maxime ipsam quas.';

const styles = StyleSheet.create({
  root: {
    height: 180,
    width: '100%',
    padding: 10,
    backgroundColor: '#ffffff',
    marginVertical: 5,
  },
  CardContentContainer: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20,
  },
  CardContentText: {
    fontSize: 15,
    textAlign: 'left',
  },
});

const TweetCard = () => (
  <View style={styles.root}>
    <TweetCardHeader />
    <View style={styles.CardContentContainer}>
      <Text style={styles.CardContentText}>{text}</Text>
    </View>
    <TweetCardBottom />
  </View>
);

export default TweetCard;
