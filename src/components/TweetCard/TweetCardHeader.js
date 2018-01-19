import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  AvatarContainer: {
    flex: 0.2,
    alignSelf: 'stretch',
    paddingLeft: 5,
    justifyContent: 'center',
  },
  MetaContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  AvatarImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  MetaTopContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  MetaBottomContainer: {
    flex: 0.8,
    alignSelf: 'stretch',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  MetaFullName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444B52',
  },
  MetaText: {
    fontSize: 14,
    color: '#CAD0D6',
  },
});

const TweetCardHeader = () => (
  <View style={styles.root}>
    <View style={styles.AvatarContainer}>
      <Image
        style={styles.AvatarImage}
        source={{
          uri:
            'https://pbs.twimg.com/profile_images/937921365595774976/o5ntqzhK_400x400.jpg',
        }}
      />
    </View>

    <View style={styles.MetaContainer}>
      <View style={styles.MetaTopContainer}>
        <Text style={styles.MetaFullName}>Shankar Tiwari</Text>
        <Text style={[styles.MetaText, { paddingLeft: 5 }]}>@tiwari_22</Text>
      </View>

      <View style={styles.MetaBottomContainer}>
        <Text style={styles.MetaText}>1 Day ago</Text>
      </View>
    </View>
  </View>
);

export default TweetCardHeader;
