const styles = {
  listItem: {
    height: '100%',
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    //paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth:1,
    borderColor:'#0003'
  },

  
  topBox:{
    position:'relative'
  },

  fovariteBox:{
    position:'absolute',
    backgroundColor: '#fff',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width:40,
    height:40,
    borderRadius:50,
    right:20,
    bottom:-20,
    zIndex:2,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7,
  },

  descriptionBox: {
    paddingTop:10,
  },

  desc: {
    fontSize: 15,
    borderColor: '#0002',
  },

  filmTitle: {
    fontSize: 22,
    marginBottom: 7,
    fontWeight: '600',
    borderColor: '#0007',
    paddingBottom: 5,
  },

  

  listItemText: {
    fontSize: 17,
  },

  scoreBox: {
    width: 80,
    height: 80,
    borderRadius: 7,
    alignContent: 'center',
    alignItems: 'center',
    //alignSelf: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 30,
    fontWeight: '600',
    color: '#fff'
  },

  header: {
    backgroundColor: '#FFFFFF',
    //paddingTop: 20,
    height:40,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    //borderWidth:1
  },
 
  panelHandle: {
    width: 100,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#00000040',
  },
  develloperBox:{
    flexDirection:'row',
    paddingTop:10
  },
  leftSide:{
    //flex:1,
    paddingRight:20
  },
  rightSide:{
    flex:1,
  },

  devValue:{
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  devTitle:{
    marginBottom:2,
    fontSize: 14,
    color: '#a0a0a0',
  }


}

export default styles