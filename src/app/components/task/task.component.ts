import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task!: Task;

  constructor(
    public taskService: TaskService
  ) {
  }

  ngOnInit(){
    
  }

  deleteTask(task:Task){
    if(confirm("estas seguro de querer eliminarlo?")){
    this.taskService.deleteTask(task);
    }
  }

}
