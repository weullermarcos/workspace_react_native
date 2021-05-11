/**
 * Filmes em cartaz
 * Weuller Marcos - 10/05/2021
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button, FlatList, Image, View, StyleSheet, ActivityIndicator} from 'react-native';


const App = () => {

  // const para armazenar os filmes
  const [movies, setMovies] = useState([]);

  // const para o botao de loading
  const [loading, setLoading] = useState(false);

  // vai rodar uma unica vez ao iniciar o aplicativo
  useEffect(()=>{

    const requestMovies = async () => {

      // ativa o carregando
      setLoading(true);

      // Faz uma requisicao sincrona
      const req = await fetch("https://api.b7web.com.br/cinema/");
    
      // deserializa o json recebido
      const json = await req.json();

      if(json){

        // alert(json.length);
        setMovies(json);
      }

      // desativa o carregando
      setLoading(false);
    } 

    // chama funcao para requisitar os filmes
    requestMovies();
  }, []);

  return(
    <SafeAreaView style={styles.container}> 

      {loading &&
        <View style = {styles.loadingArea}> 
          <ActivityIndicator size='large' color='#FFFFFF'/>
          <Text style = {styles.loadingText}> Carregando... </Text>
        </View>
      }

      {!loading &&  
        <> 
          <Text style={styles.totalMovieText}> Total de filmes: {movies.length} </Text>
          <FlatList data={movies}
                    style={styles.list}
                    renderItem = {({item}) => (

                      <View style={styles.movieItem}> 
                        <Image source={require('./src/images/filme.jpg')} 
                              style={styles.movieImage}
                              resizeMode='contain'/>

                        <Text style={styles.movieTitle}> {item.titulo} </Text>
                      </View>
                    )}
                    keyExtractor = {item => item.titulo}
          />
        </>

      }

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor: '#333333'
  },

  totalMovieText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },

  list: {
    flex: 1
  },

  movieItem: {
    marginBottom: 30
  },

  movieImage: {
    height: 400
  },

  movieTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    marginTop: 5,
  },

  loadingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  loadingText: {
    color: '#FFFFFF'
  }

});

export default App;
