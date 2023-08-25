import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {useFonts, Inter_200ExtraLight, Inter_300Light, Inter_400Regular} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({Inter_200ExtraLight, Inter_300Light, Inter_400Regular})

  if(!fontsLoaded){
    return (
      <Loading/>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>BOM DIA</Text>
      <StatusBar barStyle={'light-content'} backgroundColor={'transparent'} translucent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#181C29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontFamily: 'Inter_300Light'
  },
});
