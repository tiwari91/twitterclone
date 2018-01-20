import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff"
  },
  innerRoot: {
    height: "80%",
    width: "90%",
    paddingTop: 5,
    position: "relative"
  },
  textInput: {
    height: "40%",
    width: "100%",
    fontSize: 18
  },
  button: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    backgroundColor: "#55ACEE",
    borderRadius: 20,
    right: 0,
    top: "60%",
    position: "absolute"
  },
  text: {
    top: "50%",
    right: 20,
    color: "#55ACEE",
    position: "absolute"
  }
});

class TweetScreen extends Component {
  state = {
    text: ""
  };

  handleTextInput = text => {
    this.setState({ text });
  };

  get _textLen() {
    return 140 - this.state.text.length;
  }

  render() {
    return (
      <View style={styles.root}>
        <View style={styles.innerRoot}>
          <TextInput
            value={this.state.text}
            onChangeText={this.handleTextInput}
            style={styles.textInput}
            multiline={true}
            maxLength={140}
            placeholder="What's happening?"
            autoFocus={true}
          />
          <Text style={styles.text}>{this._textLen}</Text>
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: "white"
              }}
            >
              Tweet
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default TweetScreen;
