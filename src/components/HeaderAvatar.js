import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';


const styles = StyleSheet.create({
  AvatarImage: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
  },
  buttons: {
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HeaderAvatar = () => (
  <TouchableOpacity style={styles.buttons} onPress={() => null}>
    <Image
      style={styles.AvatarImage}
      source={{
            uri:
              'https://pbs.twimg.com/profile_images/937921365595774976/o5ntqzhK_400x400.jpg',
          }}
    />
  </TouchableOpacity>
);


export default HeaderAvatar;
