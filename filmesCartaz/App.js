/**
 * Filmes em cartaz
 * Weuller Marcos - 10/05/2021
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button, FlatList, Image, View} from 'react-native';


const App = () => {

  // const para armazenar os filmes
  const [movies, setMovies] = useState([]);

  const handleLoadButton = async () => {
  
    // Faz uma requisicao sincrona
    const req = await fetch("https://api.b7web.com.br/cinema/");
    
    // deserializa o json recebido
    const json = await req.json();

    if(json){

      setMovies(json);
    }

    // alert(json.length);

  }

  return(
    <SafeAreaView> 
      <Button title='Carregar' onPress={handleLoadButton}/>
      <Text> Total de filmes: {movies.length} </Text>
      <FlatList data={movies}
                renderItem = {({item}) => (

                  <View> 
                    <Image source={{uri: item.avatar}} style={{width: 200, height: 200}}/>
                    <Text> {item.titulo} </Text>
                  </View>
                )}
                keyExtractor = {item => item.titulo}

      />
    </SafeAreaView>
  );
}

export default App;
