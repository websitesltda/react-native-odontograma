
# react-native-odontograma

## Getting started

`$ npm install react-native-odontograma --save`

### Mostly automatic installation

`$ react-native link react-native-odontograma`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-odontograma` and add `RNOdontograma.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNOdontograma.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import br.com.4tsistemas.odonto.RNOdontogramaPackage;` to the imports at the top of the file
  - Add `new RNOdontogramaPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-odontograma'
  	project(':react-native-odontograma').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-odontograma/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-odontograma')
  	```


## Usage
```javascript
import RNOdontograma from 'react-native-odontograma';

export default function App() {

  return (
     <RNOdontograma Clicked={(e) => console.log(e)} BtnColors={[{ Index: '18_4', Color: '#f00' }, { Index: '18_3', Color: '#f00' }]} />
  );
}
```
  