import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private teacherService: TeacherService) { }

  students: Student[] = [];
  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.teacherService.getAllStudents().subscribe(response =>{
      this.students = Object.assign([], response);
      console.log(typeof(this.students));
    })
  }

  deleteResult(id:string | undefined){
    this.teacherService.deleteResult(id).subscribe(response =>{
      console.log(response);
      
      console.log(this.students);
      this.students = this.students.filter(student => student.id != id);
      console.log(this.students);
      
      
    })
  }

}
