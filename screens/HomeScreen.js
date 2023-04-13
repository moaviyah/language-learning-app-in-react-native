import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Dimensions, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import  translate  from 'translate-google-api';


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


const HomeScreen = () => {
    const [inputText1, setInputText1] = useState('');
    const [inputText2, setInputText2] = useState('');

    const [translatedText, setTranslatedText] = useState('');

    const translateText = async (text) => {
        // try {
        //   const result = await translate(text, { from: 'en', to: 'es' });
        //   setTranslatedText(result);
        //   console.log(result)
        // } catch (error) {
        //   console.log(error);
        // }
        const result = await translate(`I'm fine.`, {
            tld: "cn",
            to: "vi",
          });
          console.log(result)
      }
    const favoriteWords = [
        { urdu: 'سلام', english: 'hello' },
        { urdu: 'خدا حافظ', english: 'goodbye' },
        { urdu: 'کتاب', english: 'book' },
        { urdu: 'سفید', english: 'white' },
        { urdu: 'بہترین', english: 'best' },
    ];
    const renderItem = ({ item }) => (
        <View style={styles.favorites}>
            <Text style={{ fontSize: 18 }}>{item.urdu}</Text>
            <Text>{item.english}</Text>
            <AntDesign name='delete' size={18} color='red' />
        </View>
    );
    return (
        <View style={styles.container}>
            <Text style={styles.headingTxt}>
                Translate
            </Text>
            <View style={styles.translateContainer}>
                <View style={styles.languageContainer}>
                    <Text style={styles.languageText}>English</Text>
                    <Icon name="swap-horizontal" size={24} color="#fff" style={styles.icon} />
                    <Text style={styles.languageText}>Spanish</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter text"
                        value={inputText1}
                        onChangeText={setInputText1}
                    />
                    <TouchableOpacity onPress={() => Clipboard.setString(inputText1)}>
                        <Icon name="content-paste" size={24} color="#aaa" style={styles.copyIcon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='translation'
                        value={inputText2}
                        onChangeText={setInputText2}
                    >

                    </TextInput>
                    <TouchableOpacity onPress={() => Clipboard.setString(inputText2)}>
                        <Icon name="content-copy" size={24} color="#aaa" style={styles.copyIcon} />
                    </TouchableOpacity>
                </View>


                <TouchableOpacity style={styles.translateBtn} onPress={()=>translateText(inputText1)}>
                    <Text style={styles.translateBtnTxt}>
                        Translate
                    </Text>
                </TouchableOpacity>


            </View>
            <View style={styles.seefav}>
                <Text style={styles.headingTxt}>
                    Today's words
                </Text>

                <TouchableOpacity style={{flexDirection:'row', alignItems:'center', alignSelf:'auto'}} onPress={()=>navigation.navigate('Favorites')}>
                <Text style={{fontSize:20}}>
                    Favorites
                </Text>
                <Ionicons name='caret-forward' size={22}/>
                </TouchableOpacity>

            </View>
            <FlatList
                data={favoriteWords}
                renderItem={renderItem}
                keyExtractor={(item) => item.urdu}

            />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: windowHeight * 0.03
    },
    translateContainer: {
        backgroundColor: '#fff',
        height: windowHeight * 0.25,
        borderRadius: 10,
        shadowColor: '#000',
        padding: windowWidth * 0.05,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    languageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#4caf50',
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-evenly'
    },
    icon: {
        marginHorizontal: 5,
    },
    languageText: {
        color: '#fff',
        fontSize: 18,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingVertical: windowHeight * 0.01,
    },
    copyIcon: {
        marginHorizontal: 5,
    },
    headingTxt: {
        fontSize: 22,
        fontWeight: '600',
        padding: windowHeight * 0.02
    },
    translateBtn: {
        backgroundColor: '#4caf50',
        width: windowWidth * 0.2,
        alignSelf: 'flex-end',
        borderRadius: 10,
        paddingVertical: windowHeight * 0.01,
        justifyContent: 'center',
        alignItems: 'center '
    },
    translateBtnTxt: {
        color: '#fff'
    },
    favorites: {
        flexDirection: 'row',
        padding: 16,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        shadowColor: '#000',
        marginVertical: windowHeight * 0.005
    },
    seefav:{
        flexDirection:'row',
        justifyContent:'space-between'
    }
});

export default HomeScreen;
