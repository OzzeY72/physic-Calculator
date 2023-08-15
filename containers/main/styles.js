export const styles = {
  container: {
   backgroundColor:'#3E3331' 
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#3E3331',
    flex: 1,
    margin: 2,
      text: {
        fontSize: 25
      }
  },
  shadow_text: {
    textAlign: "right",
    color: "#9c9c9c",
    fontSize: 30,
    borderColor: '#3E3331'
  },
  base_text: {
    textAlign: "right",
    fontSize: 45,
    color:'#FBF8F8',
    borderColor: '#3E3331'
  },
  /*history: {
    base: {
      flexDirection: "row",
      backgroundColor: "#241D1C"
    },
    content: {
      base: {},
    }
  },*/
  head: {
    base: {
      flex: 4,
      backgroundColor:'#3E3331',
    },
    text: {
      base: {
        flex: 1,
        first:{
          flex: 2,
          borderColor:'#3E3331',
          borderBottomColor: '#a6a1a1'
        },
        second:{
          flex: 1,
          borderColor:'#3E3331',
        },
      }
    },

  },

  content: {
    base: {
      flex: 8
    }
  },
  border:{
    textAlign: "right",
    color:'#FBF8F8',
    borderColor: '#3E3331',
    fontSize: 25,
  },
};