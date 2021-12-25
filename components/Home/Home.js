import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { Divider, Tile } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { ScrollView } from 'react-native-web';
import catagoryData from '../../assets/data/catagoryDate';
import catagory from '../../assets/data/catagoryDate';
import popularData from '../../assets/data/popularData';
import popular from '../../assets/data/popularData';
import Foods from '../Foods/Foods';

Feather.loadFont();

export default function Home() {
    const [text, onChangeText] = React.useState("Useless Text");

    const renderCatagoryItem = ({ item }) => {
        return (
            <View style={styles.catagoryItemWrapper}>
                <Image source={item.Image} style={styles.catagoryItemImage} />
                <Text style={styles.catagoryItemTitle}>{item.title}</Text>
                <View style={styles.catagorySelectWrapper}>
                    <Feather name="chevron-right" size={10} style={styles.contentIcon} />
                </View>
            </View>
        );

    };

    return (
        <View style={styles.container}>
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}>

                {/* header  */}
                <SafeAreaView>
                    <View style={styles.headerwWrapper}>
                        <Image source={require('../../assets/images/profile.png')} style={styles.profileImage} />

                        <Feather style={styles.Red} name="menu" size={24} />
                    </View>
                </SafeAreaView>
                {/* title area  */}
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Food Hunter</Text>
                </View>
                {/* search bar  */}
                <View style={styles.searchWrapper}>
                    <Feather name='search' size={20} style={styles.search} />
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        placeholder="useless placeholder"
                        value={text}
                    />
                </View>

                {/* catagory head and content  */}
                <View style={styles.catagoryWrapper}>
                    <Text style={styles.catagoryTitle}> Catagory</Text>
                    <View style={styles.catagoryList}>
                        <FlatList
                            data={catagoryData}
                            renderItem={renderCatagoryItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                </View>



                {/* popular section start  */}
                <View style={styles.popularWrapper}>
                    <Text style={styles.popularTitle}>Popular</Text>
                    {popularData.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            onPress={() =>
                                navigation.navigate('Details', {
                                    item: item,
                                })
                            }>
                            <View
                                style={[
                                    styles.popularCardWrapper,
                                    {
                                        marginTop: item.id == 1 ? 10 : 20,
                                    },
                                ]}>
                                <View>
                                    <View>
                                        <View style={styles.popularTopWrapper}>
                                            <MaterialCommunityIcons
                                                name="crown"
                                                size={12} />
                                            <Text style={styles.popularTopText}>top of the week</Text>
                                        </View>
                                        <View style={styles.popularTitlesWrapper}>
                                            <Text style={styles.popularTitlesTitle}>
                                                {item.title}
                                            </Text>
                                            <Text style={styles.popularTitlesWeight}>
                                                Weight {item.weight}
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={styles.popularCardBottom}>
                                        <View style={styles.addPizzaButton}>
                                            <Feather name="plus" size={10} />
                                        </View>
                                        <View style={styles.ratingWrapper}>
                                            <MaterialCommunityIcons
                                                name="star"
                                                size={10}

                                            />
                                            <Text style={styles.rating}>{item.rating}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={styles.popularCardRight}>
                                    <Image source={item.Image} style={styles.popularCardImage} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View >
        // </View >



    )
}


const styles = StyleSheet.create({
    Red: {
        color: '#9C27B0',
    },
    container: {
        flex: 1,
    },
    headerwWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        alignItems: 'center',
    },
    profileImage: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
    titleWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#9C27D0',
    },
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 30,
    },
    search: {
        color: '#9C27B0',
        paddingRight: 5,
    },
    input: {
        fontSize: 14,
        flex: 1,
        borderBottomColor: '#9C27D0',
        borderBottomWidth: 2,
    },
    catagoryWrapper: {
        marginTop: 30,
    },
    catagoryTitle: {
        fontWeight: 'bold',
        fontSize: 23,
        marginLeft: 15,
        textAlign: 'left',
    },
    catagoryList: {
        margin: 15,
    },
    catagoryItemWrapper: {
        backgroundColor: '#FFC100',
        elevation: 5,
        padding: 20,
        borderRadius: 20,
        margin: 10,
    },
    catagoryItemTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingBottom: 20,
    },
    catagoryItemImage: {
        height: 50,
        paddingBottom: 20,
    },
    contentIcon: {
        textAlign: 'center',
        fontWeight: 'bold',
        padding: 5,
    },
    catagorySelectWrapper: {
        backgroundColor: '#FCFCFC',
        borderRadius: 20,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    popularWrapper: {
        paddingHorizontal: 20,
    },
    popularTitle: {
        fontWeight: 'bold',
        fontSize: 26,
    },
    popularCardWrapper: {
        backgroundColor: '#FCFCFC',
        borderRadius: 25,
        paddingTop: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2,
    },
    popularTopWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    popularTopText: {
        marginLeft: 10,
        fontWeight: 'bold',
        backgroundColor: '#FCFDDD',
        padding: 5,
        fontSize: 14,
    },
    popularTitlesWrapper: {
        marginTop: 20,
    },
    popularTitlesTitle: {
        fontSize: 14,
        fontWeight: '700',
    },
    popularTitlesWeight: {
        fontSize: 10,
        fontStyle: 'italic',
        marginTop: 5,
    },
    popularCardBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: -20,
    },
    addPizzaButton: {
        backgroundColor: '#FCFC',
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderTopRightRadius: 25,
        borderBottomLeftRadius: 25,
      },
      ratingWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
      },
      rating: {
        color: '#ff00ff',
        fontSize: 12,
        marginLeft: 5,
      },
      popularCardRight: {
        marginLeft: 40,
      },
      popularCardImage: {
        width: 210,
        height: 125,
        resizeMode: 'contain',
      },
});
