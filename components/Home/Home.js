import { TouchableOpacity, Pressable, Text, View, ScrollView } from 'react-native'
import { useState, useEffect,useContext } from 'react'
import UserContext from '../userContext'
import colors from '../globalVars'
import S from '../styles'
import { useFonts } from 'expo-font';
// import Header from './'
import Constants from 'expo-constants'
function Line({ Nome,Cor, nav }) {
  const {Filtro, setFiltro,setScreen} = useContext(UserContext)
  return  (
    <View style={{width: '100%',backgroundColor: Cor,borderRadius: 80,padding: 5,marginTop: 8}}>
    <TouchableOpacity onPress={() => {
      setScreen(Nome)
      setFiltro(['Categoria',Nome])
      nav.navigate('Filtered')
    }} style={{width: '100%',textAlign: 'center'}}>
    <Text style={{textAlign: 'center',fontSize: 24,fontWeight: 'bold'}}>{Nome}</Text>
    </TouchableOpacity>
    </View>
  )
}

function Ato({Nome, nav, index}) {
      const {Filtro, setFiltro, setScreen} = useContext(UserContext)
  return (
    <View>
    <TouchableOpacity onPress={() => {
      setScreen(Nome)
      setFiltro(['Ato',index])
      nav.navigate('Filtered')
    }}>
    <Text style={{color: 'white',fontSize: 24,fontWeight: 'normal',marginVertical: 4.7}}>{Nome}</Text>
    <View style={{width: '100%',height: 2,backgroundColor: 'rgba(255,255,255,0.08)',borderRadius: 80}}></View>
    </TouchableOpacity>
    </View>
  )
}


export default function Home({navigation}) {
    const [fontsLoaded] = useFonts({
    'Raleaway': require('../../assets/Fonts/Raleway-VariableFont_wght.ttf'),
  });
  return (
    <View style={{paddingHorizontal: 21, flex: 1,backgroundColor: colors.Fundo,paddingTop: Constants.statusBarHeight}}>
    <S.Title style={{fontStyle: 'italic',marginBottom: 0,marginTop: 12}}>Por Categoria</S.Title>
    <Line Nome={'Ação'} Cor={'#EAA903'} nav={navigation} />
    <Line Nome={'Drama'} Cor={'#B140A6'} nav={navigation} />
    <Line Nome={'Violência'} Cor={'#EAA903'} nav={navigation} />
    <Line Nome={'Sci-Fi'} Cor={'#B7A6B4'} nav={navigation} />
    <Line Nome={'Terra'} Cor={'#B140A6'} nav={navigation} />
    <Line Nome={'Universal'} Cor={'#EAA903'} nav={navigation} />
    <S.Title style={{fontStyle: 'italic',marginVertical: 8}}>Por Categoria</S.Title>
    <Ato Nome={'Pré Universal'} index={0} nav={navigation}/>
    <Ato Nome={'Ato 0'} index={1} nav={navigation}/>
    <Ato Nome={'Ato I - Ascensão'} index={2} nav={navigation}/>
    <Ato Nome={'Ato II - Redenção'} index={3} nav={navigation}/>
    <Ato Nome={'Ato III - Renegação'} index={4} nav={navigation}/>
    </View>
  )
}