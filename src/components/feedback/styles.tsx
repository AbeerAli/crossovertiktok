import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    flashcardFeedback:{
        marginBottom:10,
        color:'#c3bcc4',
        fontSize:15,
        fontFamily:'Verdana',
        fontWeight:'400',
    },
    flashFeedbackInnerContaier:
    {
        flexDirection:'row',
    },
    flashcardFeedbackContainer:
    {
        flex:2,
        marginRight:70,
        marginLeft:20
    },
    feedbackButtons:
    {   
        marginRight:10,
        borderRadius:5,
        width:48,
        height:48
    },
})
export default styles