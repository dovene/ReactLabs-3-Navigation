import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
class ConnexionScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pseudo: '',
            password: '',
        };
    }

    render() {
        const login = () => {
            if(this.state.pseudo===this.props.navigation.getParam('pseudo', '') && 
            this.state.password===this.props.navigation.getParam('password','')){
                this.props.navigation.navigate('Welcome', {
                    name: this.props.navigation.getParam('name', '') ,
                    pseudo: this.state.pseudo,
                    password: this.state.password,
                });
            } else {
                Alert.alert('Invalid parameters','Change pseudo and/or password',[{text:'Okay', style:'destructive',  }])
            }
        };


        return (
            <View style={styles.screen}>
                <Text>Connexion Screen</Text>

                <View style={styles.input}>
                    <TextInput placeholder='Pseudo'
                        value={this.state.pseudo}
                        onChangeText={(input) => this.setState({ pseudo: input })} />
                </View>

                <View style={styles.input}>
                    <TextInput placeholder='Password'
                        value={this.state.password}
                        onChangeText={(input) => this.setState({ password: input })} />
                </View>

                <View style={styles.button}>
                    <Button title='Validate' onPress={login} />
                </View>


            </View>
        );
    }
};


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    input: {
        margin: 10,
        width: '100%',

        borderBottomWidth: 1,

    },

    button: {
        margin: 10,
    },
});


export default ConnexionScreen;