import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { Entypo } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function SidebarOverlay({item} : any) {
  return (
    <View style={styles.sidebar}>
                <TouchableOpacity>
                    <Image 
                        style={{padding:10}}
                        source={{uri:item.user.avatar}}
                        height={48}
                        width={48}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={{padding:10}} name="cards-heart" size={36} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={{padding:10}} name="chat-processing-outline" size={36} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={{padding:10}} name="bookmark-outline" size={36} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Entypo name="forward" size={36} color="white" />
                </TouchableOpacity>
            </View>
  )
}