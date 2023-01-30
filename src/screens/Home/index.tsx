import React, {useState} from "react";

import { View , Text, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';

import { styles } from "./style";

import { Participants } from "../../components/Participants";




export function Home() {
  const [participantName , setParticipantName] = useState('');
  const [participants , setParticipants] = useState <String[]> ([]);
  const [myText, setMyText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);


    function handleParticipantAdd() {
      
      const participantsLowerCase = participants.map(participant => participant.toLowerCase())
      if (participantsLowerCase.includes(participantName.toLowerCase())) {
        return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
      }
      
      if (participantName.length === 0) {
        return Alert.alert("Espaço vazio", "Nenhum valor foi digitado");

      }
      setParticipants( previewState => [...previewState ,participantName]);
      setParticipantName ('');

    }
    

    function handleParticipantRemove(name: string) {
      Alert.alert("Remover",`Deseja realmente remover: ${name}?`,
      [
        {
          text: "SIM",
          onPress: () => setParticipants(previewState => previewState.filter(participants => participants !== name))
        },
        {
          text:"NÃO",
          style: "cancel"
        }
      ])
    }

    function toggleDarkMode() {
      setIsDarkMode(!isDarkMode);
    }
  return(
    <View style={[styles.container,isDarkMode ? styles.containerDark:styles.container]}> 

        <TextInput 
            maxLength={40}
            style={styles.eventTitle}
            placeholder = "Nome do Evento"
            placeholderTextColor= "#ffffff"
            onChangeText={setMyText}
            value ={myText}
            multiline={true}
          />
        <TouchableOpacity onPress={toggleDarkMode} style={styles.buttonDarkMode}>
          <Text>{isDarkMode ? "Light Mode" : "Dark Mode"}</Text>
        </TouchableOpacity>


        
        <View style={styles.form}>

          <TextInput 
            style={styles.input}
            placeholder = "Insira o participante aqui"
            placeholderTextColor= "#6B6B6B"
            onChangeText={setParticipantName}
            value ={participantName}
          />
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleParticipantAdd}>
              <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
    
        </View>
        
        <FlatList showsVerticalScrollIndicator ={false}
         
          data={participants}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <Participants
                key={String (item)}
                name = {String(item)} 
                onRemove ={()=> handleParticipantRemove(`${item}`)}/>
          )}
        ListEmptyComponent={() => (
          <Text style ={styles.listEmpty}>
            (Sem participantes)
          </Text>
        )}  
        />
    </View>
  );
}