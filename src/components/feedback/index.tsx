import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

export default function FeedbackComponent() {
  return (
    <View style={styles.flashcardFeedbackContainer}>
                    <Text style={styles.flashcardFeedback}>How well did you know this?</Text>
                    <View style={styles.flashFeedbackInnerContaier}>
                        <TouchableOpacity style={[styles.feedbackButtons, { backgroundColor:'#d94322', justifyContent:'center', alignItems:'center'}, ]}>
                            <Text style={{color:'white'}}>1</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.feedbackButtons, { backgroundColor:'#eab676', justifyContent:'center', alignItems:'center'}, ]}>
                            <Text style={{color:'white'}}>2</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.feedbackButtons, { backgroundColor:'#F1D53D', justifyContent:'center', alignItems:'center'}, ]}>
                            <Text style={{color:'white'}}>3</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.feedbackButtons, { backgroundColor:'#279024', justifyContent:'center', alignItems:'center'}, ]}>
                            <Text style={{color:'white'}}>4</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.feedbackButtons, { backgroundColor:'#60f791', justifyContent:'center', alignItems:'center'}, ]}>
                            <Text style={{color:'white'}}>5</Text>
                        </TouchableOpacity>
                    </View>
                </View>
  )
}