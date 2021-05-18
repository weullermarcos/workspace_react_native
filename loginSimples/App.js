/**
 * Login Simples
 * Weuller Marcos - 17/05/2021
 */

import React, {useState} from 'react';
import  {StyleSheet, Button, Text, TextInput, View, SafeAreaView} from 'react-native';


const App = () => {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [status, setStatus] = useState('');
  const [showCupom, setShowCupom] = useState(false);

  const handleVerifyLogin = async () =>{

    setStatus('');
    setShowCupom(false);

    // e-mail valido: suporte@b7web.com.br
    // senha valida: 1234
    const req = await fetch('https://api.b7web.com.br/loginsimples/', {
      method: 'POST',
      body: JSON.stringify({
        email: email, 
        password: senha
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    const json = await req.json();

    if(json.status == 'ok'){

      setStatus('Acesso LIBERADO');
      setShowCupom(true);
    }
    else{

      setStatus('Acesso NEGADO');
      setShowCupom(false);
    }

  }

  return(
    <SafeAreaView style={styles.container}>

      <Text style={styles.header}> Desconto massa: </Text>

      <TextInput 
        value={email}
        onChangeText={t=>setEmail(t)}
        style={styles.input} 
        placeholder = 'Digite seu e-mail'
      />
      
      <TextInput 
        value={senha}
        onChangeText={t=>setSenha(t)}
        style={styles.input} 
        placeholder = 'Digite sua senha'
        secureTextEntry={true}
      />

      <Button title='Login' onPress={handleVerifyLogin}/>

      <Text style={styles.status}> {status} </Text>

      {showCupom && 
        <View style={styles.cupomArea}>
          <Text style={styles.cupomTitle}> Codigo de cupom: </Text>
          <Text style={styles.cupomCode}> AFSHA45AG23 </Text>
        </View>
      }

    </SafeAreaView>
  );

}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#333333',
    padding: 20
  },

  header:{
    color: '#FFFFFF',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },

  input:{
    height: 45,
    fontSize: 18,
    color: '#FFFFFF',
    backgroundColor: '#555555',
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
    paddingRight: 10
  },

  status:{
    margin: 50,
    textAlign: 'center',
    fontSize: 18,
    color:'#FFFFFF'
  },

  cupomArea:{
    backgroundColor: '#FFFFFF',
    padding: 30,
    borderRadius: 5
  },

  cupomTitle:{

    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20
  },

  cupomCode:{

    fontSize: 40,
    textAlign: 'center'
  }

});

export default App;
