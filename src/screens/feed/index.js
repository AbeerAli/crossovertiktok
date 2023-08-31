import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './styles'
import { Dimensions } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import FeedPostOverlay from '../../components/feedoverlay';

export default function FeedScreen() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState('A');
   
    const tabBarHeight = useBottomTabBarHeight()

    const getForYou = async () => {
        const response = await fetch(
          'https://cross-platform.rp.devfactory.com/for_you'
        )
        const sdata = await response.json()
        let id = sdata.id
        data.push(sdata)

        setData(data)
        setLoading(false)
        
        getAnswer(id)
    }

    const getAnswer = async (id) => {
        const response = await fetch(
          'https://cross-platform.rp.devfactory.com/reveal?id=' + id
        )
        const answerData = await response.json()

        console.log('getAnswerCall: ' + answerData.correct_options[0].id)
        
        setCorrectAnswer(answerData.correct_options[0].id)
    }

    const renderItem = ({item}) => {
        console.log('renderItem: ' + correctAnswer)
        return (
            <>
            <FeedPostOverlay item={item} correctAnswer/>
            <View style={[{flex: 1, height: Dimensions.get('window').height - tabBarHeight, width: Dimensions.get('window').width} ]}>
                <Image
                    style={[{height: Dimensions.get('window').height - tabBarHeight, width:Dimensions.get('window').width}]}
                    source={{uri: item.image}} 
                />
            </View>
            </>
            
        )
    }

    useEffect(() => {
        setLoading(true)
        getForYou()
        
      }, []);

    return (
        <View style={styles.container}>
            {loading && 
            (
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size="large" />
                </View>
            )}
            {!(data === null || data === undefined) ? 
            <FlatList 
                data={data}
                extraData={correctAnswer}
                renderItem={renderItem}
                pagingEnabled
                onEndReached={getForYou}
                decelerationRate={'normal'}
                keyExtractor={(item, index) => index}/> 
                
                : console.log('no data')(<View style={[styles.baseText, justifyContent= 'center']}><Text>No Data here...</Text></View>)}
            
        </View>
    )
}