import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        backgroundColor:'#f2f2f2',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius:20,
    },
    name:{
        color: '#FFF', 
        flex:1,
        marginLeft:15,
    },
    buttonTrash:{
        resizeMode: 'contain',
        height:75,
        width:60,
    }
})
