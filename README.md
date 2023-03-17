
# react-native-odontograma

## Getting started

`$ npm install react-native-odontograma --save`

### Mostly automatic installation

`$ react-native link react-native-odontograma`

![date-range-picker](https://github.com/websitesltda/react-native-odontograma/blob/main/assets/bg.png)


## Usage
```javascript
import RNOdontograma from 'react-native-odontograma';

export default function App() {

  return (
     <RNOdontograma Clicked={(e) => console.log(e)} BtnColors={[{ Index: '18_4', Color: '#f00' }, { Index: '18_3', Color: '#f00' }]} />
  );
}
```
  