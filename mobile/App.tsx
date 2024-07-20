import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StatusBar,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.view}>
          <Text style={styles.text}>Swasthya AI</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 30,
  },

  view: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight,
    height: '100%',
  },

  scrollView: {
    marginHorizontal: 50,
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default App;
