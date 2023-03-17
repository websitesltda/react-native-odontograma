
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function RNOdontograma({ Clicked }) {

    const OdontoGrama = [
        {
            Sesion1: [
                { Index: "18", Text: "18", Color: '#eee' },
                { Index: "17", Text: "17", Color: '#eee' },
                { Index: "16", Text: "16", Color: '#eee' },
                { Index: "15", Text: "15", Color: '#eee' },
                { Index: "14", Text: "14", Color: '#eee' },
                { Index: "13", Text: "13", Color: '#eee' },
                { Index: "12", Text: "12", Color: '#eee' },
                { Index: "11", Text: "11", Color: '#eee' },
                { Index: "21", Text: "21", Color: '#eee' },
                { Index: "22", Text: "22", Color: '#eee' },
                { Index: "23", Text: "23", Color: '#eee' },
                { Index: "24", Text: "24", Color: '#eee' },
                { Index: "25", Text: "25", Color: '#eee' },
                { Index: "26", Text: "26", Color: '#eee' },
                { Index: "27", Text: "27", Color: '#eee' },
                { Index: "28", Text: "28", Color: '#eee' }
            ],
            Sesion2: [
                { Index: 'IMG_18', Text: "18", Image: require("./assets/imgs/dentadura-sup-18.png") },
                { Index: 'IMG_17', Text: "17", Image: require("./assets/imgs/dentadura-sup-17.png") },
                { Index: 'IMG_16', Text: "16", Image: require("./assets/imgs/dentadura-sup-16.png") },
                { Index: 'IMG_15', Text: "15", Image: require("./assets/imgs/dentadura-sup-15.png") },
                { Index: 'IMG_14', Text: "14", Image: require("./assets/imgs/dentadura-sup-14.png") },
                { Index: 'IMG_13', Text: "13", Image: require("./assets/imgs/dentadura-sup-13.png") },
                { Index: 'IMG_12', Text: "12", Image: require("./assets/imgs/dentadura-sup-12.png") },
                { Index: 'IMG_11', Text: "11", Image: require("./assets/imgs/dentadura-sup-11.png") },
                { Index: 'IMG_21', Text: "21", Image: require("./assets/imgs/dentadura-sup-21.png") },
                { Index: 'IMG_22', Text: "22", Image: require("./assets/imgs/dentadura-sup-22.png") },
                { Index: 'IMG_23', Text: "23", Image: require("./assets/imgs/dentadura-sup-23.png") },
                { Index: 'IMG_24', Text: "24", Image: require("./assets/imgs/dentadura-sup-24.png") },
                { Index: 'IMG_25', Text: "25", Image: require("./assets/imgs/dentadura-sup-25.png") },
                { Index: 'IMG_26', Text: "26", Image: require("./assets/imgs/dentadura-sup-26.png") },
                { Index: 'IMG_27', Text: "27", Image: require("./assets/imgs/dentadura-sup-27.png") },
                { Index: 'IMG_28', Text: "28", Image: require("./assets/imgs/dentadura-sup-28.png") }
            ],
            Sesion3: [
                { Text: "18", Buttons: [{ Index: '18_1', Color: '#eee' }, { Index: '18_2', Color: '#eee' }, { Index: '18_3', Color: '#eee' }, { Index: '18_4', Color: '#eee' }] },
                { Text: "17", Buttons: [{ Index: '17_1', Color: '#eee' }, { Index: '17_2', Color: '#eee' }, { Index: '17_3', Color: '#eee' }, { Index: '17_4', Color: '#eee' }] },
                { Text: "16", Buttons: [{ Index: '16_1', Color: '#eee' }, { Index: '16_2', Color: '#eee' }, { Index: '16_3', Color: '#eee' }, { Index: '16_4', Color: '#eee' }] },
                { Text: "15", Buttons: [{ Index: '15_1', Color: '#eee' }, { Index: '15_2', Color: '#eee' }, { Index: '15_3', Color: '#eee' }, { Index: '15_4', Color: '#eee' }] },
                { Text: "14", Buttons: [{ Index: '14_1', Color: '#eee' }, { Index: '14_2', Color: '#eee' }, { Index: '14_3', Color: '#eee' }, { Index: '14_4', Color: '#eee' }] },
                { Text: "13", Buttons: [{ Index: '13_1', Color: '#eee' }, { Index: '13_2', Color: '#eee' }, { Index: '13_3', Color: '#eee' }, { Index: '13_4', Color: '#eee' }] },
                { Text: "12", Buttons: [{ Index: '12_1', Color: '#eee' }, { Index: '12_2', Color: '#eee' }, { Index: '12_3', Color: '#eee' }, { Index: '12_4', Color: '#eee' }] },
                { Text: "11", Buttons: [{ Index: '11_1', Color: '#eee' }, { Index: '11_2', Color: '#eee' }, { Index: '11_3', Color: '#eee' }, { Index: '11_4', Color: '#eee' }] },
                { Text: "21", Buttons: [{ Index: '21_1', Color: '#eee' }, { Index: '21_2', Color: '#eee' }, { Index: '21_3', Color: '#eee' }, { Index: '21_4', Color: '#eee' }] },
                { Text: "22", Buttons: [{ Index: '22_1', Color: '#eee' }, { Index: '22_2', Color: '#eee' }, { Index: '22_3', Color: '#eee' }, { Index: '22_4', Color: '#eee' }] },
                { Text: "23", Buttons: [{ Index: '23_1', Color: '#eee' }, { Index: '23_2', Color: '#eee' }, { Index: '23_3', Color: '#eee' }, { Index: '23_4', Color: '#eee' }] },
                { Text: "24", Buttons: [{ Index: '24_1', Color: '#eee' }, { Index: '24_2', Color: '#eee' }, { Index: '24_3', Color: '#eee' }, { Index: '24_4', Color: '#eee' }] },
                { Text: "25", Buttons: [{ Index: '25_1', Color: '#eee' }, { Index: '25_2', Color: '#eee' }, { Index: '25_3', Color: '#eee' }, { Index: '25_4', Color: '#eee' }] },
                { Text: "26", Buttons: [{ Index: '26_1', Color: '#eee' }, { Index: '26_2', Color: '#eee' }, { Index: '26_3', Color: '#eee' }, { Index: '26_4', Color: '#eee' }] },
                { Text: "27", Buttons: [{ Index: '27_1', Color: '#eee' }, { Index: '27_2', Color: '#eee' }, { Index: '27_3', Color: '#eee' }, { Index: '27_4', Color: '#eee' }] },
                { Text: "28", Buttons: [{ Index: '28_1', Color: '#eee' }, { Index: '28_2', Color: '#eee' }, { Index: '28_3', Color: '#eee' }, { Index: '28_4', Color: '#eee' }] }
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
                { Text: "48", Buttons: [{ Index: '48_1', Color: '#eee' }, { Index: '48_2', Color: '#eee' }, { Index: '48_3', Color: '#eee' }, { Index: '48_4', Color: '#eee' }] },
                { Text: "47", Buttons: [{ Index: '47_1', Color: '#eee' }, { Index: '47_2', Color: '#eee' }, { Index: '47_3', Color: '#eee' }, { Index: '47_4', Color: '#eee' }] },
                { Text: "46", Buttons: [{ Index: '46_1', Color: '#eee' }, { Index: '46_2', Color: '#eee' }, { Index: '46_3', Color: '#eee' }, { Index: '46_4', Color: '#eee' }] },
                { Text: "45", Buttons: [{ Index: '45_1', Color: '#eee' }, { Index: '45_2', Color: '#eee' }, { Index: '45_3', Color: '#eee' }, { Index: '45_4', Color: '#eee' }] },
                { Text: "44", Buttons: [{ Index: '44_1', Color: '#eee' }, { Index: '44_2', Color: '#eee' }, { Index: '44_3', Color: '#eee' }, { Index: '44_4', Color: '#eee' }] },
                { Text: "43", Buttons: [{ Index: '43_1', Color: '#eee' }, { Index: '43_2', Color: '#eee' }, { Index: '43_3', Color: '#eee' }, { Index: '43_4', Color: '#eee' }] },
                { Text: "42", Buttons: [{ Index: '42_1', Color: '#eee' }, { Index: '42_2', Color: '#eee' }, { Index: '42_3', Color: '#eee' }, { Index: '42_4', Color: '#eee' }] },
                { Text: "41", Buttons: [{ Index: '41_1', Color: '#eee' }, { Index: '41_2', Color: '#eee' }, { Index: '41_3', Color: '#eee' }, { Index: '41_4', Color: '#eee' }] },
                { Text: "31", Buttons: [{ Index: '31_1', Color: '#eee' }, { Index: '31_2', Color: '#eee' }, { Index: '31_3', Color: '#eee' }, { Index: '31_4', Color: '#eee' }] },
                { Text: "32", Buttons: [{ Index: '32_1', Color: '#eee' }, { Index: '32_2', Color: '#eee' }, { Index: '32_3', Color: '#eee' }, { Index: '32_4', Color: '#eee' }] },
                { Text: "33", Buttons: [{ Index: '33_1', Color: '#eee' }, { Index: '33_2', Color: '#eee' }, { Index: '33_3', Color: '#eee' }, { Index: '33_4', Color: '#eee' }] },
                { Text: "34", Buttons: [{ Index: '34_1', Color: '#eee' }, { Index: '34_2', Color: '#eee' }, { Index: '34_3', Color: '#eee' }, { Index: '34_4', Color: '#eee' }] },
                { Text: "35", Buttons: [{ Index: '35_1', Color: '#eee' }, { Index: '35_2', Color: '#eee' }, { Index: '35_3', Color: '#eee' }, { Index: '35_4', Color: '#eee' }] },
                { Text: "36", Buttons: [{ Index: '36_1', Color: '#eee' }, { Index: '36_2', Color: '#eee' }, { Index: '36_3', Color: '#eee' }, { Index: '36_4', Color: '#eee' }] },
                { Text: "37", Buttons: [{ Index: '37_1', Color: '#eee' }, { Index: '37_2', Color: '#eee' }, { Index: '37_3', Color: '#eee' }, { Index: '37_4', Color: '#eee' }] },
                { Text: "38", Buttons: [{ Index: '38_1', Color: '#eee' }, { Index: '38_2', Color: '#eee' }, { Index: '38_3', Color: '#eee' }, { Index: '38_4', Color: '#eee' }] }
            ],
            Sesion6: [
                { Index: "IMG_48", Text: "48", Image: require('./assets/imgs/dentadura-inf-48.png') },
                { Index: "IMG_47", Text: "47", Image: require('./assets/imgs/dentadura-inf-47.png') },
                { Index: "IMG_46", Text: "46", Image: require('./assets/imgs/dentadura-inf-46.png') },
                { Index: "IMG_45", Text: "45", Image: require('./assets/imgs/dentadura-inf-45.png') },
                { Index: "IMG_44", Text: "44", Image: require('./assets/imgs/dentadura-inf-44.png') },
                { Index: "IMG_43", Text: "43", Image: require('./assets/imgs/dentadura-inf-43.png') },
                { Index: "IMG_42", Text: "42", Image: require('./assets/imgs/dentadura-inf-42.png') },
                { Index: "IMG_41", Text: "41", Image: require('./assets/imgs/dentadura-inf-41.png') },
                { Index: "IMG_31", Text: "31", Image: require('./assets/imgs/dentadura-inf-31.png') },
                { Index: "IMG_32", Text: "32", Image: require('./assets/imgs/dentadura-inf-32.png') },
                { Index: "IMG_33", Text: "33", Image: require('./assets/imgs/dentadura-inf-33.png') },
                { Index: "IMG_34", Text: "34", Image: require('./assets/imgs/dentadura-inf-34.png') },
                { Index: "IMG_35", Text: "35", Image: require('./assets/imgs/dentadura-inf-35.png') },
                { Index: "IMG_36", Text: "36", Image: require('./assets/imgs/dentadura-inf-36.png') },
                { Index: "IMG_37", Text: "37", Image: require('./assets/imgs/dentadura-inf-37.png') },
                { Index: "IMG_38", Text: "38", Image: require('./assets/imgs/dentadura-inf-38.png') }
            ],
            Sesion7: [
                { Index: "48", Text: "48", Color: '#eee' },
                { Index: "47", Text: "47", Color: '#eee' },
                { Index: "46", Text: "46", Color: '#eee' },
                { Index: "45", Text: "45", Color: '#eee' },
                { Index: "44", Text: "44", Color: '#eee' },
                { Index: "43", Text: "43", Color: '#eee' },
                { Index: "42", Text: "42", Color: '#eee' },
                { Index: "41", Text: "41", Color: '#eee' },
                { Index: "31", Text: "31", Color: '#eee' },
                { Index: "32", Text: "32", Color: '#eee' },
                { Index: "33", Text: "33", Color: '#eee' },
                { Index: "34", Text: "34", Color: '#eee' },
                { Index: "35", Text: "35", Color: '#eee' },
                { Index: "36", Text: "36", Color: '#eee' },
                { Index: "37", Text: "37", Color: '#eee' },
                { Index: "38", Text: "38", Color: '#eee' }
            ]
        }
    ];

    return (
        <View style={styles.container}>

            <ScrollView horizontal style={{ width: '100%', maxHeight: '70%' }} showsHorizontalScrollIndicator={false}>
                {OdontoGrama.map((e, index) => (
                    <View key={index} style={styles.containerBg}>

                        <View style={styles.Seson1}>

                            {e.Sesion1.map((s1) => (
                                <TouchableOpacity onPress={() => Clicked(s1.Index)} key={s1.Index} style={{ width: 43, height: '98%', marginRight: 5, backgroundColor: s1.Color, alignItems: "center", justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{s1.Text}</Text>
                                </TouchableOpacity>
                            ))}

                        </View>

                        <View style={styles.Seson2}>

                            {e.Sesion2.map((s2) => (
                                <TouchableOpacity onPress={() => Clicked(s2.Index)} key={s2.Index} style={{ width: 43, marginRight: 5, height: '98%', alignItems: "center", justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: '80%' }} resizeMode="contain" source={s2.Image} />
                                </TouchableOpacity>
                            ))}

                        </View>

                        <View style={styles.Seson3}>

                            {e.Sesion3.map((s3, index3) => (
                                <View key={index3} style={{ width: 43, height: 43, marginRight: 5, flexDirection: 'row', flexWrap: 'wrap' }}>
                                    {s3.Buttons.map((b) => (
                                        <TouchableOpacity onPress={() => Clicked(b.Index)} key={b.Index} style={{ width: 20, height: 20, backgroundColor: b.Color, borderColor: '#000', borderWidth: 1 }} />
                                    ))}
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
                                    {s5.Buttons.map((b) => (
                                        <TouchableOpacity onPress={() => Clicked(b.Index)}  key={b.Index} style={{ width: 20, height: 20, backgroundColor: b.Color, borderColor: '#000', borderWidth: 1 }} />
                                    ))}
                                </View>
                            ))}

                        </View>

                        <View style={styles.Seson6}>

                            {e.Sesion6.map((s6) => (
                                <TouchableOpacity onPress={() => Clicked(s6.Index)}  key={s6.Index} style={{ width: 43, marginRight: 5, height: '98%', alignItems: "center", justifyContent: 'center' }}>
                                    <Image style={{ width: '100%', height: '80%' }} resizeMode="contain" source={s6.Image} />
                                </TouchableOpacity>
                            ))}

                        </View>

                        <View style={styles.Seson7}>

                            {e.Sesion7.map((s7) => (
                                <TouchableOpacity onPress={() => Clicked(s7.Text)} key={s7.Index} style={{ width: 43, marginRight: 5, height: '98%', backgroundColor: s7.Color, alignItems: "center", justifyContent: 'center' }}>
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
