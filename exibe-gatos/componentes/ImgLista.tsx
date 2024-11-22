import React from 'react';
import { FlatList, Image, StyleSheet, View, Dimensions } from 'react-native';

interface Imagem {
    url: string;
}

type Props = {
    listaImagens: Imagem[];
};

export default function ImgLista({ listaImagens }: Props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={listaImagens}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                renderItem={({ item }) => (
                    <Image style={styles.imagem} source={{ uri: item.url }} />
                )}
                contentContainerStyle={styles.flatListContent}
                showsVerticalScrollIndicator={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        marginTop: 10,
    },
    flatListContent: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    imagem: {
        width: Dimensions.get('window').width * 0.35,
        height: Dimensions.get('window').width * 0.35,
        margin: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
    },
});
