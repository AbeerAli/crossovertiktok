import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    justifyContent:'flex-end',
    zIndex: 9,
    bottom: 0,
    top:0,
    right:0,
    left:0,
    backgroundColor:'rgba(0, 0, 0, 0.2)'
  },
  questionContainer:{
    flex:4,
    top:100,
    marginLeft:20,
    marginTop:20,
    marginRight:70
  },
  questionBox:{
    backgroundColor:'rgba(0, 0, 0, 0.6)',
    padding:10,
    borderRadius:10
  },
  questionText:{
    fontSize:20,
    color:'white',
    lineHeight:30,
    fontWeight:'bold',
    fontFamily:'Verdana'
  },
  bottomContainer:
  {
    marginLeft:20,
    marginTop:20,
    marginRight:70,
    flex:1,
    margin:20,
    justifyContent:'flex-end'
  },
  username:{
    fontSize:15,
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
  },
  optionsContainer:{
    marginRight:50,
    justifyContent:'flex-end',
    flex:4
  },
  optionsBox:{
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    padding:10,
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
    borderRadius:7
  },
  optionsBoxSelectedCorrect:{
    backgroundColor: 'rgba(60,179,113, 1)',
    padding:10,
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
    borderRadius:7
  },
  optionsBoxSelectedWrong:{
    backgroundColor: 'rgba(220,20,60, 1)',
    padding:10,
    marginLeft:20,
    marginRight:20,
    marginBottom:10,
    borderRadius:7
  },
  optionsSingle:{
    color:'white',
    padding:5,
    fontSize:15,
    fontFamily:'Verdana',
    textShadowColor:'black',
    textShadowRadius:10,
    zIndex:9999
  }
})

export default styles