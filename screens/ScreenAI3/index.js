import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const WelcomeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome!</Text>
      </View>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.descriptionText}>{"Step into our community-driven app and start borrowing items from your neighbors today!        "}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  headerContainer: {
    marginBottom: 20
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150
  },
  textContainer: {
    marginTop: 20,
    paddingHorizontal: 40
  },
  descriptionText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    fontFamily: "inherit"
  },
  button: {
    marginTop: 30,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 25,
    elevation: 3
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default WelcomeScreen;