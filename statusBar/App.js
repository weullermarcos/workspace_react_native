/**
 * StatusBar
 * 05/05/2021 - Weuller Marcos
 */

import React, {useState, useEffecf} from 'react';
import {StatusBar} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #0000FF;
`;

const Botao = styled.Button``;

export default () => {

  const [hide, setHide] = useState(false);

  return(

    <Page> 

      <StatusBar barStyle="light-content" backgroundColor="#0000FF" 
                 hidden={hide} animated={true}/>

      <Botao title="Mostrar/Esconder barra de status" onPress={() => setHide(!hide)}/>

    </Page>

  );

}



