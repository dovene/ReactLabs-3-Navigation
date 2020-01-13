import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class HomeScreen extends React.Component {

    render() {        
      const gotoInscription = ()=>{
        this.props.navigation.navigate('Inscription')
      }
      const gotoAboutScreen = ()=>{
        this.props.navigation.navigate('About')
      }
  
      const gotoConnexion = ()=>{
        this.props.navigation.navigate('Connexion',{
            name: this.props.navigation.getParam('name', ''),
            pseudo: this.props.navigation.getParam('pseudo', ''),
            password: this.props.navigation.getParam('password', ''),
        })        
      }
  
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Let's navigate</Text>
          <View style={styles.button}>
          <Button title= 'Inscription' onPress={gotoInscription}/>
          </View>
          <View style={styles.button}>
          <Button title= 'Connexion' onPress={gotoConnexion}/>
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

  export default HomeScreen;