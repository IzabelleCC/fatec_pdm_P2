import { StyleSheet, View } from 'react-native';
import ImgUnica from './components/ImgUnica';

export default function App() {
  return (
    <View style={styles.container}>
      <ImgUnica />
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
