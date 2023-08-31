import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React, {useState} from 'react'
import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';
import SidebarOverlay from '../sidebar';
import FeedbackComponent from '../feedback';


export default function FollowingPostOverlay({item} : any) {
    const [shouldShowAnswer, setShouldShow] = useState(false);
 
    const renderFlashFront = ({item} : any) => (
        <LinearGradient colors={['#032b5f', '#054b86', '#1885b0']} style={styles.container}>
            <View  style={styles.container}>
                <View style={styles.flashcardFront}>
                    <Text style={styles.flashcardText}>{item.flashcard_front}</Text>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.username}>{item.user.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
            <SidebarOverlay item={item}/>
        </LinearGradient>
    )

    const renderFlashBack = ({item} : any) => (
        <LinearGradient colors={['#032b5f', '#054b86', '#1885b0']} style={styles.container}>
            <View style={styles.container}>
                <View style={styles.flashcardBack}>
                    <Text style={styles.flashcardText}>{item.flashcard_front}</Text>
                    <View style={styles.divider}
                    />
                    <Text style={styles.answerLabel}>Answer</Text>
                    <Text style={styles.flashcardTextAnswer}>{item.flashcard_back}</Text>
                    
                </View>
                <FeedbackComponent />
                <View style={styles.bottomContainer}>
                    <Text style={styles.username}>{item.user.name}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                </View>
            </View>
            <SidebarOverlay item={item} />
        </LinearGradient>
    )

    return(
        <TouchableWithoutFeedback
            onPress={() => setShouldShow(!shouldShowAnswer)}>
            {shouldShowAnswer ? renderFlashBack({item}) : renderFlashFront({item})}
        </TouchableWithoutFeedback>
        
    )
}