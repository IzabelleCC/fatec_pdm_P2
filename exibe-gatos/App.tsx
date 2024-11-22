import { StyleSheet, View } from 'react-native';
import ImgLista from './componentes/ImgLista';

export default function App() {
  return (
    <View style={styles.container}>
      <ImgLista />
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
});
