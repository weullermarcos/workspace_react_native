/**
 * React Native Basico
 * Weuller - 18/05/2021
 */


 import React, {Component} from 'react';
 import {View, Text, Image, StyleSheet} from 'react-native';

 // Criando um componente para imagem 
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

 class Janta extends Component{

  // criando um construtor para a classe janta
  constructor(props){

    // tornando a props usuau em todos os lugares do componente
    super(props);

    this.state = {comida: props.comida};
    var comidas = ['pizza', 'pequi', 'arroz', 'feijao', 'macarrao'];

    // criando um intervalo de mudanca a cada 1 segundo
    setInterval(()=>{

      this.setState(previousState => {

        // gerando um numero aleatorio baseado na quantidade de comidas 
        var n = Math.floor(Math.random() * comidas.length);

        // retorna uma comida aleatoria baseada no n gerado
        return {comida: comidas[n]};

      });

    }, 3000);

  }

  render(){

    return(

      <View> 
        <Text style={styles.texto1}> 
          Vc vai jantar: 
        </Text>
        <Text style={{textAlign: 'center', fontSize: 20}}> 
          {this.state.comida}
        </Text>
      </View>

    );
  }
 }

 export default class ProjetoBasico extends Component{

  render(){

    return(

      <View> 

        <Janta comida='mamao'/>

        <Imagem nome='google' largura='400' altura='300'/>

        <Text style={[styles.texto1, styles.texto2]}>
          Texto massa 
        </Text>

      </View>

    );
  }
 }

 const styles = StyleSheet.create({

  texto1:{
    textAlign: 'center', 
    marginTop: 20,
    fontWeight: 'bold', 
    fontSize: 20,
    color: 'red'
  },

  texto2:{
    marginTop: 10,
    fontWeight: '400', 
    fontSize: 30,
    color: '#00FF00'
  }

 });
