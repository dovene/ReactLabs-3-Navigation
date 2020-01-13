import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class WelcomeScreen extends React.Component {
    render() {
      const goHome = ()=>{
        this.props.navigation.navigate('Home')
      }
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Hello {this.props.navigation.getParam('name', '')} alias { this.props.navigation.getParam('pseudo', '')} </Text>
          
          <View style={styles.button}>
          <Button title= 'Aurevoir' onPress={goHome}/>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    button:{
        margin:10,
        width: '50%',
     },
  });

  export default WelcomeScreen;