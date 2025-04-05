import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Testimonio from './Componente/Testimonio';

export default function App() {
  return (
    <View style={styles.App}>
      <StatusBar barStyle="ligth-content" backgroundColor="#3080a1" />
        <View style={styles.contenedorPrincipal}>
          <View style={styles.bannerCont}>
            <Image source={require('./imagenes/imagen1.png')} style={styles.banner} />
          </View>
         <Text style={styles.titulo} >Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp</Text>
          <ScrollView style={{width:'100%'}}>
         <Testimonio 
            imagen={require('./imagenes/imagen 3.png')}
            nombre='Shawn Wang'
            pais='Singapur'
            cargo='Ingeniero de software'
            empresa='Amazon'
            testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />

        <Testimonio
            imagen={require('./imagenes/imagen 4.png')}
            nombre='Emma Bostian'
            pais='Suecia'
            cargo='Ingeniera de software'
            empresa='Spotify'
            testimonio='Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'
        />

        <Testimonio
            imagen={require('./imagenes/imagen2.png')}  
            nombre='Sarah Chima'
            pais='Nigger'
            cargo='Ingeniera de software'
            empresa='ChatDesk'
            testimonio='FreeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'
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
  backgroundColor:'#1b1b32',
  marginTop:15,
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