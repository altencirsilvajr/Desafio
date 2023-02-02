import React, {useState} from "react";

import { View , Text, TextInput, TouchableOpacity, FlatList, Alert, Image} from 'react-native';

import { styles } from "./style";

import { Tarefas} from "../../components/Tarefas"



export function Home() {
  const [taskName , setTaskName] = useState('');
  const [tasks , setTask] = useState <String[]> ([]);
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
        <Image
        style={styles.logo}
        source={require('../../components/icons/logo.png')}
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
            onPress={handleTaskAdd}>
              <Image
                style={styles.buttonTask}
                source={require('../../components/icons/send.png')}
              />
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
            <Image
              style={styles.noTasks}
              source={require('../../components/icons/list.png')}
            />
        )}  
        />
    </View>
  );
}