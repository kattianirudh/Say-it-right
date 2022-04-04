import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Splashscreen = () => {
  return (
    <View>
        <Text style={styles.appName}>Say it Right</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    appName: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
    }

})

export default Splashscreen