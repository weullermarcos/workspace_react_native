/**
 * RequisicaoPost
 * Weuller Marcos - 13-05-2021
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, Button, StyleSheet, TextInput} from 'react-native';

const App = () => {

  const [tittle, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSend = async () =>{

    if(tittle != '' && body != ''){

      // prepara uma requisicao do tipo post
      const req = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type':'application/json',
            },
            body: JSON.stringify({
              title: tittle,
              body: body,
              userId: 12345
            })
      });

      // recebe a resposta do servidor
      const json = await req.json();

      alert('ID: ' + json.id + ' - Titulo: ' + json.title);

    }
    else{
      alert('preencha as informacoes');
    }

  }

  return(

    <SafeAreaView style={styles.container}> 

      <Text style={styles.inputLabel}> Titulo: </Text>
      <TextInput style={styles.input} value={tittle} onChangeText={t=>setTitle(t)}/>

      <Text style={styles.inputLabel}> Corpo: </Text>
      <TextInput style={styles.input} value={body} onChangeText={t=>setBody(t)}/>

      <Button title='Enviar' onPress={handleSend}/>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#333',
    padding: 20
  },
  inputLabel:{
    fontSize: 20,
    color: '#FFF',
    marginBottom: 10
  },
  input:{
    backgroundColor: '#555',
    height: 45,
    fontSize: 18,
    color: '#FFF',
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 30,
    borderRadius: 5
  }
});

export default App;



