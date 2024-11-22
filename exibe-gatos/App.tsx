import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Text, StatusBar } from 'react-native';
import ImgLista from './componentes/ImgLista';
import theCatAPI from './utils/theCatAPI';

interface Imagem {
  url: string;
}

export default function App() {
  const [listaImagens, setListaImagens] = useState<Imagem[]>([]);

  const gerarNovasImagens = async () => {
    try {
      const response = await theCatAPI.get('search?limit=10');
      setListaImagens(response.data);
    } catch (error) {
      console.error('Erro ao buscar novas imagens:', error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.titulo}>
        {String.fromCodePoint(0x1F431)} Exibe Gatos {String.fromCodePoint(0x1F431)}
      </Text>
      {listaImagens.length === 0 && (
        <Text style={styles.texto}>Clique no Botão para exibir fotos</Text>
      )}
      <ImgLista listaImagens={listaImagens} />
      <Pressable onPress={gerarNovasImagens} style={styles.botao}>
        <Text style={styles.textoBotao}>Gerar Imagens</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282c34',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 20,
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 250,
  },
  botao: {
    backgroundColor: '#ff914d',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
