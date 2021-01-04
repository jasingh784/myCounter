import React , { useState, useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import MyButton from '../components/MyButton';
import { back } from 'react-native/Libraries/Animated/src/Easing';


export default function CounterScreen(props) {
    let [count, setCount] = useState(0)
    let [theme, setTheme] = useState('light');

  _decreaseCount = (num) => {
    setCount(prevCount => prevCount - num)
  }

  _increaseCount = (num) => {
    setCount(prevCount => prevCount + num)
  }

  _changeTheme = () => {
      setTheme(prevTheme => 
          prevTheme === 'light' ? 'dark' : 'light'
      )
  }

  _resetCount = () => {
    setCount(0);
  }

  //const [theme, setTheme] = useContext(ThemeContext);

  return (
    <View style={[styles.container, theme === 'light' ? styles.lightTheme: styles.darkTheme ]}>
      <Text style={[styles.countView, theme === 'light' ? styles.coutViewLight: styles.coutViewDark]}>{count}</Text>
      <View style={styles.buttonGroup}>
        <MyButton title="-1" onMyPress={() => _decreaseCount(1)} />
        <MyButton title="+1" onMyPress={() => _increaseCount(1)} />
      </View>
      <View style={styles.buttonGroup}>
        <MyButton title="-4" onMyPress={() => _decreaseCount(4)} />
        <MyButton title="+4" onMyPress={() => _increaseCount(4)} />
      </View>
      <View style={styles.buttonGroup}>
        <MyButton title="-5" onMyPress={() => _decreaseCount(5)} />
        <MyButton title="+5" onMyPress={() => _increaseCount(5)} />
      </View>
      <MyButton title="Reset" onMyPress={_resetCount} style={styles.resetButton}/>
      <Button title="Change Theme" onPress={() => _changeTheme()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  countView: {
    margin: 24,
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 50
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10,
  },
  darkTheme: {
    backgroundColor: '#1a0000',
  },
  lightTheme: {
    backgroundColor: '#ecf0f1',
  },
  coutViewDark: {
    color: '#e600ac',
  },
  coutViewLight: {
    color: '#000000',
  }, 
  resetButton: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
  }
});
