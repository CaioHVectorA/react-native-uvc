import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import {useContext, useState, useEffect} from 'react'
import UserContext from '../userContext'
import S from '../styles'
import colors from '../globalVars'
import Hists from '../Backend/Hists'
import Constants from 'expo-constants'
import axios from 'axios'
import { useFonts } from 'expo-font'
export default function Conto({navigation}) {
  const {ref, setScreen,txt} = useContext(UserContext)
  const filePath = `../../assets/txt/${txt}`
  const [fileContent, setFileContent] = useState(null);
  useEffect(() => {
    axios.get(filePath).then(Response => console.log(Response))
  }, []);

  return (
    <View></View>
  )
}