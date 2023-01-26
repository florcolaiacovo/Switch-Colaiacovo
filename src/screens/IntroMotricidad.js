import { 
  StyleSheet, 
  Text, 
  View } from 'react-native'
import React from 'react'

import colors from '../constants/colors'

const IntroMotricidad = () => {
  return (
    <View>
      <Text style={styles.titulo}>IntroMotricidad</Text>
    </View>
  )
}

export default IntroMotricidad

const styles = StyleSheet.create({
    titulo: {
        backgroundColor: colors.primario1,
    }
})