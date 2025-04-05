import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Testimonio(props) {
  return (
    <View style={styles.contenedorTestimonio}>
      <View style={styles.ImgContainer}>
        <Image source={props.imagen} style={styles.imagenTestimonio} />
      </View>
      <View style={styles.contenedorTextoTestimonio}>
        <Text style={styles.nombreTestimonio}>
          <Text style={styles.negritas}>{props.nombre}</Text>
          <Text> en </Text>
          <Text style={styles.pais}>{props.pais}</Text>
        </Text>

        <Text style={styles.nombreTestimonio}>
          <Text >{props.cargo}</Text>
          <Text> en </Text>
          <Text style={styles.negritas}>{props.empresa}</Text>
        </Text>

        <Text style={styles.textoTestimonio}>{props.testimonio}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedorTestimonio: {
    flex: 1,
    flexDirection: "row",
    minHeight: 250,
    backgroundColor: "#fff",
    marginVertical: 10,
    marginHorizontal: 5,
  },
  ImgContainer: {
    flex: 1,
  },
  imagenTestimonio: {
    alignSelf: "center",
    height: 250,
    width: "100%",
    margin: 2,
    
  },
  contenedorTextoTestimonio: {
    flex: 2,
    alignSelf: "center",
    margin:4,
  },
  textoTestimonio: {
    textAlign: "justify",
    fontSize: 14,
  },
  negritas: {
    fontSize: 14,
    fontWeight: "bold",
  },
});