import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import {useState, useContext} from 'react'
import colors from '../globalVars'
import S from '../styles'
import UserContext from '../userContext'
import Hists from '../Backend/Hists'
import Constants from 'expo-constants'
export default function Filtered({navigation}) {
  const {Filtro, setFiltro,setRef, setScreen} = useContext(UserContext)
  return (
    <ScrollView style={{flex: 1, backgroundColor: colors.Fundo, paddingTop: Constants.statusBarHeight}}>
    {Filtro[0] !== 'Ato' && Hists.filter(Hist => Hist.Categorias.includes(Filtro[1])).map(item => (
      <TouchableOpacity onPress={() => {
        setRef(item.REF)
        setScreen(item.NomeCurto)
        navigation.navigate('Hist')
      }} style={{padding: 12}}>
      <S.Title>{item.NomeCurto}</S.Title>
          <View style={{width: '100%',height: 2,backgroundColor: 'rgba(255,255,255,0.08)',borderRadius: 80,marginBottom: 6}}></View>
      </TouchableOpacity>
    ))}
    {Filtro[0] === 'Ato' && Hists.filter(Hist => Hist.Ato === Filtro[1]).map(item => (
            <TouchableOpacity onPress={() => {
              setRef(item.REF)
              setScreen(item.NomeCurto)
              navigation.navigate('Hist')
            }} style={{padding: 12}}>
      <S.Title>{item.NomeCurto}</S.Title>
          <View style={{width: '100%',height: 2,backgroundColor: 'rgba(255,255,255,0.08)',borderRadius: 80,marginBottom: 6}}></View>
      </TouchableOpacity>
    ))}
    </ScrollView>
  )


}