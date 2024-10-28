/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
  TextInput,
  Button
} from 'react-native';


function ToDoList({tasks}) {



  return (
    <SafeAreaView>
      <ScrollView>
        {/**<Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>oh my god</Text>
          </View>
        </Pressable>*/}
        {tasks.map((task,index)  => (<Pressable key={index}><Text>{task}</Text></Pressable>))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;

