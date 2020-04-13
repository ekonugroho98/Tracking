
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default class App extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'red', flex:1}}>
       <MapView
          style={{flex:1}}
          initialRegion={{
            latitude: 6.2263344,
            longitude: -106.8542299,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
       
        />

      </View>
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
