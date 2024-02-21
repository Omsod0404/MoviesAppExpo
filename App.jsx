import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView, Image, StatusBar} from 'react-native';
import {useFonts} from 'expo-font';

const colorsPalette = {
  headerColor: '#002069',
  sectionColor: '#222222',
  secTextColor: '#F7C635',
  backColor: '#FFFFFF',
  fontColor: '#202120',
  bott1Color:'#9198A5',
  bott2Color:'#202020',
  bott3Color: '#0A5596'
};

const App = () => {

  const [fontsLoaded] = useFonts({
    'Cinepolis': require('./assets/fonts/Cinepolis.otf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-ExtraBold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
  });

  const moviesList = [
    {
      id: 1,
      name: 'Transformers: La Venganza de los Caídos',
      director: 'Michael Bay',
      classification: 'B',
      duration: '150 min',
      genre: 'Acción/Ciencia ficción',
      url: 'https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg'
    },
    {
      id: 2,
      name: 'Cars',
      director: 'John Lasseter',
      classification: 'AA',
      duration: '117 min',
      genre: 'Animada/Comedia',
      url: 'https://es.web.img2.acsta.net/pictures/14/05/28/11/24/435900.jpg',
    },
    {
      id: 3,
      name: 'Avengers',
      director: 'Joss Whedon',
      classification: 'B',
      duration: '143 min',
      genre: 'Acción/Fantasía',
      url: 'https://es.web.img3.acsta.net/pictures/14/03/10/10/35/587504.jpg',
    },
    {
      id: 4,
      name: 'El laberinto del Fauno',
      director: 'Guillermo del Toro',
      classification: 'B-15',
      duration: '119 min',
      genre: 'Fantasía/Belico',
      url: 'https://es.web.img3.acsta.net/pictures/16/02/25/16/13/438033.jpg',
    },
    {
      id: 5,
      name: 'Gran Turismo: De jugador a corredor',
      director: 'Neill Blomkamp',
      classification: 'B',
      duration: '135 min',
      genre: 'Deportes/Acción',
      url: 'https://es.web.img3.acsta.net/pictures/23/05/03/14/13/0249485.jpg',
    },
    {
      id: 6,
      name: 'Hasta el último hombre',
      director: 'Mel Gibson',
      classification: 'B-15',
      duration: '139 min',
      genre: 'Bélico/Suspenso',
      url: 'https://es.web.img3.acsta.net/pictures/16/11/07/12/02/147800.jpg',
    },
    {
      id: 7,
      name: 'Top Gun: Maverick',
      director: 'Joseph Kosinski',
      classification: 'B',
      duration: '131 min',
      genre: 'Acción/Suspenso',
      url: 'https://es.web.img2.acsta.net/pictures/22/03/29/15/57/1533124.jpg',
    },
    {
      id: 8,
      name: 'Rush: pasión y gloria',
      director: 'Ron Howard',
      classification: 'B-15',
      duration: '123 min',
      genre: 'Deportes/Acción',
      url: 'https://es.web.img3.acsta.net/pictures/210/260/21026026_20130809124413382.jpg',
    },
    {
      id: 9,
      name: 'Rápido y furioso: reto Tokio',
      director: 'Justin Lin',
      classification: 'B',
      duration: '104 min',
      genre: 'Acción/Crimen',
      url: 'https://mx.web.img3.acsta.net/pictures/20/03/04/23/48/3618241.jpg',
    },
    {
      id: 10,
      name: 'El zorro y el sabueso',
      director: 'Ted Berman, Art Stevens, Richard Rich',
      classification: 'A',
      duration: '83 min',
      genre: 'Aventura/Animación',
      url: 'https://mx.web.img3.acsta.net/pictures/20/04/22/01/01/5847431.jpg',
    },
  ];

  const [movies, setMovies] = useState(moviesList);

  return (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle={'light-content'} backgroundColor={colorsPalette.headerColor}/>
    <View style={styles.header}>
      <Text style={styles.headerText}>
        Welcome to Movies App! 🍿
      </Text>
    </View>
    <View style={styles.section}>
      <Text style={styles.secText}>
        Movies
      </Text>
    </View>
    <FlatList
      style={styles.flatListContainer}
      data={movies}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({item})=>(
      <>
        <View style={styles.movie}>
          <Image
            style={styles.image}
            source={{uri: item.url}}/>
          <View style={styles.description}>
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textDir}>Director: {item.director}</Text>
            <Text style={styles.textDur}>{item.duration}</Text>
            <Text style={styles.textClass}>{item.classification}</Text>
            <Text style={styles.textGenre}>{item.genre}</Text>
          </View>
        </View>
        </>
    )}
    />
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorsPalette.backColor,
    height: '100%',
    width: '100%',
    flex: 1
  },
  header: {
    backgroundColor: colorsPalette.headerColor,
    padding: 10,
    alignItems: 'center'
  },
  headerText: {
    fontSize: 26,
    textAlign: 'center',
    fontFamily: 'Cinepolis',
    color: colorsPalette.backColor
  },
  section: {
    backgroundColor: colorsPalette.sectionColor,
    padding: 5,
    alignItems: 'center'
  },
  secText: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: 'Montserrat-ExtraBold',
    color: colorsPalette.secTextColor,
    letterSpacing: 10
  },
  flatListContainer:{
    marginRight: 10,
    marginLeft: 10
  },
  movie:{
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: 10,
    marginBottom: 10
  },
  image: {
    width: 175,
    height: 250, 
  },
  description:{
    width: '50%',
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    marginLeft: 10
  },
  textName:{
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 20,
    color: colorsPalette.fontColor,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 5
  },
  textDir:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: colorsPalette.fontColor,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  textDur:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    width: 70,
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: colorsPalette.bott2Color,
    color: colorsPalette.backColor
  },
  textClass:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    width: 50,
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: colorsPalette.bott1Color,
    color: colorsPalette.backColor
  },
  textGenre:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    width: '100%',
    padding: 5,
    textAlign: 'center',
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: colorsPalette.bott3Color,
    color: colorsPalette.backColor
  },
});

export default App;