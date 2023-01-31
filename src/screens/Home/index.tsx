import React, {useState} from "react";

import { View , Text, TextInput, TouchableOpacity, FlatList, Alert, Button} from 'react-native';

import { styles } from "./style";

import { Tarefas} from "../../components/Tarefas"



export function Home() {
  const [taskName , setTaskName] = useState('');
  const [tasks , setTask] = useState <String[]> ([]);
  const [myText, setMyText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);


    function handleTaskAdd() {
      
      const taskLowerCase = tasks.map(task => task.toLowerCase())
      if (taskLowerCase.includes(taskName.toLowerCase())) {
        return Alert.alert("Tarefa existe", "Essa tarefa já existe na lista");
      }
      
      if (taskName.length === 0) {
        return Alert.alert("Espaço vazio", "Nenhuma tarefa foi digitada");

      }
      setTask( previewState => [...previewState ,taskName]);
      setTaskName ('');

    }
    

    function handleTaskRemove(name: string) {
      Alert.alert("Remover",`Remover tarefa: ${name}?`,
      [
        {
          text: "SIM",
          onPress: () => setTask(previewState => previewState.filter(task => task !== name))
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
            placeholder = "Insira uma tarefa:"
            placeholderTextColor= "#ffffff"
            onChangeText={setMyText}
            value ={myText}
            multiline={true}
          />
        <TouchableOpacity onPress={toggleDarkMode} style={styles.buttonDarkMode}>
          <Text>{isDarkMode ? "Modo Claro" : "Modo Escuro"}</Text>
        </TouchableOpacity>


        <View style={styles.form}>

          <TextInput 
            style={styles.input}
            placeholder = "Insira a tarefa aqui"
            placeholderTextColor= "#6B6B6B"
            onChangeText={setTaskName}
            value ={taskName}
          />
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={handleTaskAdd}>
              <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
    
        </View>
        
        <FlatList showsVerticalScrollIndicator ={false}
         
          data={tasks}
          keyExtractor={item => String(item)}
          renderItem={({ item }) => (
            <Tarefas
                key={String (item)}
                name = {String(item)} 
                onRemove ={()=> handleTaskRemove(`${item}`)}/>
          )}
        ListEmptyComponent={() => (
          <Text style ={styles.listEmpty}>
            (0 Tarefas)
          </Text>
        )}  
        />
    </View>
  );
}