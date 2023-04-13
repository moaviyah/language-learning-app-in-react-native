import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const FavoritesScreen = () => {
  const navigation = useNavigation();
  const handlePressButtonAsync = async () => {
    await WebBrowser.openBrowserAsync('https://www.google.com');
    console.log('Opened?')
  };

  return (
<View style={styles.container}>
  <View style={styles.headingContainer}>
  <Text style={styles.headingTxt}>
    Favorites
  </Text>
<Ionicons name='ios-add-circle-sharp' size={22} style={styles.addIcon} onPress={()=>handlePressButtonAsync}/>
  </View>

</View>
  )
}

export default FavoritesScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: windowHeight*0.005
  },
    headingTxt: {
      fontSize: 22,
      fontWeight: '600',
      padding: windowHeight * 0.02
  },
  headingContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:windowWidth*0.06
  },
  addIcon:{
    backgroundColor:'#fff',
    borderRadius:5,
    padding:windowWidth*0.005,
    shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
  }
})