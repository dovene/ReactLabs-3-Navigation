import React from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

class InscrptionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pseudo: '',
            password: '',
        };
    }


    render() {
      return (
        <View style={styles.screen}>
          <Text>Inscription Screen</Text>
         
          <View style={styles.input}>
          <TextInput placeholder='Full name'
          value = {this.state.name}
          onChangeText = {(input)=>this.setState({name:input})}/>
          </View>
         
          <View style={styles.input}>
          <TextInput placeholder='Pseudo'
          value = {this.state.pseudo}
          onChangeText = {(input)=>this.setState({pseudo:input})}/>
          </View>

          <View style={styles.input}>
          <TextInput placeholder='Password'
          value = {this.state.password}
          onChangeText = {(input)=>this.setState({password:input})}/>
          </View>

          <View style={styles.button}>
          <Button title='Validate' onPress={() => {
            this.props.navigation.navigate('Home', {
              name: this.state.name,
              pseudo: this.state.pseudo,
              password: this.state.password,
            });
          }}/>
          </View>

        </View>
      );
    }
  };


  const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    input:{
       margin:10,
       width: '100%',

       borderBottomWidth: 1,

    },

    button:{
        margin:10,
     },
});

export default InscrptionScreen;
