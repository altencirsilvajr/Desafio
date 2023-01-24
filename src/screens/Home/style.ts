import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#3377ff',
        padding:45
    },
    eventTitle:{
        fontSize:30,
        fontWeight:"bold",
        marginTop:20,
        textAlign:"center",
        flexDirection: "row",
        color: "#000000"
    },
    eventDate:{
        marginTop:25,
        fontSize: 15,
        textAlign:"center",
        color: "#000000"
    },
    input:{
        backgroundColor: '#fefbd8',
        borderRadius: 12,
        flex:1,
        marginRight: 10,
        height: 50,
        padding: 8,
        fontSize: 15,
        color:'#000000',

    },
    buttonText:{
        color: '#FFF',
        fontSize:35,
    },
    button:{
        height:50,
        width:50,
        borderRadius:20,
        backgroundColor: '#31CF67',
        alignItems:"center",
        justifyContent:"center",
    },
    form:{
        width:'100%',
        flexDirection: 'row',
        marginTop:25,
        marginBottom:28,
    },
    listEmpty:{
        textAlign: "center",
        color:'#000000',
        fontSize: 25,
    }

})