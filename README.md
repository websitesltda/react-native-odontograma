
# react-native-odontograma

## Getting started

`$ npm install react-native-odontograma --save`

### Mostly automatic installation

`$ react-native link react-native-odontograma`

![date-range-picker](https://raw.githubusercontent.com/lazaronixon/react-native-date-range-picker/master/screenshots/shot1.png)


## Usage
```javascript
import RNOdontograma from 'react-native-odontograma';

export default function App() {

  return (
     <RNOdontograma Clicked={(e) => console.log(e)} BtnColors={[{ Index: '18_4', Color: '#f00' }, { Index: '18_3', Color: '#f00' }]} />
  );
}
```
  