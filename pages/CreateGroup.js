import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CreateGroup = (props) => {
  return (
    <View>
      {/* Createa view with a left arrow for back that redirects to Home page */}
        <View style={styles.backArrow}>
            <Text style={styles.backArrow}> Home </Text>
        </View>
        {/* Create a title that says 'Create Group' */}
        <View style={styles.title}>
            <Text style={styles.title}> Create Group </Text>
        </View>
    </View>
  )
}

export default CreateGroup

const styles = StyleSheet.create({})