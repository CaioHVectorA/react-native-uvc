import {createStackNavigator} from '@react-navigation/stack'
import Home from './Home/Home'
import Filtered from './Home/Filtered'
import Conto from './Home/Conto'
import Hist from './Home/Hist'
const Stack = createStackNavigator()

export default function ContosContainer() {
return (
  <Stack.Navigator>
  <Stack.Screen name={'Home'} component={Home} options={{headerShown: false}}/>
  <Stack.Screen name={'Filtered'} component={Filtered} options={{headerShown: false}}/>
  <Stack.Screen name={'Hist'} component={Hist} options={{headerShown: false}}/>
  <Stack.Screen name={'Conto'} component={Conto} options={{headerShown: false}}/>
  </Stack.Navigator>
)


}