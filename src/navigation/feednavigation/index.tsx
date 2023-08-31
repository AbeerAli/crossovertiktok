import React from 'react'
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import FeedScreen from '../../screens/feed'
import FollowingScreen from '../../screens/following'


const {Screen, Navigator} = createMaterialTopTabNavigator()
const FeedNavigation = () => {
  return (
    <Navigator
        initialRouteName='For You'
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        screenOptions={({ route }) => ({
          tabBarGap:16,
          tabBarShowLabel:true,
          tabBarIndicatorStyle: {
            backgroundColor:'white',
          },
          tabBarIndicatorContainerStyle:{
            marginLeft: 16,
          },
          tabBarItemStyle:
          {
            width: 'auto',
            paddingHorizontal: 0
          },
          tabBarLabelStyle: {
            color:'white',
            textTransform:'none',
            fontSize:14,
            marginHorizontal: 0,
          },
          tabBarStyle: {
              position:'absolute',
              left: 0,
              right: 0,
              top: 35,
              paddingLeft: 16,
              backgroundColor: 'transparent',
          },})}>
        {/*tabBar={props => <MyTabBar {...props} />}>*/}
        
        <Screen name="Following" component={FollowingScreen}/>
        <Screen name="For You" component={FeedScreen}/>
        
    </Navigator>
  )
}

export default FeedNavigation