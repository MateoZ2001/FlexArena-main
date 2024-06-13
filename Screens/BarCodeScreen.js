import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'

const BarCodeScreen = () => {
  let base64Logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAA..';

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Scan your barcode 
      </Text>
    <QRCode
       value="Just some string value"
        logo={{uri: base64Logo}}
        size={250}
      logoBackgroundColor='transparent'
      
    />
    </View>
  )
}

export default BarCodeScreen

styles = StyleSheet.create({
  container:{ 
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:25,
    marginBottom:20,
    fontWeight:'bold'
  }
})