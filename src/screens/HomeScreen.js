import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ScrollView
} from "react-native";
import TweetCard from "../components/TweetCard/TweetCard";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#00aced"
  }
});

class HomeScreen extends Component {
  state = {};
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <ScrollView>
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
          <TweetCard />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default HomeScreen;
