import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, useWindowDimensions, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const window = useWindowDimensions()
  //const sizeFont = window.width * 0.05
  const [sizeFont, setSizeFont] = useState(window.width*0.05)
  const [sizeButton, setSizeButton] = useState(window.width*0.05)
  const [sizeButtonHeight, setSizeButtonHeight] = useState(window.height * 0.05)

  useEffect(() => {
    setSizeFont(window.width*0.05)
  }, [window.width])

  useEffect(() => {
    setSizeButton(window.width*0.5)
  }, [window.width])

  useEffect(() => {
    setSizeButtonHeight(window.height*0.5)
  }, [window.height])

  const buttonStyles = {
    width: sizeButton,
    borderWidth: 2,
    borderColor: 'black',
    height: sizeButtonHeight,
  };
  const textStyles = {fontSize: sizeFont,};
  return (
    <View style={styles.container}>
      <Text style={textStyles}>Width: {window.width}</Text>
      <Text style={textStyles}>Height: {window.height}</Text>
      <StatusBar style="auto" />
      <TouchableOpacity style={buttonStyles} >
        <Text>Click</Text>
      </TouchableOpacity>
    </View>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});