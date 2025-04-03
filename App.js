import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Testimonio from './Componente/Testimonio';

export default function App() {
  return (
    <View style={styles.App}>
      <StatusBar barStyle="ligth-content" backgroundColor="#3080a1" />
        <View style={styles.contenedorPrincipal}>
          <View style={styles.bannerCont}>
            <Image source={require('/imagenes/imagen1.png')} style={styles.banner} />
          </View>
         <Text style={styles.titulo} >Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</Text>
          <ScrollView>
         <Testimonio 
            imagen={require('./imagenes/imagen2.png')}
            nombre='Shawn Wang'
            pais='Singapur'
            cargo='Ingeniero de software'
            empresa='Amazon'
            testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facere dolorem accusantium veniam perspiciatis autem harum quam est fugit molestias?'
        />

        <Testimonio
            imagen={require('./imagenes/imagen 3.png')}
            nombre='Emma Bostian'
            pais='Suecia'
            cargo='Ingeniera de software'
            empresa='Spotify'
            testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facere dolorem accusantium veniam perspiciatis autem harum quam est fugit molestias?'
        />

        <Testimonio
            imagen={require('./imagenes/imagen 4.png')}  
            nombre='Sarah Chima'
            pais='Nigger'
            cargo='Ingeniera de software'
            empresa='ChatDesk'
            testimonio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa facere dolorem accusantium veniam perspiciatis autem harum quam est fugit molestias?'
        /> 
        </ScrollView>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
App:{
  flex:1,
  backgroundColor:'#f1f1f1'
},
bannerCont:{
  height: 100,
  width: '100%',
},
banner:{
  height: 80, 
  width: '100%',
  resizeMode:'contain',
  backgroundColor:'#1b1b32'
},
contenedorPrincipal:{
  alignItems:'center',
  width:'100%',
},
titulo:{
  textAlign:'center',
  fontSize:20,
  fontWeight:'bold'
},

});