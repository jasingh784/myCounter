import React , { useState, useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import MyButton from '../components/MyButton';
import ThemeContext from '../App.js'

export default function CounterScreen(props) {
    let [count, setCount] = useState(0)

  _decreaseCount = (num) => {
    setCount(prevCount => prevCount - num)
  }

  _increaseCount = (num) => {
    setCount(prevCount => prevCount + num)
  }

  _changeTheme = () => {
      setTheme(prevTheme => {
          prevTheme === 'light' ? 'dark' : 'light'
      })
  }

  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <View style={[styles.container, theme === 'light' ? styles.darkTheme : styles.container]}>
      <Text style={styles.countView}>{count}</Text>
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

      <Button title="Settings" onPress={() => props.navigation.navigate('SettingScreen')} />
      <Button title='Change Theme' onPress={() => _changeTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
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
      backgroundColor: 'black'
  }
});
