const styles = {
    HeaderContainer:{
      backgroundColor: '#00A87D',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: 55,
      elevation: 5
    },
    HeaderText:{
      color: '#FFF',
      fontSize: 20,
      marginRight: 20

    },
    HeaderBackIcon:{
      marginRight: 20
    },
    Button: {
       backgroundColor: '#00A87D',
       alignItems: 'center',
       paddingRight:50,
       paddingLeft:50,
       paddingTop:10,
       paddingBottom:10,
       borderRadius: 5,
      },
      HeadIndexButton: {
        backgroundColor: '#eee',
        alignItems: 'flex-end',
        padding:10,
       },
       HeadIndexNumber: {
        backgroundColor: '#00A87D',
        alignItems: 'center',
        width:35,
        height:35,
        borderRadius: 40,
        color:'#fff',
        textAlign:'center',
        textAlignVertical:'center',    
        fontSize:18,
        fontWeight:'600',    
       },
       SubIndexButton: {
        backgroundColor: '#eee',
        alignItems: 'flex-end',
        padding:10,
        paddingRight:30,
       },
       SubIndexNumber: {
        backgroundColor: '#aaa',
        alignItems: 'center',
        width:30,
        height:30,
        borderRadius: 40,
        color:'#fff',
        textAlign:'center',
        textAlignVertical:'center',   
        fontSize:12

       },
      Text:{
          color:'#fff'
      },
      HeadIndexText:{
        fontSize:18,
        fontWeight:'600',
        marginRight:10,
        marginTop:5
      },
      SubIndexText:{
        fontSize:14,
        marginRight:10,
        marginTop:5
      },
      Title:{
        fontSize:25,
        fontWeight: '600',
        color: '#000'
      },
      SubTitle:{

      },
      BookImageView:{
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#c3eea2',
        padding:3
      },
      BookImage:{
          width:100,
          height:150
      },
      Stars:{
        marginRight:5,
        flexDirection: 'row',
      },
      StarImage:{
        width:15,
        height:15
    },
      Row:{
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    Column:{
        flexDirection: 'column',
        justifyContent: 'space-around',
        marginRight: 10,
    },



    Padd10:{
      padding:10
    },
    Padd15:{
      padding:15
    }
  }

  export default styles;