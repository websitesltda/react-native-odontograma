
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function RNOdontograma({ Clicked, BtnColors }) {


    const Colors = [
        { Index: "18", Color: '#eee' },
        { Index: "17", Color: '#eee' },
        { Index: "16", Color: '#eee' },
        { Index: "15", Color: '#eee' },
        { Index: "14", Color: '#eee' },
        { Index: "13", Color: '#eee' },
        { Index: "12", Color: '#eee' },
        { Index: "11", Color: '#eee' },
        { Index: "21", Color: '#eee' },
        { Index: "22", Color: '#eee' },
        { Index: "23", Color: '#eee' },
        { Index: "24", Color: '#eee' },
        { Index: "25", Color: '#eee' },
        { Index: "26", Color: '#eee' },
        { Index: "27", Color: '#eee' },
        { Index: "28", Color: '#eee' },
        { Index: "48", Color: '#eee' },
        { Index: "47", Color: '#eee' },
        { Index: "46", Color: '#eee' },
        { Index: "45", Color: '#eee' },
        { Index: "44", Color: '#eee' },
        { Index: "43", Color: '#eee' },
        { Index: "42", Color: '#eee' },
        { Index: "41", Color: '#eee' },
        { Index: "31", Color: '#eee' },
        { Index: "32", Color: '#eee' },
        { Index: "33", Color: '#eee' },
        { Index: "34", Color: '#eee' },
        { Index: "35", Color: '#eee' },
        { Index: "36", Color: '#eee' },
        { Index: "37", Color: '#eee' },
        { Index: "38", Color: '#eee' }
    ];

    function FiltrarColor(params) {
        const filter = BtnColors ? BtnColors.filter(e => (e.Index === params)) : [];
        const res = filter.map(e => (e.Color)).toString();

        if (filter.length > 0) {
            return res;
        } else {
            return '#eee';
        };

    };

    const ButtonColors = [
        { Index: "18", Color: [{ Index: '18_4', Color: FiltrarColor('18_4') }, { Index: '18_1', Color: FiltrarColor('18_1') }, { Index: '18_2', Color: FiltrarColor('18_2') }, { Index: '18_3', Color: FiltrarColor('18_3') }, { Index: '18_5', Color: FiltrarColor('18_5') }] },
        { Index: "17", Color: [{ Index: '17_4', Color: FiltrarColor('17_4') }, { Index: '17_1', Color: FiltrarColor('17_1') }, { Index: '17_2', Color: FiltrarColor('17_2') }, { Index: '17_3', Color: FiltrarColor('17_3') }, { Index: '17_5', Color: FiltrarColor('17_5') }] },
        { Index: "16", Color: [{ Index: '16_4', Color: FiltrarColor('16_4') }, { Index: '16_1', Color: FiltrarColor('16_1') }, { Index: '16_2', Color: FiltrarColor('16_2') }, { Index: '16_3', Color: FiltrarColor('16_3') }, { Index: '16_5', Color: FiltrarColor('16_5') }] },
        { Index: "15", Color: [{ Index: '15_4', Color: FiltrarColor('15_4') }, { Index: '15_1', Color: FiltrarColor('15_1') }, { Index: '15_2', Color: FiltrarColor('15_2') }, { Index: '15_3', Color: FiltrarColor('15_3') }, { Index: '15_5', Color: FiltrarColor('15_5') }] },
        { Index: "14", Color: [{ Index: '14_4', Color: FiltrarColor('14_4') }, { Index: '14_1', Color: FiltrarColor('14_1') }, { Index: '14_2', Color: FiltrarColor('14_2') }, { Index: '14_3', Color: FiltrarColor('14_3') }, { Index: '14_5', Color: FiltrarColor('14_5') }] },
        { Index: "13", Color: [{ Index: '13_4', Color: FiltrarColor('13_4') }, { Index: '13_1', Color: FiltrarColor('13_1') }, { Index: '13_2', Color: FiltrarColor('13_2') }, { Index: '13_3', Color: FiltrarColor('13_3') }, { Index: '13_5', Color: FiltrarColor('13_5') }] },
        { Index: "12", Color: [{ Index: '12_4', Color: FiltrarColor('12_4') }, { Index: '12_1', Color: FiltrarColor('12_1') }, { Index: '12_2', Color: FiltrarColor('12_2') }, { Index: '12_3', Color: FiltrarColor('12_3') }, { Index: '12_5', Color: FiltrarColor('12_5') }] },
        { Index: "11", Color: [{ Index: '11_4', Color: FiltrarColor('11_4') }, { Index: '11_1', Color: FiltrarColor('11_1') }, { Index: '11_2', Color: FiltrarColor('11_2') }, { Index: '11_3', Color: FiltrarColor('11_3') }, { Index: '11_5', Color: FiltrarColor('11_5') }] },
        { Index: "21", Color: [{ Index: '21_4', Color: FiltrarColor('21_4') }, { Index: '21_1', Color: FiltrarColor('21_1') }, { Index: '21_2', Color: FiltrarColor('21_2') }, { Index: '21_3', Color: FiltrarColor('21_3') }, { Index: '21_5', Color: FiltrarColor('21_5') }] },
        { Index: "22", Color: [{ Index: '22_4', Color: FiltrarColor('22_4') }, { Index: '22_1', Color: FiltrarColor('22_1') }, { Index: '22_2', Color: FiltrarColor('22_2') }, { Index: '22_3', Color: FiltrarColor('22_3') }, { Index: '22_5', Color: FiltrarColor('22_5') }] },
        { Index: "23", Color: [{ Index: '23_4', Color: FiltrarColor('23_4') }, { Index: '23_1', Color: FiltrarColor('23_1') }, { Index: '23_2', Color: FiltrarColor('23_2') }, { Index: '23_3', Color: FiltrarColor('23_3') }, { Index: '23_5', Color: FiltrarColor('23_5') }] },
        { Index: "24", Color: [{ Index: '24_4', Color: FiltrarColor('24_4') }, { Index: '24_1', Color: FiltrarColor('24_1') }, { Index: '24_2', Color: FiltrarColor('24_2') }, { Index: '24_3', Color: FiltrarColor('24_3') }, { Index: '24_5', Color: FiltrarColor('24_5') }] },
        { Index: "25", Color: [{ Index: '25_4', Color: FiltrarColor('25_4') }, { Index: '25_1', Color: FiltrarColor('25_1') }, { Index: '25_2', Color: FiltrarColor('25_2') }, { Index: '25_3', Color: FiltrarColor('25_3') }, { Index: '25_5', Color: FiltrarColor('25_5') }] },
        { Index: "26", Color: [{ Index: '26_4', Color: FiltrarColor('26_4') }, { Index: '26_1', Color: FiltrarColor('26_1') }, { Index: '26_2', Color: FiltrarColor('26_2') }, { Index: '26_3', Color: FiltrarColor('26_3') }, { Index: '26_5', Color: FiltrarColor('26_5') }] },
        { Index: "27", Color: [{ Index: '27_4', Color: FiltrarColor('27_4') }, { Index: '27_1', Color: FiltrarColor('27_1') }, { Index: '27_2', Color: FiltrarColor('27_2') }, { Index: '27_3', Color: FiltrarColor('27_3') }, { Index: '27_5', Color: FiltrarColor('27_5') }] },
        { Index: "28", Color: [{ Index: '28_4', Color: FiltrarColor('28_4') }, { Index: '28_1', Color: FiltrarColor('28_1') }, { Index: '28_2', Color: FiltrarColor('28_2') }, { Index: '28_3', Color: FiltrarColor('28_3') }, { Index: '28_5', Color: FiltrarColor('28_5') }] },
        { Index: "48", Color: [{ Index: '48_4', Color: FiltrarColor('48_4') }, { Index: '48_1', Color: FiltrarColor('48_1') }, { Index: '48_2', Color: FiltrarColor('48_2') }, { Index: '48_3', Color: FiltrarColor('48_3') }, { Index: '48_5', Color: FiltrarColor('48_5') }] },
        { Index: "47", Color: [{ Index: '47_4', Color: FiltrarColor('47_4') }, { Index: '47_1', Color: FiltrarColor('47_1') }, { Index: '47_2', Color: FiltrarColor('47_2') }, { Index: '47_3', Color: FiltrarColor('47_3') }, { Index: '47_5', Color: FiltrarColor('47_5') }] },
        { Index: "46", Color: [{ Index: '46_4', Color: FiltrarColor('46_4') }, { Index: '46_1', Color: FiltrarColor('46_1') }, { Index: '46_2', Color: FiltrarColor('46_2') }, { Index: '46_3', Color: FiltrarColor('46_3') }, { Index: '46_5', Color: FiltrarColor('46_5') }] },
        { Index: "45", Color: [{ Index: '45_4', Color: FiltrarColor('45_4') }, { Index: '45_1', Color: FiltrarColor('45_1') }, { Index: '45_2', Color: FiltrarColor('45_2') }, { Index: '45_3', Color: FiltrarColor('45_3') }, { Index: '45_5', Color: FiltrarColor('45_5') }] },
        { Index: "44", Color: [{ Index: '44_4', Color: FiltrarColor('44_4') }, { Index: '44_1', Color: FiltrarColor('44_1') }, { Index: '44_2', Color: FiltrarColor('44_2') }, { Index: '44_3', Color: FiltrarColor('44_3') }, { Index: '44_5', Color: FiltrarColor('44_5') }] },
        { Index: "43", Color: [{ Index: '43_4', Color: FiltrarColor('43_4') }, { Index: '43_1', Color: FiltrarColor('43_1') }, { Index: '43_2', Color: FiltrarColor('43_2') }, { Index: '43_3', Color: FiltrarColor('43_3') }, { Index: '43_5', Color: FiltrarColor('43_5') }] },
        { Index: "42", Color: [{ Index: '42_4', Color: FiltrarColor('42_4') }, { Index: '42_1', Color: FiltrarColor('42_1') }, { Index: '42_2', Color: FiltrarColor('42_2') }, { Index: '42_3', Color: FiltrarColor('42_3') }, { Index: '42_5', Color: FiltrarColor('42_5') }] },
        { Index: "41", Color: [{ Index: '41_4', Color: FiltrarColor('41_4') }, { Index: '41_1', Color: FiltrarColor('41_1') }, { Index: '41_2', Color: FiltrarColor('41_2') }, { Index: '41_3', Color: FiltrarColor('41_3') }, { Index: '41_5', Color: FiltrarColor('41_5') }] },
        { Index: "31", Color: [{ Index: '31_4', Color: FiltrarColor('31_4') }, { Index: '31_1', Color: FiltrarColor('31_1') }, { Index: '31_2', Color: FiltrarColor('31_2') }, { Index: '31_3', Color: FiltrarColor('31_3') }, { Index: '31_5', Color: FiltrarColor('31_5') }] },
        { Index: "32", Color: [{ Index: '32_4', Color: FiltrarColor('32_4') }, { Index: '32_1', Color: FiltrarColor('32_1') }, { Index: '32_2', Color: FiltrarColor('32_2') }, { Index: '32_3', Color: FiltrarColor('32_3') }, { Index: '32_5', Color: FiltrarColor('32_5') }] },
        { Index: "33", Color: [{ Index: '33_4', Color: FiltrarColor('33_4') }, { Index: '33_1', Color: FiltrarColor('33_1') }, { Index: '33_2', Color: FiltrarColor('33_2') }, { Index: '33_3', Color: FiltrarColor('33_3') }, { Index: '33_5', Color: FiltrarColor('33_5') }] },
        { Index: "34", Color: [{ Index: '34_4', Color: FiltrarColor('34_4') }, { Index: '34_1', Color: FiltrarColor('34_1') }, { Index: '34_2', Color: FiltrarColor('34_2') }, { Index: '34_3', Color: FiltrarColor('34_3') }, { Index: '34_5', Color: FiltrarColor('34_5') }] },
        { Index: "35", Color: [{ Index: '35_4', Color: FiltrarColor('35_4') }, { Index: '35_1', Color: FiltrarColor('35_1') }, { Index: '35_2', Color: FiltrarColor('35_2') }, { Index: '35_3', Color: FiltrarColor('35_3') }, { Index: '35_5', Color: FiltrarColor('35_5') }] },
        { Index: "36", Color: [{ Index: '36_4', Color: FiltrarColor('36_4') }, { Index: '36_1', Color: FiltrarColor('36_1') }, { Index: '36_2', Color: FiltrarColor('36_2') }, { Index: '36_3', Color: FiltrarColor('36_3') }, { Index: '36_5', Color: FiltrarColor('36_5') }] },
        { Index: "37", Color: [{ Index: '37_4', Color: FiltrarColor('37_4') }, { Index: '37_1', Color: FiltrarColor('37_1') }, { Index: '37_2', Color: FiltrarColor('37_2') }, { Index: '37_3', Color: FiltrarColor('37_3') }, { Index: '37_5', Color: FiltrarColor('37_5') }] },
        { Index: "38", Color: [{ Index: '38_4', Color: FiltrarColor('38_4') }, { Index: '38_1', Color: FiltrarColor('38_1') }, { Index: '38_2', Color: FiltrarColor('38_2') }, { Index: '38_3', Color: FiltrarColor('38_3') }, { Index: '38_5', Color: FiltrarColor('38_5') }] }
    ];


    const OdontoGrama = [
        {
            Sesion1: [
                { Index: "18", Text: "18", Color: Colors[0]['Color'] },
                { Index: "17", Text: "17", Color: Colors[1]['Color'] },
                { Index: "16", Text: "16", Color: Colors[2]['Color'] },
                { Index: "15", Text: "15", Color: Colors[3]['Color'] },
                { Index: "14", Text: "14", Color: Colors[4]['Color'] },
                { Index: "13", Text: "13", Color: Colors[5]['Color'] },
                { Index: "12", Text: "12", Color: Colors[6]['Color'] },
                { Index: "11", Text: "11", Color: Colors[7]['Color'] },
                { Index: "21", Text: "21", Color: Colors[8]['Color'] },
                { Index: "22", Text: "22", Color: Colors[9]['Color'] },
                { Index: "23", Text: "23", Color: Colors[10]['Color'] },
                { Index: "24", Text: "24", Color: Colors[11]['Color'] },
                { Index: "25", Text: "25", Color: Colors[12]['Color'] },
                { Index: "26", Text: "26", Color: Colors[13]['Color'] },
                { Index: "27", Text: "27", Color: Colors[14]['Color'] },
                { Index: "28", Text: "28", Color: Colors[15]['Color'] }
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
                { Text: "18", Buttons: [{ VerticalTop: [{ Index: '18_4', Color: ButtonColors[0]['Color'][0]['Color'] }], Horizontal: [{ Index: '18_1', Color: ButtonColors[0]['Color'][1]['Color'] }, { Index: '18_2', Color: ButtonColors[0]['Color'][2]['Color'] }, { Index: '18_3', Color: ButtonColors[0]['Color'][3]['Color'] }], VerticalButton: [{ Index: '18_5', Color: ButtonColors[0]['Color'][4]['Color'] }] }] },
                { Text: "17", Buttons: [{ VerticalTop: [{ Index: '17_4', Color: ButtonColors[1]['Color'][0]['Color'] }], Horizontal: [{ Index: '17_1', Color: ButtonColors[1]['Color'][1]['Color'] }, { Index: '17_2', Color: ButtonColors[1]['Color'][2]['Color'] }, { Index: '17_3', Color: ButtonColors[1]['Color'][3]['Color'] }], VerticalButton: [{ Index: '17_5', Color: ButtonColors[1]['Color'][4]['Color'] }] }] },
                { Text: "16", Buttons: [{ VerticalTop: [{ Index: '16_4', Color: ButtonColors[2]['Color'][0]['Color'] }], Horizontal: [{ Index: '16_1', Color: ButtonColors[2]['Color'][1]['Color'] }, { Index: '16_2', Color: ButtonColors[2]['Color'][2]['Color'] }, { Index: '16_3', Color: ButtonColors[2]['Color'][3]['Color'] }], VerticalButton: [{ Index: '16_5', Color: ButtonColors[2]['Color'][4]['Color'] }] }] },
                { Text: "15", Buttons: [{ VerticalTop: [{ Index: '15_4', Color: ButtonColors[3]['Color'][0]['Color'] }], Horizontal: [{ Index: '15_1', Color: ButtonColors[3]['Color'][1]['Color'] }, { Index: '15_2', Color: ButtonColors[3]['Color'][2]['Color'] }, { Index: '15_3', Color: ButtonColors[3]['Color'][3]['Color'] }], VerticalButton: [{ Index: '15_5', Color: ButtonColors[3]['Color'][4]['Color'] }] }] },
                { Text: "14", Buttons: [{ VerticalTop: [{ Index: '14_4', Color: ButtonColors[4]['Color'][0]['Color'] }], Horizontal: [{ Index: '14_1', Color: ButtonColors[4]['Color'][1]['Color'] }, { Index: '14_2', Color: ButtonColors[4]['Color'][2]['Color'] }, { Index: '14_3', Color: ButtonColors[4]['Color'][3]['Color'] }], VerticalButton: [{ Index: '14_5', Color: ButtonColors[4]['Color'][4]['Color'] }] }] },
                { Text: "13", Buttons: [{ VerticalTop: [{ Index: '13_4', Color: ButtonColors[5]['Color'][0]['Color'] }], Horizontal: [{ Index: '13_1', Color: ButtonColors[5]['Color'][1]['Color'] }, { Index: '13_2', Color: ButtonColors[5]['Color'][2]['Color'] }, { Index: '13_3', Color: ButtonColors[5]['Color'][3]['Color'] }], VerticalButton: [{ Index: '13_5', Color: ButtonColors[5]['Color'][4]['Color'] }] }] },
                { Text: "12", Buttons: [{ VerticalTop: [{ Index: '12_4', Color: ButtonColors[6]['Color'][0]['Color'] }], Horizontal: [{ Index: '12_1', Color: ButtonColors[6]['Color'][1]['Color'] }, { Index: '12_2', Color: ButtonColors[6]['Color'][2]['Color'] }, { Index: '12_3', Color: ButtonColors[6]['Color'][3]['Color'] }], VerticalButton: [{ Index: '12_5', Color: ButtonColors[6]['Color'][4]['Color'] }] }] },
                { Text: "11", Buttons: [{ VerticalTop: [{ Index: '11_4', Color: ButtonColors[7]['Color'][0]['Color'] }], Horizontal: [{ Index: '11_1', Color: ButtonColors[7]['Color'][1]['Color'] }, { Index: '11_2', Color: ButtonColors[7]['Color'][2]['Color'] }, { Index: '11_3', Color: ButtonColors[7]['Color'][3]['Color'] }], VerticalButton: [{ Index: '11_5', Color: ButtonColors[7]['Color'][4]['Color'] }] }] },
                { Text: "21", Buttons: [{ VerticalTop: [{ Index: '21_4', Color: ButtonColors[8]['Color'][0]['Color'] }], Horizontal: [{ Index: '21_1', Color: ButtonColors[8]['Color'][1]['Color'] }, { Index: '21_2', Color: ButtonColors[8]['Color'][2]['Color'] }, { Index: '21_3', Color: ButtonColors[8]['Color'][3]['Color'] }], VerticalButton: [{ Index: '21_5', Color: ButtonColors[8]['Color'][4]['Color'] }] }] },
                { Text: "22", Buttons: [{ VerticalTop: [{ Index: '22_4', Color: ButtonColors[9]['Color'][0]['Color'] }], Horizontal: [{ Index: '22_1', Color: ButtonColors[9]['Color'][1]['Color'] }, { Index: '22_2', Color: ButtonColors[9]['Color'][2]['Color'] }, { Index: '22_3', Color: ButtonColors[9]['Color'][3]['Color'] }], VerticalButton: [{ Index: '22_5', Color: ButtonColors[9]['Color'][4]['Color'] }] }] },
                { Text: "23", Buttons: [{ VerticalTop: [{ Index: '23_4', Color: ButtonColors[10]['Color'][0]['Color'] }], Horizontal: [{ Index: '23_1', Color: ButtonColors[10]['Color'][1]['Color'] }, { Index: '23_2', Color: ButtonColors[10]['Color'][2]['Color'] }, { Index: '23_3', Color: ButtonColors[10]['Color'][3]['Color'] }], VerticalButton: [{ Index: '23_5', Color: ButtonColors[10]['Color'][4]['Color'] }] }] },
                { Text: "24", Buttons: [{ VerticalTop: [{ Index: '24_4', Color: ButtonColors[11]['Color'][0]['Color'] }], Horizontal: [{ Index: '24_1', Color: ButtonColors[11]['Color'][1]['Color'] }, { Index: '24_2', Color: ButtonColors[11]['Color'][2]['Color'] }, { Index: '24_3', Color: ButtonColors[11]['Color'][3]['Color'] }], VerticalButton: [{ Index: '24_5', Color: ButtonColors[11]['Color'][4]['Color'] }] }] },
                { Text: "25", Buttons: [{ VerticalTop: [{ Index: '25_4', Color: ButtonColors[12]['Color'][0]['Color'] }], Horizontal: [{ Index: '25_1', Color: ButtonColors[12]['Color'][1]['Color'] }, { Index: '25_2', Color: ButtonColors[12]['Color'][2]['Color'] }, { Index: '25_3', Color: ButtonColors[12]['Color'][3]['Color'] }], VerticalButton: [{ Index: '25_5', Color: ButtonColors[12]['Color'][4]['Color'] }] }] },
                { Text: "26", Buttons: [{ VerticalTop: [{ Index: '26_4', Color: ButtonColors[13]['Color'][0]['Color'] }], Horizontal: [{ Index: '26_1', Color: ButtonColors[13]['Color'][1]['Color'] }, { Index: '26_2', Color: ButtonColors[13]['Color'][2]['Color'] }, { Index: '26_3', Color: ButtonColors[13]['Color'][3]['Color'] }], VerticalButton: [{ Index: '26_5', Color: ButtonColors[13]['Color'][4]['Color'] }] }] },
                { Text: "27", Buttons: [{ VerticalTop: [{ Index: '27_4', Color: ButtonColors[14]['Color'][0]['Color'] }], Horizontal: [{ Index: '27_1', Color: ButtonColors[14]['Color'][1]['Color'] }, { Index: '27_2', Color: ButtonColors[14]['Color'][2]['Color'] }, { Index: '27_3', Color: ButtonColors[14]['Color'][3]['Color'] }], VerticalButton: [{ Index: '27_5', Color: ButtonColors[14]['Color'][4]['Color'] }] }] },
                { Text: "28", Buttons: [{ VerticalTop: [{ Index: '28_4', Color: ButtonColors[15]['Color'][0]['Color'] }], Horizontal: [{ Index: '28_1', Color: ButtonColors[15]['Color'][1]['Color'] }, { Index: '28_2', Color: ButtonColors[15]['Color'][2]['Color'] }, { Index: '28_3', Color: ButtonColors[15]['Color'][3]['Color'] }], VerticalButton: [{ Index: '28_5', Color: ButtonColors[15]['Color'][4]['Color'] }] }] }
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
                { Text: "48", Buttons: [{ VerticalTop: [{ Index: '48_4', Color: ButtonColors[16]['Color'][0]['Color'] }], Horizontal: [{ Index: '48_1', Color: ButtonColors[16]['Color'][1]['Color'] }, { Index: '48_2', Color: ButtonColors[16]['Color'][2]['Color'] }, { Index: '48_3', Color: ButtonColors[16]['Color'][3]['Color'] }], VerticalButton: [{ Index: '48_5', Color: ButtonColors[16]['Color'][4]['Color'] }] }] },
                { Text: "47", Buttons: [{ VerticalTop: [{ Index: '47_4', Color: ButtonColors[17]['Color'][0]['Color'] }], Horizontal: [{ Index: '47_1', Color: ButtonColors[17]['Color'][1]['Color'] }, { Index: '47_2', Color: ButtonColors[17]['Color'][2]['Color'] }, { Index: '47_3', Color: ButtonColors[17]['Color'][3]['Color'] }], VerticalButton: [{ Index: '47_5', Color: ButtonColors[17]['Color'][4]['Color'] }] }] },
                { Text: "46", Buttons: [{ VerticalTop: [{ Index: '46_4', Color: ButtonColors[18]['Color'][0]['Color'] }], Horizontal: [{ Index: '46_1', Color: ButtonColors[18]['Color'][1]['Color'] }, { Index: '46_2', Color: ButtonColors[18]['Color'][2]['Color'] }, { Index: '46_3', Color: ButtonColors[18]['Color'][3]['Color'] }], VerticalButton: [{ Index: '46_5', Color: ButtonColors[18]['Color'][4]['Color'] }] }] },
                { Text: "45", Buttons: [{ VerticalTop: [{ Index: '45_4', Color: ButtonColors[19]['Color'][0]['Color'] }], Horizontal: [{ Index: '45_1', Color: ButtonColors[19]['Color'][1]['Color'] }, { Index: '45_2', Color: ButtonColors[19]['Color'][2]['Color'] }, { Index: '45_3', Color: ButtonColors[19]['Color'][3]['Color'] }], VerticalButton: [{ Index: '45_5', Color: ButtonColors[19]['Color'][4]['Color'] }] }] },
                { Text: "44", Buttons: [{ VerticalTop: [{ Index: '44_4', Color: ButtonColors[20]['Color'][0]['Color'] }], Horizontal: [{ Index: '44_1', Color: ButtonColors[20]['Color'][1]['Color'] }, { Index: '44_2', Color: ButtonColors[20]['Color'][2]['Color'] }, { Index: '44_3', Color: ButtonColors[20]['Color'][3]['Color'] }], VerticalButton: [{ Index: '44_5', Color: ButtonColors[20]['Color'][4]['Color'] }] }] },
                { Text: "43", Buttons: [{ VerticalTop: [{ Index: '43_4', Color: ButtonColors[21]['Color'][0]['Color'] }], Horizontal: [{ Index: '43_1', Color: ButtonColors[21]['Color'][1]['Color'] }, { Index: '43_2', Color: ButtonColors[21]['Color'][2]['Color'] }, { Index: '43_3', Color: ButtonColors[21]['Color'][3]['Color'] }], VerticalButton: [{ Index: '43_5', Color: ButtonColors[21]['Color'][4]['Color'] }] }] },
                { Text: "42", Buttons: [{ VerticalTop: [{ Index: '42_4', Color: ButtonColors[22]['Color'][0]['Color'] }], Horizontal: [{ Index: '42_1', Color: ButtonColors[22]['Color'][1]['Color'] }, { Index: '42_2', Color: ButtonColors[22]['Color'][2]['Color'] }, { Index: '42_3', Color: ButtonColors[22]['Color'][3]['Color'] }], VerticalButton: [{ Index: '42_5', Color: ButtonColors[22]['Color'][4]['Color'] }] }] },
                { Text: "41", Buttons: [{ VerticalTop: [{ Index: '41_4', Color: ButtonColors[23]['Color'][0]['Color'] }], Horizontal: [{ Index: '41_1', Color: ButtonColors[23]['Color'][1]['Color'] }, { Index: '41_2', Color: ButtonColors[23]['Color'][2]['Color'] }, { Index: '41_3', Color: ButtonColors[23]['Color'][3]['Color'] }], VerticalButton: [{ Index: '41_5', Color: ButtonColors[23]['Color'][4]['Color'] }] }] },
                { Text: "31", Buttons: [{ VerticalTop: [{ Index: '31_4', Color: ButtonColors[24]['Color'][0]['Color'] }], Horizontal: [{ Index: '31_1', Color: ButtonColors[24]['Color'][1]['Color'] }, { Index: '31_2', Color: ButtonColors[24]['Color'][2]['Color'] }, { Index: '31_3', Color: ButtonColors[24]['Color'][3]['Color'] }], VerticalButton: [{ Index: '31_5', Color: ButtonColors[24]['Color'][4]['Color'] }] }] },
                { Text: "32", Buttons: [{ VerticalTop: [{ Index: '32_4', Color: ButtonColors[25]['Color'][0]['Color'] }], Horizontal: [{ Index: '32_1', Color: ButtonColors[25]['Color'][1]['Color'] }, { Index: '32_2', Color: ButtonColors[25]['Color'][2]['Color'] }, { Index: '32_3', Color: ButtonColors[25]['Color'][3]['Color'] }], VerticalButton: [{ Index: '32_5', Color: ButtonColors[25]['Color'][4]['Color'] }] }] },
                { Text: "33", Buttons: [{ VerticalTop: [{ Index: '33_4', Color: ButtonColors[26]['Color'][0]['Color'] }], Horizontal: [{ Index: '33_1', Color: ButtonColors[26]['Color'][1]['Color'] }, { Index: '33_2', Color: ButtonColors[26]['Color'][2]['Color'] }, { Index: '33_3', Color: ButtonColors[26]['Color'][3]['Color'] }], VerticalButton: [{ Index: '33_5', Color: ButtonColors[26]['Color'][4]['Color'] }] }] },
                { Text: "34", Buttons: [{ VerticalTop: [{ Index: '34_4', Color: ButtonColors[27]['Color'][0]['Color'] }], Horizontal: [{ Index: '34_1', Color: ButtonColors[27]['Color'][1]['Color'] }, { Index: '34_2', Color: ButtonColors[27]['Color'][2]['Color'] }, { Index: '34_3', Color: ButtonColors[27]['Color'][3]['Color'] }], VerticalButton: [{ Index: '34_5', Color: ButtonColors[27]['Color'][4]['Color'] }] }] },
                { Text: "35", Buttons: [{ VerticalTop: [{ Index: '35_4', Color: ButtonColors[28]['Color'][0]['Color'] }], Horizontal: [{ Index: '35_1', Color: ButtonColors[28]['Color'][1]['Color'] }, { Index: '35_2', Color: ButtonColors[28]['Color'][2]['Color'] }, { Index: '35_3', Color: ButtonColors[28]['Color'][3]['Color'] }], VerticalButton: [{ Index: '35_5', Color: ButtonColors[28]['Color'][4]['Color'] }] }] },
                { Text: "36", Buttons: [{ VerticalTop: [{ Index: '36_4', Color: ButtonColors[29]['Color'][0]['Color'] }], Horizontal: [{ Index: '36_1', Color: ButtonColors[29]['Color'][1]['Color'] }, { Index: '36_2', Color: ButtonColors[29]['Color'][2]['Color'] }, { Index: '36_3', Color: ButtonColors[29]['Color'][3]['Color'] }], VerticalButton: [{ Index: '36_5', Color: ButtonColors[29]['Color'][4]['Color'] }] }] },
                { Text: "37", Buttons: [{ VerticalTop: [{ Index: '37_4', Color: ButtonColors[30]['Color'][0]['Color'] }], Horizontal: [{ Index: '37_1', Color: ButtonColors[30]['Color'][1]['Color'] }, { Index: '37_2', Color: ButtonColors[30]['Color'][2]['Color'] }, { Index: '37_3', Color: ButtonColors[30]['Color'][3]['Color'] }], VerticalButton: [{ Index: '37_5', Color: ButtonColors[30]['Color'][4]['Color'] }] }] },
                { Text: "38", Buttons: [{ VerticalTop: [{ Index: '38_4', Color: ButtonColors[31]['Color'][0]['Color'] }], Horizontal: [{ Index: '38_1', Color: ButtonColors[31]['Color'][1]['Color'] }, { Index: '38_2', Color: ButtonColors[31]['Color'][2]['Color'] }, { Index: '38_3', Color: ButtonColors[31]['Color'][3]['Color'] }], VerticalButton: [{ Index: '38_5', Color: ButtonColors[31]['Color'][4]['Color'] }] }] }
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
                { Index: "48", Text: "48", Color: Colors[16]['Color'] },
                { Index: "47", Text: "47", Color: Colors[17]['Color'] },
                { Index: "46", Text: "46", Color: Colors[18]['Color'] },
                { Index: "45", Text: "45", Color: Colors[19]['Color'] },
                { Index: "44", Text: "44", Color: Colors[20]['Color'] },
                { Index: "43", Text: "43", Color: Colors[21]['Color'] },
                { Index: "42", Text: "42", Color: Colors[22]['Color'] },
                { Index: "41", Text: "41", Color: Colors[23]['Color'] },
                { Index: "31", Text: "31", Color: Colors[24]['Color'] },
                { Index: "32", Text: "32", Color: Colors[25]['Color'] },
                { Index: "33", Text: "33", Color: Colors[26]['Color'] },
                { Index: "34", Text: "34", Color: Colors[27]['Color'] },
                { Index: "35", Text: "35", Color: Colors[28]['Color'] },
                { Index: "36", Text: "36", Color: Colors[29]['Color'] },
                { Index: "37", Text: "37", Color: Colors[30]['Color'] },
                { Index: "38", Text: "38", Color: Colors[31]['Color'] }
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
                                <View key={index3} style={{ width: 43, height: 43, marginRight: 5, alignItems: 'center' }}>

                                    {s3.Buttons.map((b, index) => (
                                        <View style={{ width: 43, height: 43, marginRight: 5, alignItems: 'center' }} key={index}>

                                            {b.VerticalTop.map(vt => (
                                                <TouchableOpacity onPress={() => Clicked(vt.Index)} key={vt.Index} style={{ width: 14.33, height: 14.33, backgroundColor: vt.Color, marginRight: 5, borderColor: '#000', borderWidth: 1 }} />
                                            ))}

                                            <View style={{ width: 43, height: 15, marginRight: 5, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                                                {b.Horizontal.map(h => (
                                                    <TouchableOpacity onPress={() => Clicked(h.Index)} key={h.Index} style={{ width: 14, height: 14.33, backgroundColor: h.Color, borderColor: '#000', borderWidth: 1 }} />
                                                ))}

                                            </View>

                                            {b.VerticalButton.map(vb => (
                                                <TouchableOpacity onPress={() => Clicked(vb.Index)} key={vb.Index} style={{ width: 14.33, height: 14.33, backgroundColor: vb.Color, marginRight: 5, borderColor: '#000', borderWidth: 1 }} />
                                            ))}

                                        </View>
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
                                <View key={index5} style={{ width: 43, height: 43, marginRight: 5, alignItems: 'center', justifyContent: 'center' }}>

                                    {s5.Buttons.map((b, index) => (
                                        <View style={{ width: 43, height: 43, marginRight: 5, alignItems: 'center' }} key={index}>

                                            {b.VerticalTop.map(vt => (
                                                <TouchableOpacity onPress={() => Clicked(vt.Index)} key={vt.Index} style={{ width: 14.33, height: 14.33, marginBottom: 0.5, backgroundColor: vt.Color, marginRight: 5, borderColor: '#000', borderWidth: 1 }} />
                                            ))}

                                            <View style={{ width: 43, height: 15, marginRight: 5, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>

                                                {b.Horizontal.map(h => (
                                                    <TouchableOpacity onPress={() => Clicked(h.Index)} key={h.Index} style={{ width: 14, height: 14.33, backgroundColor: h.Color, borderColor: '#000', borderWidth: 1 }} />
                                                ))}

                                            </View>

                                            {b.VerticalButton.map(vb => (
                                                <TouchableOpacity onPress={() => Clicked(vb.Index)} key={vb.Index} style={{ width: 14.33, height: 14.33, backgroundColor: vb.Color, marginRight: 5, borderColor: '#000', borderWidth: 1 }} />
                                            ))}

                                        </View>
                                    ))}

                                </View>
                            ))}

                        </View>

                        <View style={styles.Seson6}>

                            {e.Sesion6.map((s6) => (
                                <TouchableOpacity onPress={() => Clicked(s6.Index)} key={s6.Index} style={{ width: 43, marginRight: 5, height: '98%', alignItems: "center", justifyContent: 'center' }}>
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
