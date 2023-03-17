
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function RNOdontograma() {

    const [OdontoGrama, setOdontoGrama] = useState([
      {
        Sesion1: [
          { Text: "18" },
          { Text: "17" },
          { Text: "16" },
          { Text: "15" },
          { Text: "14" },
          { Text: "13" },
          { Text: "12" },
          { Text: "11" },
          { Text: "21" },
          { Text: "22" },
          { Text: "23" },
          { Text: "24" },
          { Text: "25" },
          { Text: "26" },
          { Text: "27" },
          { Text: "28" }
        ],
        Sesion2: [
          { Text: "18", Image: require("./assets/imgs/dentadura-sup-18.png") },
          { Text: "17", Image: require("./assets/imgs/dentadura-sup-17.png") },
          { Text: "16", Image: require("./assets/imgs/dentadura-sup-16.png") },
          { Text: "15", Image: require("./assets/imgs/dentadura-sup-15.png") },
          { Text: "14", Image: require("./assets/imgs/dentadura-sup-14.png") },
          { Text: "13", Image: require("./assets/imgs/dentadura-sup-13.png") },
          { Text: "12", Image: require("./assets/imgs/dentadura-sup-12.png") },
          { Text: "11", Image: require("./assets/imgs/dentadura-sup-11.png") },
          { Text: "21", Image: require("./assets/imgs/dentadura-sup-21.png") },
          { Text: "22", Image: require("./assets/imgs/dentadura-sup-22.png") },
          { Text: "23", Image: require("./assets/imgs/dentadura-sup-23.png") },
          { Text: "24", Image: require("./assets/imgs/dentadura-sup-24.png") },
          { Text: "25", Image: require("./assets/imgs/dentadura-sup-25.png") },
          { Text: "26", Image: require("./assets/imgs/dentadura-sup-26.png") },
          { Text: "27", Image: require("./assets/imgs/dentadura-sup-27.png") },
          { Text: "28", Image: require("./assets/imgs/dentadura-sup-28.png") }
        ],
        Sesion3: [
          { Text: "18" },
          { Text: "17" },
          { Text: "16" },
          { Text: "15" },
          { Text: "14" },
          { Text: "13" },
          { Text: "12" },
          { Text: "11" },
          { Text: "21" },
          { Text: "22" },
          { Text: "23" },
          { Text: "24" },
          { Text: "25" },
          { Text: "26" },
          { Text: "27" },
          { Text: "28" }
        ],
        Sesion4: [
          { Superior: "18", Inferior: "48" },
          { Superior: "17", Inferior: "47" },
          { Superior: "16", Inferior: "46" },
          { Superior: "15", Inferior: "45" },
          { Superior: "14", Inferior: "44" },
          { Superior: "13", Inferior: "43" },
          { Superior: "12", Inferior: "42" },
          { Superior: "11", Inferior: "41" },
          { Superior: "21", Inferior: "31" },
          { Superior: "22", Inferior: "32" },
          { Superior: "23", Inferior: "33" },
          { Superior: "24", Inferior: "34" },
          { Superior: "25", Inferior: "35" },
          { Superior: "26", Inferior: "36" },
          { Superior: "27", Inferior: "37" },
          { Superior: "28", Inferior: "38" }
        ],
        Sesion5: [
          { Text: "48" },
          { Text: "47" },
          { Text: "46" },
          { Text: "45" },
          { Text: "44" },
          { Text: "43" },
          { Text: "42" },
          { Text: "41" },
          { Text: "31" },
          { Text: "32" },
          { Text: "33" },
          { Text: "34" },
          { Text: "35" },
          { Text: "36" },
          { Text: "37" },
          { Text: "38" }
        ],
        Sesion6: [
          { Text: "48", Image: require('./assets/imgs/dentadura-inf-48.png') },
          { Text: "47", Image: require('./assets/imgs/dentadura-inf-47.png') },
          { Text: "46", Image: require('./assets/imgs/dentadura-inf-46.png') },
          { Text: "45", Image: require('./assets/imgs/dentadura-inf-45.png') },
          { Text: "44", Image: require('./assets/imgs/dentadura-inf-44.png') },
          { Text: "43", Image: require('./assets/imgs/dentadura-inf-43.png') },
          { Text: "42", Image: require('./assets/imgs/dentadura-inf-42.png') },
          { Text: "41", Image: require('./assets/imgs/dentadura-inf-41.png') },
          { Text: "31", Image: require('./assets/imgs/dentadura-inf-31.png') },
          { Text: "32", Image: require('./assets/imgs/dentadura-inf-32.png') },
          { Text: "33", Image: require('./assets/imgs/dentadura-inf-33.png') },
          { Text: "34", Image: require('./assets/imgs/dentadura-inf-34.png') },
          { Text: "35", Image: require('./assets/imgs/dentadura-inf-35.png') },
          { Text: "36", Image: require('./assets/imgs/dentadura-inf-36.png') },
          { Text: "37", Image: require('./assets/imgs/dentadura-inf-37.png') },
          { Text: "38", Image: require('./assets/imgs/dentadura-inf-38.png') }
        ],
        Sesion7: [
          { Text: "48" },
          { Text: "47" },
          { Text: "46" },
          { Text: "45" },
          { Text: "44" },
          { Text: "43" },
          { Text: "42" },
          { Text: "41" },
          { Text: "31" },
          { Text: "32" },
          { Text: "33" },
          { Text: "34" },
          { Text: "35" },
          { Text: "36" },
          { Text: "37" },
          { Text: "38" }
        ]
      }
    ]);
  
    return (
      <View style={styles.container}>
  
        <ScrollView horizontal style={{ width: '100%', maxHeight: '70%' }} showsHorizontalScrollIndicator={false}>
          {OdontoGrama.map((e, index) => (
            <View key={index} style={styles.containerBg}>
  
              <View style={styles.Seson1}>
  
                {e.Sesion1.map((s1, index1) => (
                  <TouchableOpacity key={index1} style={{ width: 43, height: '98%', marginRight: 5, backgroundColor: '#eee', alignItems: "center", justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{s1.Text}</Text>
                  </TouchableOpacity>
                ))}
  
              </View>
  
              <View style={styles.Seson2}>
  
                {e.Sesion2.map((s2, index2) => (
                  <TouchableOpacity key={index2} style={{ width: 43, marginRight: 5, height: '98%', alignItems: "center", justifyContent: 'center' }}>
                    <Image style={{ width: '100%', height: '80%' }} resizeMode="contain" source={s2.Image} />
                  </TouchableOpacity>
                ))}
  
              </View>
  
              <View style={styles.Seson3}>
  
                {e.Sesion3.map((s3, index3) => (
                  <View key={index3} style={{ width: 43, height: 43, marginRight: 5, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: '#f00', borderColor: '#000', borderWidth: 1 }} />
                    <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: '#eee', borderColor: '#000', borderWidth: 1 }} />
                    <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: '#eee', borderColor: '#000', borderWidth: 1 }} />
                    <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: '#fa4', borderColor: '#000', borderWidth: 1 }} />
                  </View>
                ))}
  
              </View>
  
              <View style={styles.Seson4}>
  
                {e.Sesion4.map((s4, index4) => (
                  <View key={index4} style={{ width: 43, height: 43, marginRight: 5, alignItems: 'center' }}>
                    <View>
                      <Text>{s4.Superior}</Text>
                    </View>
                    <View style={{ width: '100%', height: 2, backgroundColor: '#000' }} />
                    <View>
                      <Text>{s4.Inferior}</Text>
                    </View>
                  </View>
                ))}
  
              </View>
  
              <View style={styles.Seson5}>
  
                {e.Sesion5.map((s5, index5) => (
                  <View key={index5} style={{ width: 43, height: 43, marginRight: 5, flexDirection: 'row', flexWrap: 'wrap' }}>
                    <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: '#f00', borderColor: '#000', borderWidth: 1 }} />
                    <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: '#eee', borderColor: '#000', borderWidth: 1 }} />
                    <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: '#eee', borderColor: '#000', borderWidth: 1 }} />
                    <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: '#eee', borderColor: '#000', borderWidth: 1 }} />
                  </View>
                ))}
  
              </View>
  
              <View style={styles.Seson6}>
  
                {e.Sesion6.map((s6, index6) => (
                  <TouchableOpacity key={index6} style={{ width: 43, marginRight: 5, height: '98%', alignItems: "center", justifyContent: 'center' }}>
                    <Image style={{ width: '100%', height: '80%' }} resizeMode="contain" source={s6.Image} />
                  </TouchableOpacity>
                ))}
  
              </View>
  
              <View style={styles.Seson7}>
  
                {e.Sesion7.map((s7, index7) => (
                  <TouchableOpacity key={index7} style={{ width: 43, marginRight: 5, height: '98%', backgroundColor: '#eee', alignItems: "center", justifyContent: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{s7.Text}</Text>
                  </TouchableOpacity>
                ))}
  
              </View>
  
            </View>
          ))}
        </ScrollView>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerBg: {
      width: '100%',
      height: '100%',
      paddingHorizontal: 10,
      paddingVertical: 10,
      backgroundColor: '#fff',
      borderColor: 'green',
      borderWidth: 5,
      borderRadius: 10,
      elevation: 5,
      justifyContent: 'space-between',
      paddingHorizontal: 10
    },
    Seson1: {
      width: '100%',
      height: '8%',
      alignItems: 'center',
      flexDirection: 'row'
    },
    Seson2: {
      width: '100%',
      height: '23%',
      alignItems: 'center',
      flexDirection: 'row'
    },
    Seson3: {
      width: '100%',
      height: '10%',
      alignItems: 'center',
      flexDirection: 'row'
    },
    Seson4: {
      width: '100%',
      height: '18%',
      alignItems: 'center',
      flexDirection: 'row'
    },
    Seson5: {
      width: '100%',
      height: '10%',
      alignItems: 'center',
      flexDirection: 'row'
    },
    Seson6: {
      width: '100%',
      height: '23%',
      alignItems: 'center',
      flexDirection: 'row'
    },
    Seson7: {
      width: '100%',
      height: '8%',
      alignItems: 'center',
      flexDirection: 'row'
    }
  });
  

export default RNOdontograma;
