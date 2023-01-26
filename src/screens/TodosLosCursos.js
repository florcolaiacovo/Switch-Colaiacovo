import { 
  StyleSheet, 
  Text, 
  Button} 
  from 'react-native'
import React from 'react'

import CardDeLosCursos from '../components/CardDeLosCursos'
import colors from '../constants/colors'

const TodosLosCursos = ({empezarCursoDeMotricidad}) => {

  return (
    <CardDeLosCursos>
       <Text style={styles.tituloMotricidad}>Curso de Motricidad para bebés de 0 a 2 años</Text>
       <Button 
        title="Empezar ahora" 
        onPress={()=> empezarCursoDeMotricidad()}/> 
    </CardDeLosCursos>
  )
}

export default TodosLosCursos

const styles = StyleSheet.create({
  tituloMotricidad: {
    backgroundColor: colors.primario1,
    fontFamily: "OpenSansMedium",
  }
})