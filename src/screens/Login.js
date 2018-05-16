import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
    TextInput,
    Button,
    AsyncStorage
} from 'react-native';

const width = Dimensions.get('screen').width;

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            usuario: '',
            mensagem: ''
        }
    }

    efetuaLogin() {
        const uri = "http://10.0.2.2:8080/api/public/login";
        //const uri = "https://instalura-api.herokuapp.com/api/public/login"

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify({
                login: this.state.usuario,
                senha: this.state.senha,
            }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        }

        fetch(uri, requestInfo)
            .then(response => {
                if (response.ok)
                    return response.text();

                throw new Error("Não foi possível efetuar login")
            })
            .then(token => {
                AsyncStorage.setItem('token', token);
                AsyncStorage.setItem('usuario', this.state.usuario);

            })
            .catch(e => this.setState({ mensagem: e.message }))
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Instateste</Text>
                <View style={styles.form}>
                    <TextInput style={styles.input}
                        placeholder="Usuário"
                        onChangeText={texto => this.setState({ usuario: texto })}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none" />

                    <TextInput style={styles.input}
                        placeholder="Senha"
                        onChangeText={texto => this.setState({ senha: texto })}
                        underlineColorAndroid="transparent"
                        secureTextEntry={true} />

                    <View style={styles.button}>
                        <Button title="Login" onPress={this.efetuaLogin.bind(this)} />

                    </View>
                </View>

                <Text style={styles.mensagem}>
                    {this.state.mensagem}
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 26,
    },
    form: {
        width: width * 0.8
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    button: {
        marginTop: 10
    },
    mensagem: {
        marginTop: 15,
        color: '#e74c3c'
    }    
})