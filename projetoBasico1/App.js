/**
 * React Native Basico
 * Weuller - 18/05/2021
 */


 import React, {Component} from 'react';
 import {View, Text, Image} from 'react-native';

 export default class ProjetoBasico extends Component{

  render(){

    // criando uma variavel
    let imagem = {uri: 'https://www.google.com.br/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png'};

    return(

      <View> 
        <Text> Ola Mundo </Text>
        <Text> Ola Mundo </Text>
        <Text style={{ fontSize: 25, 
                       color:'red',
                       margin: 20}}> 
            Ola Mundo 
        </Text>

        <Image source={imagem}
               style={{height: 300, width: 300}}/>
      </View>

    );
  }
 }
