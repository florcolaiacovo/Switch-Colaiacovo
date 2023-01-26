import { useState } from 'react';
import { 
  StyleSheet, 
  View,
 } from 'react-native';

 import { useFonts } from 'expo-font';

import IntroMotricidad from './src/screens/IntroMotricidad';
import PrimerMes from './src/screens/PrimerMes';
import TodosLosCursos from './src/screens/TodosLosCursos';

export default function App({}) {

//fuentes
const [loaded] = useFonts ({
  OpenSansMedium: require('./src/assets/fonts/OpenSans-Medium.ttf')
})

// Estados para los diferentes switchs
const [curso, setCurso] = useState(true);
const [introMotricidad, setIntroMotricidad] = useState(false);
const [primerMes, setPrimerMes] = useState(false);

const mostrarIntroMotricidad = () => {
    setCurso(false)
    setIntroMotricidad(true)
    setPrimerMes(false)
}

//Constante que define los Switchs
let content = <TodosLosCursos empezarCursoDeMotricidad={mostrarIntroMotricidad} />

if (!loaded) {
  return null
}

if (curso === false && introMotricidad === true && primerMes === false) { 
  content = <IntroMotricidad />
}

if (curso === false && introMotricidad === false && primerMes === true) {
  content = <PrimerMes />
}

  return (
    <View style={styles.container}>
      {content}
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
