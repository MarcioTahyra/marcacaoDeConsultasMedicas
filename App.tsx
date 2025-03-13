import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { TextInput } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>	(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧</Text>
      <MinhaImagem/>
      <EntradaDeTexto/>
      <StatusBar style="auto" />
    </View>
  );
}

const MinhaImagem = () => {
  return <Image source={{ uri: 'https://i.ytimg.com/vi/rvX8cS-v2XM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCF0zNNCUpNmTYhJxWG7VWjmvmybA' }} style={{ width: 150, height: 150 }} />;
};

const EntradaDeTexto = () => {
  return <TextInput placeholder="Digite algo..." style={{ borderWidth: 1, padding: 10 }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14151c',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txt: {
    fontSize: 30,
    color: '#fff',
  },

});
