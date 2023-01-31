import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#4da6ff',
        padding:45
    },
    containerDark:{
        flex:1,
        backgroundColor:'#000066',
        padding:45
    },
    eventTitle:{
        fontSize:30,
        fontWeight:"bold",
        marginTop:20,
        textAlign:"center",
        flexDirection: "row",
        color: "#ffffff"
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
    listEmpty:{
        textAlign: "center",
        color:'#ffffff',
        fontSize: 25,
    }

})