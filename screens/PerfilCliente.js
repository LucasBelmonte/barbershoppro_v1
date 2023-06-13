import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Pressable,
  Text,
  ImageBackground,
  Image,
} from "react-native";
// import {  } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PerfilCliente = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.perfilCliente}
      contentContainerStyle={styles.perfilClienteScrollViewContent}
    >
      <View style={[styles.perfilClienteChild, styles.rectangleViewBg]} />
      {/* <Image
        style={styles.perfilClienteItem}
        contentFit="cover"
        source={require("../assets/rectangle-43.png")}
      /> */}
      <Text style={[styles.seuPerfil, styles.perfilText]}>Seu perfil</Text>
      
      <Text style={[styles.cliente, styles.clienteTypo]}>{`Cliente `}</Text>
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.barbeiroIcon, styles.barbeiroIconLayout]}
        resizeMode="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Text style={[styles.clientegmailcom, styles.clienteTypo]}>
        cliente@gmail.com
      </Text>
      <Text style={[styles.editarPerfil, styles.perfilText]}>
        Editar perfil
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <Image
        style={[styles.perfilClienteChild1, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Text style={[styles.barbershoppro, styles.perfilText]}>
        BarbershopPRO
      </Text>
      <Image
        style={[styles.barbeiroIcon1, styles.barbeiroIconLayout]}
        contentFit="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Pressable
        style={[styles.inicio, styles.inicioPosition]}
        onPress={() => navigation.navigate("InicioCliente")}
      >
        <Text style={[styles.inicio1, styles.inicio1Typo]}>Inicio</Text>
      </Pressable>
      <Pressable
        style={[styles.perfil, styles.inicioPosition]}
        onPress={() => navigation.navigate("PerfilCliente")}
      >
        <Text style={[styles.perfil1, styles.inicio1Typo]}>Perfil</Text>
      </Pressable>
      <Pressable
        style={[styles.agenda, styles.inicioPosition]}
        onPress={() => navigation.navigate("AgendaCliente")}
      >
        <Text style={[styles.agenda1, styles.inicio1Typo]}>Agenda</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  perfilClienteScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 800,
    paddingVertical: 360,
  },
  rectangleViewBg: {
    backgroundColor: Color.goldenrod,
    position: "absolute",
  },
  perfilText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    position: "absolute",
  },
  perfilLayout: {
    borderRadius: Border.br_8xs,
    left: 22,
  },
  clienteTypo: {
    height: 35,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 56,
    width: 56,
    position: "absolute",
  },
  barbeiroIconLayout: {
    height: 38,
    width: 50,
    position: "absolute",
  },
  inicioPosition: {
    
    top: 68,
    position: "absolute",
  },
  inicio1Typo: {
    left: 5,
    width: 70,
    zIndex: 20,
    top: 18,
    fontFamily: FontFamily.interLightItalic,
    fontWeight: "300",
    fontStyle: "italic",
    fontSize: FontSize.size_xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 32,
    alignItems: "flex-end",
    display: "flex",
    textAlign: "left",
    color: Color.black,
  },
  perfilClienteChild: {
    top: 212,
    width: 316,
    height: 136,
    zIndex: 0,
    borderRadius: Border.br_8xs,
    left: 35,
  },
  perfilClienteItem: {
    top: 386,
    borderRadius: Border.br_22xl,
    width: 129,
    height: 43,
    zIndex: 1,
    left: 117,
    position: "absolute",
  },
  seuPerfil: {
    top: 154,
    left: 103,
    width: 154,
    zIndex: 2,
    height: 39,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
  },
  perfilClienteInner: {
    top: 232,
    width: 244,
    height: 48,
    zIndex: 3,
    position: "absolute",
    borderRadius: Border.br_8xs,
    left: 22,
  },
  cliente: {
    left: 115,
    width: 99,
    zIndex: 4,
    top: 224,
  },
  ellipseIcon: {
    left: 41,
    zIndex: 5,
    top: 224,
  },
  barbeiroIcon: {
    top: 233,
    left: 45,
    zIndex: 6,
  },
  clientegmailcom: {
    top: 280,
    left: 45,
    width: 285,
    zIndex: 7,
  },
  editarPerfil: {
    paddingTop: 5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 41,
    top: 383,
    fontSize: FontSize.size_mini,
    fontWeight: "600",
    fontFamily: FontFamily.interSemibold,
    textAlign: "center",
    justifyContent: "center",
    width: 125,
    height: 35,
    zIndex: 8,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
    backgroundColor: Color.goldenrod,
    left: 117,
  },
  rectangleView: {
    top: 35,
    left: 0,
    width: 400,
    height: 81,
    zIndex: 9,
  },
  perfilClienteChild1: {
    top: 38,
    left: 330,
    zIndex: 10,
  },
  barbershoppro: {
    top: 35,
    left: 10,
    width: 261,
    zIndex: 11,
    height: 32,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    alignItems: "flex-end",
    display: "flex",
    color: Color.black,
  },
  barbeiroIcon1: {
    top: 45,
    left: 335,
    zIndex: 12,
  },
  inicio1: {
    width: 52,
  },
  inicio: {
    left: 5,
    zIndex: 13,
  },
  perfil1: {
    width: 53,
  },
  perfil: {
    left: 152,
    zIndex: 14,
  },
  agenda1: {
    width: 78,
  },
  agenda: {
    left: 66,
    zIndex: 15,
  },
  perfilCliente: {
    backgroundColor: Color.darkgray,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
});

export default PerfilCliente;
