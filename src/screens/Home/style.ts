import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#0066ff',
        padding:45
    },
    containerDark:{
        flex:1,
        backgroundColor:'#000000',
        padding:45
    },
    logo: {
        resizeMode: 'contain',
        width:300,
        height:50,
      },
    input:{
        backgroundColor: '#fefbd8',
        borderRadius: 12,
        flex:1,
        marginRight: 10,
        height: 55,
        padding: 8,
        fontSize: 15,
        color:'#000000',

    },
    buttonTask:{
        height:60,
        width:70,
    },
    buttonDarkMode:{
        height:30,
        width:100,
        marginTop:30,
        borderRadius:20,
        backgroundColor: '#e6e6ff',
        alignItems:"center",
        justifyContent: "center",
    },
    form:{
        width:'100%',
        flexDirection: 'row',
        marginTop:25,
        marginBottom:28,
    },
    noTasks:{
        resizeMode: 'contain',
        width:300,
        height:85,
    },

})