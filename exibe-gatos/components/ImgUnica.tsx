import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import theCatAPI from '../utils/theCatAPI';

export default function ImgUnica() {
    const [imagemUrl, setImagemUrl] = useState<string | null>(null);

    useEffect(() => {
        const obterImagem = async () => {
            try {
                const response = await theCatAPI.get('search?limit=10');
                setImagemUrl(response.data[0]?.url);
            } catch (error) {
                console.error('Erro ao buscar a imagem:', error);
            }
        };

        obterImagem();
    }, []);

    return (
        <View style={styles.container}>
            {imagemUrl ? (
                <Image
                    style={styles.imagem}
                    source={{ uri: imagemUrl }}
                />
            ) : (
                <></>
            )}
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
