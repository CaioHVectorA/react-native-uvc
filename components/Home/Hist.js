import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {useContext, useState, useEffect} from 'react'
import UserContext from '../userContext'
import S from '../styles'
import colors from '../globalVars'
import Hists from '../Backend/Hists'
import Constants from 'expo-constants'
import { useFonts } from 'expo-font'

const Chapter = ({ data }) => {
  const [open, setOpen] = useState(false)
  return (
        <View style={styles.chapter}> 
        <S.Title style={{fontSize: 28}}>{data.Nome}</S.Title>
        </View>
  )
}

export default function Hist({navigation}) {
      const [fontsLoaded] = useFonts({
    'Raleaway': require('../../assets/Fonts/Raleway-VariableFont_wght.ttf'),
  });
  const {setScreen, ref,setTxt} = useContext(UserContext)
  const [data, setData] = useState(null)
  useEffect(() => {
    Hists.forEach((item) => {
      if (item.REF === ref) {setData(item)}
    })
  },[ref])
  return (
    <S.ScrollContainer>
    {data && <ScrollView style={{paddingBottom: 50}}>
    <View style={{padding: 20}}>
    <S.Title style={{fontSize: 25,fontFamily: 'Raleaway'}}>{data.NomeLongo}</S.Title>
    <S.Division style={{backgroundColor: colors.Rosa, opacity: 0.2}}/>
    </View>
    <Image style={{width: 300, height: 300,borderRadius: 25,alignSelf: 'center'}} source={{uri: data.ImgQuadrada}}/>
    <S.Sample style={{padding: 20}}>{data.Sinopse}</S.Sample>
    <View style={{flexDirection: 'row',paddingHorizontal: 20,width: '100%',alignItems: 'center',flexWrap: 'wrap'}}>
    {data.Categorias && data.Categorias.map((item, index) => (
      <View style={[styles.category, {marginLeft: index !== 0 && index !== 3 ? 8 : 0, marginTop: index === 3 ? 16 : 0}]}>
      <S.Sample>{item}</S.Sample>
      </View>
    )) }
    </View>
   {data && data.Tipo === 'SOLO' && <View>
   <TouchableOpacity onPress={() => {
     setScreen(data.NomeCurto)
     setTxt(`${data.REF}.txt`)
     navigation.navigate('Conto')
   }} style={{width: '80%',alignItems: 'center',paddingVertical: 6,alignSelf: 'center',backgroundColor: colors.Rosa,borderRadius: 8,marginTop: 4}}><S.Sample>Ler Agora</S.Sample></TouchableOpacity>
    </View>}
    {data && data.Tipo === 'SERIE' && <View>
      {data.Capitulos.map(item => (
        <Chapter data={item}/>
      ))}
    </View>}
    </ScrollView>}
    </S.ScrollContainer>
  )
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: colors.Rosa,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 85,
    fontSize: 13
  },
  chapter: {
    backgroundColor: colors.Rosa,
    width: '100%',

  }
})