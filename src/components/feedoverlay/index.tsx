import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import styles from './styles'
import SidebarOverlay from '../sidebar';

export default function FeedPostOverlay({item} : any) {
  const [selection, setSelection] = useState(null);
  const [isCorrect, setCorrect] = useState(false);
  const [isWrong, setWrong] = useState(false);

  const handleSelection = ({item, index} : any) => {
    setSelection(item)
    setCorrect(false)
    setWrong(false)
    if(index === 0){
      setCorrect(true)
    }
    else
    {
      setWrong(true)
    }
  }

  const renderOptions = ({item, index} : any) => {
    return(
      <TouchableOpacity 
        style={
          [
            styles.optionsBox,
            item === selection && isCorrect && styles.optionsBoxSelectedCorrect,
            item === selection && isWrong && styles.optionsBoxSelectedWrong
          ]
        }
        onPress={() => { handleSelection({item, index}) }}>
        <Text style={styles.optionsSingle}>{item.answer}</Text>
      </TouchableOpacity>
    )
  
  }

  const optionsArray = item.options

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <View style={styles.questionBox}>
          <Text style={styles.questionText}>{item.question}</Text>    
        </View>
      </View>
      <View style={styles.optionsContainer}>
        <FlatList 
          data={optionsArray}
          renderItem={renderOptions}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.username}>{item.user.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
      <SidebarOverlay item={item}/>
    </View>
  )
}