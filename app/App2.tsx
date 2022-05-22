import React, {ReactElement} from 'react'
import {StyleSheet, Text, View } from 'react-native'

function App2(): ReactElement {
    return (
        <View style={styles.container}>
            <Text>Welcome to the home page</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 50,
    }
})
export default App2
