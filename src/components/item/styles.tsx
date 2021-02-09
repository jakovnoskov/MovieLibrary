const styles = {
  listItem: {
    //borderWidth: 1,
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
  },

  sideLeft: {
    //borderWidth:1,
    flexDirection: 'column',
    flex: 1,
    paddingRight: '10%'
  },

  sideRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desc: {
    fontSize: 14,
    borderColor: '#0002',
  },

  filmTitle: {
    fontSize: 15,
    fontWeight: '600',
    borderColor: '#0007',
  },

  listItemText: {
    fontSize: 17,
  },

  scoreBox: {
    marginRight: 20,
    width: 50,
    height: 50,
    borderRadius: 7,
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    
    elevation: 7,
  },
  score: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff'
  },

}

export default styles