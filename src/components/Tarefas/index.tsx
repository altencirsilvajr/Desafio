import { Text,View, TouchableOpacity} from "react-native";
import { styles } from "./style";
import React from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";


type Props = {
	name: string;
  onRemove: () => void;
}

export function Tarefas({name, onRemove}: Props){
    return(
        <View style = {styles.container}>
            <Text style ={styles.name}>
            <BouncyCheckbox
                size={25}
                fillColor="blue"
                unfillColor="#FFFFFF"
                text= {name}
                onPress={(_isChecked: boolean) => {}}            
            />
            
            </Text>

            <TouchableOpacity 
            style={styles.button} onPress ={onRemove}>
              <Text style={styles.buttonText}>
                -
              </Text>
          </TouchableOpacity>
        </View>
    )
}
