/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import moment from 'moment';
import MapView, { Marker } from 'react-native-maps';

const App: () => React$Node = () => {

  const markers = [
    {
      title: "hoge1",
      coordinate: {
        latitude: 37.892216,
        longitude: 139.056579,
      },
    },
    {
      title: "hoge2",
      coordinate: {
        latitude: 37.882522,
        longitude: 139.059196,
      },
    },
    {
      title: "hoge3",
      coordinate: {
        latitude: 37.889901,
        longitude: 139.046972,
      }
    },
  ];
  return (
      <MapView
        style={{ height: '100%' }}
        initialRegion={{
          latitude: 37.8891012532126,
          longitude: 139.05403617011592,
          latitudeDelta: 0.035584745442925225,
          longitudeDelta: 0.022820403593073024,
        }}>
        {markers.map(marker => (
          <Marker
          title={marker.title} coordinate={marker.coordinate} />
        ))}
      </MapView>
  );

  // return (
  //   <>
  //     <StatusBar barStyle="dark-content" />
  //     <SafeAreaView>
  //       <ScrollView
  //         contentInsetAdjustmentBehavior="automatic"
  //         style={styles.scrollView}>
  //         <Header />
  //         {global.HermesInternal == null ? null : (
  //           <View style={styles.engine}>
  //             <Text style={styles.footer}>Engine: Hermes</Text>
  //           </View>
  //         )}
  //         <View style={styles.body}>
  //             <Text>{moment().format('YYYY-MM-DD HH:mm:ss')}</Text>
  //             <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Step One</Text>
  //             <Text style={styles.sectionDescription}>
  //               Edit <Text style={styles.highlight}>App.js</Text> to change this
  //               screen and then come back to see your edits.
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>See Your Changes</Text>
  //             <Text style={styles.sectionDescription}>
  //               <ReloadInstructions />
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Debug</Text>
  //             <Text style={styles.sectionDescription}>
  //               <DebugInstructions />
  //             </Text>
  //           </View>
  //           <View style={styles.sectionContainer}>
  //             <Text style={styles.sectionTitle}>Learn More</Text>
  //             <Text style={styles.sectionDescription}>
  //               Read the docs to discover what to do next:
  //             </Text>
  //           </View>
  //           <LearnMoreLinks />
  //         </View>
  //       </ScrollView>
  //     </SafeAreaView>
  //   </>
  // );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
