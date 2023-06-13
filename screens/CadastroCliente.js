import * as React from "react";
import { useEffect, useState } from 'react';

import {
  ScrollView,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  ImageBackground,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import firebase from 'firebase/app';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from 'firebase/auth';



const CadastroCliente1 = () => {
  const navigation = useNavigation();

  const [nomeDaBarbearia, setNomeDaBarbearia] = useState('');
  const [endereco, setEndereco] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaConfirm, setSenhaConfirm] = useState('');

  async function handleSignUp() {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, senha);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      alert('Ocorreu um erro durante o cadastro: ' + error.message);
    }
  }


  return (
    <ScrollView
    style={[styles.cadastroCliente, styles.iconLayout1]}
      contentContainerStyle={styles.cadastroClienteScrollViewContent}
      >
      <Text style={styles.cadastro}>Cadastro</Text>
      {/* <Text style={styles.text}>{` `}</Text> */}
      <Text style={[styles.nome, styles.senhaTypo]}>Nome</Text>
      <Text style={[styles.email, styles.senhaTypo]}>Email</Text>
      <Text style={[styles.senha, styles.senhaTypo]}>Senha</Text>
      <Text style={[styles.confirmarSenha, styles.senhaTypo]}>
        Confirmar senha
      </Text>
      <Pressable
        style={styles.iconChevronLeft}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/icon-back.png")}
        />
      </Pressable>
      <TextInput
        style={[styles.confirmarSenha1, styles.senhaLayout]}
        placeholder="Confirmar senha"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#979494"
      />
      <TextInput
        style={[styles.email1, styles.senhaLayout]}
        placeholder="Email"
        keyboardType="default"
        placeholderTextColor="#979494"
      />
      <TextInput
        style={[styles.senha1, styles.senhaLayout]}
        placeholder="Senha"
        keyboardType="default"
        secureTextEntry
        placeholderTextColor="#979494"
      />
      <TextInput
        style={[styles.nomeCompleto, styles.senhaLayout]}
        placeholder="Nome completo"
        keyboardType="default"
        placeholderTextColor="#979494"
      />
      <ImageBackground
        style={styles.barbeiroIcon}
        resizeMode="cover"
        source={require("../assets/barbeiro.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("AgendaCliente")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-44.png")}
        />
      </Pressable>
      <Pressable
        style={styles.cadastrar}
        onPress={() => navigation.navigate("InicioCliente")}
      >
        <Text style={styles.cadastrar1}>cadastrar</Text>
      </Pressable>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cadastroClienteScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 360,
    paddingVertical: 800,
  },
  iconLayout1: {
    maxWidth: "100%",
    overflow: "hidden",
  },
  senhaTypo: {
    height: 30,
    color: Color.darkgray,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
    left: 17,
  },
  senhaLayout: {
    backgroundColor: "#D9D9D9",
    maxHeight: 48,
    maxWidth: 244,
    minHeight: 48,
    minWidth: 244,
    left: 68,
    paddingLeft: 10,
    position: "absolute",
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
  },
  cadastro: {
    alignItems: "center",
    zIndex: 2,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 37,
    bottom: 500,
    width: 381,
    right: 360,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    // backgroundColor: Color.black,
  },
  text: {
    textAlign: "left",
    zIndex: 2,
    alignItems: "flex-end",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 37,
    width: 181,
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
  },
  nome: {
    zIndex: 2,
    width: 90,
    height: 30,
    color: Color.darkgray,
  },
  email: {
    zIndex: 3,
    width: 90,
    height: 30,
    color: Color.darkgray,
  },
  senha: {
    zIndex: 4,
    width: 90,
    height: 30,
    color: Color.darkgray,
  },
  confirmarSenha: {
    width: 190,
    zIndex: 5,
    height: 30,
    color: Color.darkgray,
  },
  icon: {
    // maxHeight: "100%",
    // maxWidth: "100%",
    overflow: "hidden",
    // top: 50,
  },
 
  iconChevronLeft: {
    top: 40,
    left: 15,
    flexDirection: "row",
    zIndex: 19,
    position: "absolute",
  },
  vectorIcon: {
    width: 21,
    height: 30,
  },
  confirmarSenha1: {
    top: 535,
    zIndex: 7,
  },
  email1: {
    top: 419,
    zIndex: 8,
  },
  senha1: {
    top: 477,
    zIndex: 9,
  },
  nomeCompleto: {
    top: 361,
    zIndex: 10,
  },
  barbeiroIcon: {
    top: 95,
    left: 70,
    width: 236,
    height: 180,
    zIndex: 1,
    position: "absolute",
  },
  icon1: {
    borderRadius: Border.br_22xl,
  },
  wrapper: {
    left: 116,
    top: 629,
    width: 128,
    height: 48,
    zIndex: 12,
    position: "absolute",
  },
  cadastrar1: {
    width: 109,
    height: 27,
    minWidth: 109,
    minHeight: 27,
    maxWidth: 109,
    maxHeight: 27,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    alignItems: "flex-end",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    color: Color.black,
  },
  cadastrar: {
    left: 145,
    top: 639,
    zIndex: 13,
    position: "absolute",
  },
  cadastroCliente: {
    backgroundColor: Color.darkgray,
    flex: 1,
    minWidth: 360,
    minHeight: 800,
    maxHeight: 800,
    width: "100%",
    overflow: "hidden",
  },
});
export default CadastroCliente1;