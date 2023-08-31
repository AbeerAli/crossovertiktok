import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        zIndex: 9,
        bottom: 0,
        top:0,
        right:0,
        left:0,
        backgroundColor:'rgba(0, 0, 0, 0.2)'
    },
    flashcardFront:{
        justifyContent:'center',
        flex:9,
        marginRight:70,
        verticalAlign:'middle'
    },
    flashcardText:{
        margin:20,
        color:'white',
        fontSize:20,
        fontFamily:'Verdana',
        fontWeight:'400',
    },
    flashcardBack:{
        justifyContent:'center',
        flex:9,
        marginRight:70,
    },
    divider:{
        borderBottomColor: 'white',
        marginLeft:20,
        marginRight:20,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    answerLabel:{
        fontStyle:'italic',
        color:'#55bd76',
        fontWeight:'bold',
        marginLeft:20,
        marginRight:20,
        marginTop:20
    },
    flashcardTextAnswer:{
        margin:20,
        color:'#c3bcc4',
        fontSize:12,
        fontFamily:'Verdana',
        fontWeight:'400',
    },
    bottomContainer:
    {
        marginRight:70,
        flex:1,
        margin:20,
        justifyContent:'flex-end'
    },
    username:{
        fontSize:16,
        fontFamily:'Verdana',
        color:'white',
        fontWeight:'bold',
        alignSelf:'stretch',
        bottom:0
    },
    description:{
        fontSize:14,
        fontFamily:'Verdana',
        color:'white',
        alignSelf:'stretch',
        bottom:0,
        top:10
    }
})

export default styles