  import React from 'react';
  import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
  import { Icon } from 'react-native-elements';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
  import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const categories = [
    { title: 'Greetings', translation: 'سلامتی', icon: 'hand-wave' },
    { title: 'Animals', translation: 'جانوروں', icon: 'paw' },
    { title: 'Birds', translation: 'پرندوں', icon: 'kiwi-bird' },
    { title: 'Colors', translation: 'رنگوں', icon: 'palette' },
    { title: 'Fruits', translation: 'پھلوں', icon: 'apple-alt' },
    { title: 'Vegetables', translation: 'سبزیوں', icon: 'carrot' },
    { title: 'Transportation', translation: 'نقل و حمل', icon: 'car' },
    { title: 'Clothing', translation: 'لباسیں', icon: 'tshirt' },
    { title: 'Food', translation: 'کھانے پینے', icon: 'hamburger' },
    { title: 'Numbers', translation: 'اعداد', icon: 'calculator' },
    { title: 'Shapes', translation: 'شکلیں', icon: 'shapes' },
  ];

  const CollectionsScreen = ({ navigation }) => {
    const renderCard = (category, index) => {
      let iconComponent = null;
      if (category.title === 'Greetings') {
        iconComponent = <MaterialCommunityIcons name={category.icon} size={40} color='#1abc9c' />;
      } 
      else {
        iconComponent = <Icon name={category.icon} type='font-awesome-5' color='#1abc9c' size={40} />;
      }

      return (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate('Words', { category: category.title })}
          style={styles.cardContainer}
        >

            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{category.title}</Text>
              <Text style={styles.cardTranslation}>{category.translation}</Text>
              {iconComponent}
          </View>
        </TouchableOpacity>
      );
    };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {categories.map((category, index) => {
          return index % 2 === 0 ? (
            <View key={index} style={styles.row}>
              {renderCard(category, index)}
              {index < categories.length - 1 && renderCard(categories[index + 1], index + 1)}
            </View>
          ) : null;
        })}
      </ScrollView>
    );
  };
  export default CollectionsScreen;
  const styles = StyleSheet.create({
    container: {
      padding: windowHeight*0.005,
      justifyContent:'space-evenly'
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    cardContainer: {
      flex:1,
      marginVertical:windowHeight*0.01,
      marginHorizontal:windowWidth*0.01
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
      margin:windowHeight*0.01
    },
    cardHeader: {
      backgroundColor: '#fff',
      padding:windowHeight*0.05,
      borderRadius:10,
      alignItems: 'center',
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    cardBody: {
      fontSize: 16,
    },
    cardTranslation: {
      fontSize: 14,
      color: '#777',
    },
    icon:{
      marginTop:windowHeight*0.07,
    
      height:windowHeight*0.1,
      width:windowWidth*0.2,
      flex:1
    }
  });