import React, { useState } from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'


export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  return (
    <View style={styles.container}>
      <Image
        source={require('../../Img/Logo.png')}
        style={styles.logo}
      />

      <TextInput
        style={styles.input}
        onChangeText={(txt) => setEmail(txt)}
        placeholder="Digite seu email:"
      />

      <TextInput
        style={styles.input}
        onChangeText={(txt) => setSenha(txt)}
        secureTextEntry={true}
        placeholder="Digite sua senha:"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c7a87'
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  input: {
    marginTop: 10,
    padding: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
    borderRadius: 3
  },
  botao: {
    width: 300,
    height: 42,
    backgroundColor: '#121214',
    marginTop: 10,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  }
})