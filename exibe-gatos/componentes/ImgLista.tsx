import { FlatList, Image, StyleSheet, View } from 'react-native';

interface Imagem {
    url: string;
};

type Props = {
    listaImagens: Imagem[];
};

export default function ImgLista({ listaImagens }: Props) {
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagem: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
});
