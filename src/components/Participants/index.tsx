import { Text,View, TouchableOpacity} from "react-native";
import { styles } from "./style";
import React from 'react'


type Props = {
	name: string;
  onRemove: () => void;
}

export function Participants({name, onRemove}: Props){
    return(
        <View style = {styles.container}>
            <Text style ={styles.name}>
              {name}
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
