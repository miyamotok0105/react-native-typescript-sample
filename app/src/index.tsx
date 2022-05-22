import React, {ReactElement} from 'react';
import {AppRegistry, Platform} from 'react-native';
// import { Text, View } from 'react-native';
import {Navigation} from './navigation';
import {StyleSheet, Text, View } from 'react-native'

function App(): ReactElement {
    // return (
    //     <View>
    //       <Text>xxxxxxxxxxxxxx</Text>
    //     </View>
    // )
    return <Navigation />;
}
export default App

// export function App(): ReactElement {
//     return (
//         <View>
//           <Text>aa</Text>
//         </View>
//     );
//     // return <Navigation />;
// }

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
