import {Dimensions} from "react-native";
const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
export const styles = {
  key:{
    backgroundColor:'#000',
    height: screenHeight,
  },
  bcg:{
    backgroundColor:'#302ae8',
  },
  flatList:{
    text:{
      textAlign: 'right',
      fontSize: 20,
      color:'#f7f5eb',
      borderColor: '#3E3331',
    },
    author:{
        textAlign:'right',
      },
    textbox:{
      textAlign: 'right',
      boxSizing: 'content-box',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 7,
      backgroundColor: '#545248',
      paddingRight: 10,
      alignSelf:'flex-end',
      marginBottom:5,
      paddingBottom: 2,
      maxWidth: screenWidth/2-5,
    },
  },
  input: { 
    height: 40, 
    borderColor: 'gray',
    borderWidth: 2 ,
    borderRadius: 10,
    backgroundColor:'#fff',
  },
  view:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  button:{
    text:{
      textAlign: 'center',
      fontSize: 0,
      color:'#fff',
    },
    
    backgroundColor:'#000',
    borderColor: 'gray',
    borderWidth: 4 ,
    paddingLeft: 10,
    borderRadius: 10,
    //padding: 2,
    marginLeft:2,
    height: 40,
    width: 40,
  view2:{
    display:'flex',
    flexDirection:'row-reverse',
    justifyContent:'space-between',
  },
  buttonDel:{
    width: 20,
    height: 20,
    backgroundColor:'#000',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 50,
    marginTop:20, 
    marginLeft: 15,
  },
  
  areaView:{
    backgroundColor:'#000',
    alignContent:'stretch',
    paddingTop:40,
    //height: screenHeight-40,
  },
  block:{
    backgroundColor:'#000',
    justifyItems: "flex-end",
  },
  black:{
    backgroundColor:'#000',
  },
  dn:{
    display:'none',
  },
};