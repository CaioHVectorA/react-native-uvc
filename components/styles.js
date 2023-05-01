import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
import colors from './globalVars'

//titulo,subtitulo,texto corrido,página?
var S = {
  Title: styled.Text`
  font-size: 32;
  font-family: Raleaway;
  color: white;
  font-weight: bold;
  ` ,
  Container: styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.Fundo}
  `,
  ScrollContainer: styled.ScrollView`
  flex: 1;
  flex-direction: column;
  background-color: ${colors.Fundo}
  `,
  Button: styled.Pressable`
  padding : 20;
  `,
  Division: styled.View`
  width: 100%;
  background-color: rgba(255,255,255,.2);
  height: 2;
  border-radius: 25px;
  `,
  Sample: styled.Text`
  font-size: 20;
  color: white;
  font-weight: 400;
  `
}

export default S