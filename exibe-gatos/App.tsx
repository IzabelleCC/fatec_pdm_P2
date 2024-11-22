import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Text } from 'react-native';
import ImgLista from './componentes/ImgLista';
import theCatAPI from './utils/theCatAPI';


interface Imagem {
  url: string;
};

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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
