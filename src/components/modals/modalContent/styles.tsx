const styles = {
  listItem: {
    height: '100%',
    paddingBottom: 25,
    paddingHorizontal: 25,
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
    paddingTop:20,
    paddingRight: '10%'
  },

  desc: {
    fontSize: 17,
    borderColor: '#0002',
  },

  filmTitle: {
    fontSize: 22,
    marginBottom: 7,
    fontWeight: '600',
    borderColor: '#0007',
    paddingBottom: 5,
    paddingRight: '30%'
  },

  

  listItemText: {
    fontSize: 17,
  },

  scoreBox: {
    width: '100%',
    height: 200,
    borderRadius: 7,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  score: {
    fontSize: 160,
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
    paddingTop:20,
  },
  devValue:{
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
  devTitle:{
    marginTop:2,
    fontSize: 14,
    color: '#a0a0a0',
  }


}

export default styles