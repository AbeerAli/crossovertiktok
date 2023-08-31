import { View, Text, Image, FlatList, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import styles from './styles'
import { Dimensions } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import FollowingPostOverlay from '../../components/followingoverlay';

export default function FollowingScreen() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const tabBarHeight = useBottomTabBarHeight()
    
    const getFollowing = async () => {
      const response = await fetch(
        'https://cross-platform.rp.devfactory.com/following'
      )
      const sdata = await response.json()
      data.push(sdata)

      setData(data)
      console.log(data)
      setLoading(false);
  }

  const renderItem = ({item}) => {
    console.log(item)
    return (
        <>
        <FollowingPostOverlay item={item}/>
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
    getFollowing()
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
                renderItem={renderItem}
                pagingEnabled
                onEndReached={getFollowing}
                decelerationRate={'normal'}
                keyExtractor={(item, index) => index}/> 
                
                : console.log('no data')(<View style={[styles.baseText, justifyContent= 'center']}><Text>No Data here...</Text></View>)}
            
        </View>
  )
}