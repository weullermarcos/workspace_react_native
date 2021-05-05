/**
 * Projeto usando Async Storage
 */

import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Page = styled.SafeAreaView`

  flex: 1;
  align-items: center;
`;

const Input = styled.TextInput`

  font-size: 15px;
  border: 1px solid #000000;
  height: 50px;
  width: 90%;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Salvar = styled.Button``;

const NameArea = styled.View`

  padding: 20px;
  background-color: #CCCCCC;
  height: 60px;
  width: 90%;
  margin-top: 20px;
`;

const Nome = styled.Text`

  font-size: 18px;
`;

export default () => {

  const [nome, setNome] = useState('');

    // criando uma const para pegar o nome digitado
  const [novoNome, setNovoNome] = useState('');

  // criando uma funcao assincrona para quando clicar no botao salvar
  const handleSave = async () => {

    // verifica se o novo nome foi preenchido
    if(novoNome != ''){

      // salva o novo nome
      await AsyncStorage.setItem('@nome', novoNome)
      setNome(novoNome);
    }
  }

  // funcao para recuperar o nome gravado
  const getNome = async () => {

    const value = await AsyncStorage.getItem('@nome')
    setNome(value);
  }

  // sera executado ao abrir o aplicativo
  useEffect(()=>{

    getNome();

  }, []);

  return (

    <Page> 

      <Input placeholder="Seu nome:" value={novoNome} onChangeText={e=>setNovoNome(e)}/>
      <Salvar title="Salvar" onPress={handleSave}/>
      <NameArea> 
        <Nome>{nome}</Nome>
      </NameArea>

    </Page>

  );
}

