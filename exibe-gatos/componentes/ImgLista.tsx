import React, { useState, useEffect } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import theCatAPI from '../utils/theCatAPI';

type Imagem = {
    url: string;
};

export default function ImgLista() {
    const [listaImagens, setListaImagens] = useState<Imagem[]>([]);

    useEffect(() => {
        const obterImagens = async () => {
            try {
                const response = await theCatAPI.get('search?limit=10');
                setListaImagens(response.data);
            } catch (error) {
                console.error('Erro ao buscar a imagem:', error);
            }
        };
        obterImagens();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={listaImagens}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image
                        style={styles.imagem}
                        source={{ uri: item.url }}
                    />
                )}
            />
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
    imagem: {
        width: 200,
        height: 200,
    },
});
