import { Text,View, TouchableOpacity,Image} from "react-native";
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
                fillColor="green"
                unfillColor="#FFFFFF"
                text= {name}
                onPress={(_isChecked: boolean) => {}}            
            />
            </Text>

            <TouchableOpacity 
              onPress ={onRemove}>
              <Image
                style={styles.buttonTrash}
                source={require('../../components/icons/trash.png')}
              />
          </TouchableOpacity>
        </View>
    )
}
