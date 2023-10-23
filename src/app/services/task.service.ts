import { Injectable } from '@angular/core';
import { Task } from '../models/Task';
import { Title } from '@angular/platform-browser';
import { getLocaleTimeFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[];

  constructor() {
    this.tasks = [
    //   {title:'write', description:'I have to write', hide:true},
    //   {title:'create website', description:'I have to create website', hide:true}
    ];
   }
   

  //  Obtener tareas 
    getTask() { 
      // if(localStorage.getItem("tasks")===null){
      //   return this.tasks;
      // }else{
      //   this.tasks = JSON.parse(localStorage.getItem("tasks"));
      //   return this.tasks;
      // }

      const storedTasks: string | null = localStorage.getItem("tasks");

      if (storedTasks === null) {
        this.tasks = [];
      } else {
        this.tasks = JSON.parse(storedTasks);
      }
    
      return this.tasks;

   }

   //agregar tareas
   addTask(task: Task) {
    
    // const storedTasks: string | null = localStorage.getItem("tasks");
    // let tasks: Task[] = storedTasks ? JSON.parse(storedTasks) : [];
    // tasks.push(task);
    // localStorage.setItem("tasks", JSON.stringify(tasks));

    this.tasks.push(task);

    const storedTasks: string | null = localStorage.getItem("tasks");
    let tasks: Task[] = [];

    if (storedTasks !== null) {
    tasks = JSON.parse(storedTasks);
    } 

   tasks.push(task);
   localStorage.setItem("tasks", JSON.stringify(tasks));


  //   if(localStorage.getItem("task") === null){
  //   tasks.push(task);
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  //  }else{
  //   tasks = JSON.parse(localStorage.getItem("tasks"));
  //   tasks.push(task);
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  //  }
   }

   deleteTask(task:Task){
    for(let i=0; i<this.tasks.length; i++){
      if(task == this.tasks[i])
      this.tasks.splice(i, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks))
    }
   }
   
}
