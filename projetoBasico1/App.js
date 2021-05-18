/**
 * React Native Basico
 * Weuller - 18/05/2021
 */


 import React, {Component} from 'react';
 import {View, Text, Image} from 'react-native';

 // Criando um componente para imagem - 
 // Um componente basicamente e uma classe
 class Imagem extends Component{

  render(){

    // criando uma variavel
    let imagem = {uri: 'https://www.google.com/logos/'+this.props.nome+'.jpg'};

    return(

      <Image source={imagem} 
             style={{width: parseInt(this.props.largura), height: parseInt(this.props.altura)}} 
             resizeMode='stretch'/>
    );
      
  }
 }

 export default class ProjetoBasico extends Component{

  render(){

    return(

      <View> 
        <Text> Ola Mundo </Text>
        <Text> Ola Mundo </Text>
        <Text style={{ fontSize: 25, 
                       color:'red',
                       margin: 20}}> 
            Ola Mundo 
        </Text>

        <Imagem nome='google' largura='400' altura='300'/>

      </View>

    );
  }
 }
