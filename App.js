import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { DarkModeProvider } from './Settings/DarkMode';
import Login from './Authentication/Login';
import Bottom from './BottomBar/Bottom';
import Membership from './Screens/Membership';
import ProductDetail from './Data/ProductDetail';
import SearchResults from './Data/SearchResult';
import Loading from './Screens/Loading';
import Checkout from './Screens/Checkout';
import Bottomafterlogin from './BottomBar/BottomAfterLogin';
import Wishlist from './Screens/Wishlist';
import BugReport from './Screens/BugReport';
import ContactUsScreen from './Screens/ContactUsScreen';
import Orders from './Screens/Orders';
import ProfileEdit from './Screens/ProfileEdit';
import { StripeProvider } from '@stripe/stripe-react-native';
import BarcodeScannerScreen from './Screens/BarCodeScreen';
const Stack = createStackNavigator(); 

export default function App() {
  return (
   
   <StripeProvider publishableKey='pk_test_1370KkDd7LEWuaI886nnZxQR'>
   <DarkModeProvider>
   <NavigationContainer>
    <Stack.Navigator initialRouteName="Bottom" >
      <Stack.Screen name='Login' component={Login} /> 
      <Stack.Screen name='Bottom' component={Bottom}/> 
      <Stack.Screen name='Membership' component={Membership}/>
      <Stack.Screen name="ProductDetail" component={ProductDetail} />
      <Stack.Screen name='SearchResults' component={SearchResults} />
      <Stack.Screen name='Loading' component={Loading}/>
      <Stack.Screen name='Checkout' component={Checkout} />
      <Stack.Screen name='BottomAfterLogin' component={Bottomafterlogin}/> 
      <Stack.Screen name='Wishlist' component={Wishlist}/>
      <Stack.Screen name='BugReport' component={BugReport}/>
      <Stack.Screen name='ContactUsScreen' component={ContactUsScreen}/>
      <Stack.Screen name='Orders' component={Orders}/>
      <Stack.Screen name='ProfileEdit' component={ProfileEdit}/> 
      <Stack.Screen name='BarCodeScreen' component={BarcodeScannerScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
   </DarkModeProvider>
   </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
